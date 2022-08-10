import Document, { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Quicksand&display=optional"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Jost&display=optional"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body>
                    <Nav />
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default MyDocument;