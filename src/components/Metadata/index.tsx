import React from 'react';
import Head from 'next/head';

interface Props {
  title: string,
  description: string,
  keywords: string,
}

const Metadata: React.FC<Props> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Head>
  );
}

export default Metadata;