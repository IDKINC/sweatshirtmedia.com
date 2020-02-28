/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql, withPrefix } from "gatsby";

function SEO({ description, lang, meta, title, img }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title} - Full-Service Creative Design Agency`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:site`,
          content: `@mediasweatshirt`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `og:image`,
          content: site.siteMetadata.siteUrl + img
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.siteUrl + img
        },
        {
          name: `theme-color`,
          content: `#a29bfe`
        }
      ].concat(meta)}
      link={[
        {
          rel: "icon",
          type: "image/png",
          href: site.siteMetadata.siteUrl + `${withPrefix("/")}img/icon.png`,
          sizes: "32x32"
        },
        {
          rel: "apple-touch-icon",
          href: site.siteMetadata.siteUrl + `${withPrefix("/")}img/icon.png`,
          sizes: "180x180"
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  img: "/img/default-og.png"
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default SEO;
