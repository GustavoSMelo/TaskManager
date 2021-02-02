import Document, {Head, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {

    static getInitialProps (ctx) {

        const sheet = new ServerStyleSheet()
        const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />))

        const styleTags = sheet.getStyleElement()

        return {...page, styleTags}

    }

    render () {
        return (
            <html lang='en'>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument
