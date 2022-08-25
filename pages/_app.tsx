import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
			<link rel="manifest" href="/images/site.webmanifest" />
			<title>Ready for liftoff? 🚀</title>
			<Component {...pageProps} />
		</Head>
	)
}

export default MyApp
