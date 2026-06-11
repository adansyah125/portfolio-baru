import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, ogTitle, ogDescription }) {
  const siteTitle = title || 'Syahdan Mutahariq — Software Engineer | Portfolio'
  const siteDescription = description || 'Portfolio Syahdan Mutahariq — Software Engineer lulusan S1 Teknik Informatika STMIK Mardira Indonesia. Lihat proyek, skill, dan pengalaman freelance Syahdan di Bandung.'

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={ogTitle || siteTitle} />
      <meta property="og:description" content={ogDescription || siteDescription} />
      <meta name="twitter:title" content={ogTitle || siteTitle} />
      <meta name="twitter:description" content={ogDescription || siteDescription} />
    </Helmet>
  )
}
