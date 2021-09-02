import React from 'react';
import Helmet from 'react-helmet';

export default function Seo({ title, description }) {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
  );
}
