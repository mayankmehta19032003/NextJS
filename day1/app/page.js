import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("this is serverside component");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! Mayank 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
