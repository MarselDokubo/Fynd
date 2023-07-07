import React, { FC } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};
export const Seo: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

// The head component will inject it's content in the head of the application pages
