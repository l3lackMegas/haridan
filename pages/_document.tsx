import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

import PreLoader from '../components/MainLayout/PreLoader'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			<Html lang="en">
				<Head>
						<link rel="icon" href="/img/favicon.jpg" type="image/gif" sizes="16x16"/>
						<meta name="keywords" content="Jaruwat Pohong, l3lackMegas, Resume, HTML, CSS, JavaScript"></meta>
						<meta name="description"
								content="I am Jaruwat Pohong, Frontend Developer.
										Actually I am a student in university who would like to do anything about web design and frontend development.
										I understand HTML, CSS and JavaScript as well. And I can use modern library like React.js, TypeScript, etc."
						/>

						<meta property="og:url" content="https://jaruwat.fucking-thai.dev" />
						<meta property="og:type" content="website" />
						<meta property="og:title" content="Jaruwat Pohong - Résumé" />
						<meta property="og:description"
								content="I am Jaruwat Pohong, Frontend Developer.
										Actually I am a student in university who would like to do anything about web design and frontend development.
										I understand HTML, CSS and JavaScript as well. And I can use modern library like React.js, TypeScript, etc."
						/>
						<meta property="og:image" content="https://jaruwat.fucking-thai.dev/img/og-image.jpg" />
				</Head>
				<body>
					<PreLoader id="IE-Message">Sorry, This website does not support your browser.</PreLoader>
					<Main />
					<NextScript />
					<script async src="/js/checkOutdataBrowser.js"/>
				</body>
			</Html>
		)
	}
}

export default MyDocument