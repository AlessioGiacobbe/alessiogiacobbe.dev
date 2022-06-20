import { Html, Head, Main, NextScript } from 'next/document'
import useTranslation from "next-translate/useTranslation";

export default function Document() {
    const { t } = useTranslation('index');

    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="description" content="Alessio Giacobbe is a passionate junior fullstack web developer, based in Genoa" />
                <meta name="robots" content="all" />
                <meta name="language" content="en" />
                <meta name="charset" content="iso-8859-1" />
                <meta name="copyright" content="Alessio Giacobbe" />
                <meta name="author" content="Alessio Giacobbe" />
                <meta name="reply-to" content="giacobbealessio@gmail.com" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}