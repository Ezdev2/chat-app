import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      router.push("/chat");
    } else {
      router.push("/register");
    }
  }, []);

  return <Component {...pageProps} />;
}
