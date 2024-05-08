import Image from "next/image";
import Head from 'next/head';
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Vaishvi Shah</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Navbar />
    </div>
  );
}
