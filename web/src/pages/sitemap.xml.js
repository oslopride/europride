import groq from "groq";
import client from "../sanity/";

export default function SiteMap() {
  return <div>loading</div>;
}

export async function getServerSideProps({ res }) {
  const URL = {
    development: "http://localhost:3000",
    production: "https://europride2022.com",
  }[process.env.NODE_ENV];
  const staticPages = ["/", "/about", "/partners", "/program", "/volunteers"];
  const query = groq`{
      "page": *[_type == 'page']{slug},
    }`;
  const datas = await client.fetch(query);
  const getStaticPages = staticPages.map((staticPage) => {
    return `
    <loc>${URL}${staticPage}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  `;
  });
  const page = datas.page.map((page) => {
    const slug = page.slug.current === "/" ? "/" : `/${page.slug.current}`;
    return `
      <loc>${URL}${slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    `;
  });

  const sitemapDatas = [...page, ...getStaticPages];
  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapDatas
          .map((each) => {
            return `<url>
                      ${each}
                    </url>
                  `;
          })
          .join("")}
    </urlset>
    `;
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
  return {
    props: {},
  };
}
