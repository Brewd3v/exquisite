import Document, { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.png" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Quicksand&display=optional"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Jost&display=optional"
                        rel="stylesheet"
                    />
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-W3W7QTC');`,
                    }}>
                    </script>

                </Head>
                <body>
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3W7QTC"
                                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                    />
                    <Nav />
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default MyDocument;