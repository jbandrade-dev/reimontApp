import '../styles/globals.css'
import { useRouter } from "next/router";
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Seo from '../components/Seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonical = (`http://www.reimont1333.com.br` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  
  return (
    <>
      <Seo canonical={canonical} />
      <Component {...pageProps} canonical={canonical} />
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}
