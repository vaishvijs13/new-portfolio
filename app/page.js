import Image from "next/image";
import Head from 'next/head';
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Vaishvi Shah</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <h1 className="text-2xl font-bold text-blue-900">Vaishvi Shah</h1>
    </div>
  );
}
