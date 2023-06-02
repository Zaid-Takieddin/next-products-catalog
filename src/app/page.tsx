"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/products");
  }, []);
}
