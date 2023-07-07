import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Seo } from '@/components/seo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Seo title="Fynd" />
      <main className={`${styles.main} ${inter.className}`}></main>
    </>
  );
}
