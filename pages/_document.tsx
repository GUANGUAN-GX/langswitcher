import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";
import i18nextConfig from "../next-i18next.config";

type Props = DocumentProps & {
  // add custom document props
};

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
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
