import React from "react";

const Sitemap = () => {
  const generateXml = () => {
    const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://sarvodya-public-school-xz.netlify.app</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>https://sarvodya-public-school-xz.netlify.app/about</loc>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
   </url>
   <url>
    <loc>https://sarvodya-public-school-xz.netlify.app/contact</loc>
      <changefreq>never</changefreq>
      <priority>0.7</priority>
   </url>
   <url>
      <loc>https://sarvodya-public-school-xz.netlify.app/admissions</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
   </url>
   {/* <!-- Add more URLs for other pages on your website --> */}
</urlset>`;
    return xml;
  };
  return <>
    <h6>Sitemap</h6>
      <pre>
        <code>{generateXml()}</code>
      </pre>
  </>;
};

export default Sitemap;
