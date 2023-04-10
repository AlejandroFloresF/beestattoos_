import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            {<link rel="stylesheet" type="text/css" href="../../assets/css/Navbar.css"></link>}
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}