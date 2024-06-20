import "@/styles/globals.scss";
// import { DefaultSeo } from 'next-seo';
import type { AppProps } from "next/app";
import { Playfair_Display } from "next/font/google";
// import { Provider } from 'react-redux';
// import store from '../utils/store/store';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <DefaultSeo title="A&RS Solutions" /> */}
      {/* <Provider store={store}> */}
      <main className={playfair.className}>
        <Component {...pageProps} />
      </main>
      {/* </Provider> */}
    </>
  );
}
