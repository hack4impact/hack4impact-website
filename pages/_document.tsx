import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="description"
            content="A nonprofit organization of student engineers, designers, activists, and humanitarians. We build powerful, impactful software as a tool for social good"
          />
          <meta property="og:url" content="https://www.hack4impact.org" />
          <meta
            property="og:image"
            content="https://www.hack4impact.org/images/social-media-card.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Hack4Impact" />
          <meta property="og:title" content="Hack4Impact" />
          <meta
            property="og:description"
            content="A nonprofit organization of student engineers, designers, activists, and humanitarians. We build powerful, impactful software as a tool for social good"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
