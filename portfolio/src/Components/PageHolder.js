import React from 'react'
import './PageHolder.css'
import Page from './Page';

function PageHolder() {
  return (
    <div className="page-holder">
      <Page/>
      <Page/>
      <Page/>
    </div>
  )
}

export default PageHolder