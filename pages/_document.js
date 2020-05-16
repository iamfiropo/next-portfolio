import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="A site for my programming portfolio"
          />
          <meta charset="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="/nprogress.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: "roboto", sans-serif;
          }
        `}</style>
      </Html>
    );
  }
}
