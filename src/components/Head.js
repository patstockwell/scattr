import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Scattr</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.css" />
  </Helmet>
)

export default Head
