import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Youtube from '../MainLayout/YoutubeIframe';
import { ModalActive } from '../MainLayout/Modal';
import { validateYouTubeUrl } from '../../../lib/utility';
import styles from './styles.module.scss';

interface Props {
    id: number;
    title: string;
    tags?: Array<string>;
    describe?: string;
    img: string;
    date: string;
    link?: string;
    imageList?: Array<string>;
    color?: string;
}

export default function ModalContent({ title, describe, img, date, link, imageList, tags, color }: Props) {
    const images = imageList?.filter((u) => !validateYouTubeUrl(u)) ?? [];
    const youtubes = imageList?.filter((u) => validateYouTubeUrl(u)) ?? [];

    return (
        <div className={styles.modalLayout}>
            <motion.div
                className={styles.modalLeft}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className={styles.modalLogoArea} style={{ backgroundColor: color }}>
                    <div className={styles.modalLogoOverlay} />
                    <img className={styles.modalLogo} src={img} alt={title} />
                </div>
                <h2 className={styles.modalTitle}>{title}</h2>
                <p className={styles.modalDate}>{date}</p>
                {tags && tags.length > 0 && (
                    <div className={styles.modalTagList}>
                        {tags.map((t, i) => <span key={i} className={styles.modalTag}>{t}</span>)}
                    </div>
                )}
                {describe && <p className={styles.modalDescribe}>{describe}</p>}
                {link && (
                    <Link to={link} target="_blank" rel="noreferrer">
                        <button className={styles.visitBtn}>
                            <span>Visit website</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </button>
                    </Link>
                )}
            </motion.div>

            <motion.div
                className={styles.modalRight}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
                {youtubes.length > 0 && (
                    <div className={styles.youtubeWrap}>
                        <Youtube src={youtubes[0]} styles={{ width: '100%', height: '100%', border: 0, borderRadius: 'var(--radius-lg)' }} />
                    </div>
                )}
                {images.length > 0 && (
                    <div className={styles.modalGallery}>
                        {images.map((src, i) => (
                            <ModalActive
                                key={i}
                                layoutId={`img-${src}`}
                                layoutUniqueId={`img-${src}`}
                                isDisableScrollHandle
                                closeAnyWhere
                                variant="image-preview"
                                modalChildren={<img src={src} alt="preview" />}
                            >
                                <div className={styles.modalGalleryItem} style={{ backgroundColor: color }}>
                                    <img src={src} alt={title} />
                                </div>
                            </ModalActive>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}
