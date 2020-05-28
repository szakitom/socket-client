import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

const SEO = ({
  title: pageTitle,
  description: pageDescription,
  lang,
  keywords: pageKeywords,
}) => {
  const {
    title: metaTitle,
    description: metaDescription,
    author,
    keywords: metaKeywords,
    siteUrl,
  } = useSiteMetadata()

  const description = pageDescription || metaDescription
  const title = (pageTitle && `${metaTitle} - ${pageTitle}`) || metaTitle

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `author`,
          content: author,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${siteUrl}/social_icon.png`,
        },
        {
          property: `og:image:secure_url`,
          content: `${siteUrl}/social_icon.png`,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `1200`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `keywords`,
          content: pageKeywords || metaKeywords,
        },
      ]}
    />
  )
}

export default SEO
