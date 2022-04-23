import { NextSeoProps } from "next-seo";
const settings: NextSeoProps = {
  title: "Europride 2022",
  canonical: "https://europride2022.com/",
  defaultTitle: "Europride 2022",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.europride2022.com/",
    site_name: "Europride 2022",
    title: "Europride 2022",
    description: "The official site of Europride 2022",
    images: [
      {
        url: "https://cdn.sanity.io/images/dw7ltkfd/production/411199732fbc43eadcf050ca835088454a21419f-3427x2285.jpg?w=2048&q=75&fit=clip&auto=format",
        width: 800,
        height: 600,
        alt: "Europride 2022",
      },
    ],
  },
  twitter: {
    handle: "@belgradepride",
    site: "@belgradepride",
    cardType: "summary_large_image",
  },
};

export default settings;
