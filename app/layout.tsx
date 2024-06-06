import Head from 'next/head';

function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>My App</title>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;