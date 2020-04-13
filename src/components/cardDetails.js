import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'

import CardNews from "./card";

const CardDetails = (props) => {
  const data = props.pageContext.data;
  return (
    <Layout>
      <>
        <Link to={'/'}>to Home</Link>
        <CardNews {...data} />
      </>
    </Layout>
  )
}


export default CardDetails;