import Document, { Html, Head, Main, NextScript } from "next/document"
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <title>HW Group - Project</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}