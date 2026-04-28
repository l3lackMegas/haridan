const STATIC_ASSETS: string[] = [
    '/img/icon50.jpg',
    '/img/profile-mask.jpg',
    '/img/profile-blur.jpg',
    '/img/bg-blur.jpg',
    '/img/desktop-background.jpg',
    '/img/mobile-background.jpg',
    '/img/skill-background.jpg',
];

const IMAGE_EXT_RE = /\.(jpg|jpeg|png|gif|webp|svg|avif)(\?.*)?$/i;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isImageUrl(url: string): boolean {
    if (!url) return false;
    if (/^https?:\/\//i.test(url)) {
        // skip remote (e.g. youtube) — only test extensions for absolute remote images
        return IMAGE_EXT_RE.test(url);
    }
    return IMAGE_EXT_RE.test(url);
}

export function collectAssetUrls(): string[] {
    const urls = new Set<string>();

    STATIC_ASSETS.forEach(u => urls.add(u));

    // NOTE: Skip preloading work item images (w.img / w.imageList) for now.
    // Those will be lazy-loaded by the modal/image viewer later.

    return Array.from(urls);
}

function preloadImage(url: string): Promise<void> {
    return new Promise(resolve => {
        const img = new Image();
        const done = () => resolve();
        img.onload = done;
        img.onerror = done; // don't block on errors
        img.src = url;
    });
}

export interface PreloadResult {
    total: number;
    loaded: number;
}

/**
 * Preload images + fonts. Calls onProgress(loaded, total, percent) as items finish.
 * Resolves when all are settled (success or error).
 */
export function preloadAssets(
    onProgress: (loaded: number, total: number, percent: number) => void
): Promise<PreloadResult> {
    const urls = collectAssetUrls();

    // Treat fonts as a single "asset" so it contributes to the progress bar.
    const fontsAvailable =
        typeof document !== 'undefined' && (document as any).fonts && (document as any).fonts.ready;
    const total = urls.length + (fontsAvailable ? 1 : 0);
    let loaded = 0;

    const tick = () => {
        loaded += 1;
        const percent = total > 0 ? Math.min(100, Math.floor((loaded / total) * 100)) : 100;
        onProgress(loaded, total, percent);
    };

    onProgress(0, total, 0);

    const imagePromises = urls.map(url => preloadImage(url).then(tick));

    const fontPromise = fontsAvailable
        ? (document as any).fonts.ready.then(tick).catch(tick)
        : Promise.resolve();

    return Promise.all([...imagePromises, fontPromise]).then(() => ({
        total,
        loaded,
    }));
}
