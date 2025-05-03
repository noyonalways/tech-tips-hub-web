import Script from "next/script";

type AdSenseProps = {
  pubId: string;

}

const AdSense = ({pubId}: AdSenseProps) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

export default AdSense;