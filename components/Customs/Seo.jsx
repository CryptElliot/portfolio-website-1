import React from "react";

import Head from "next/head";

const Seo = (props) => {
  const { title, children } = props;
  return (
    <>
      <Head>
        {title && <title>{title + " | Portfolio"}</title>}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color"  content="#ff6161" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Seo;
