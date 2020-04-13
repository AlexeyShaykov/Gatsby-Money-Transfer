import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import CardList from '../components/cardList';


const statusPage = ({ pageContext }) => {
  const { data, authors } = pageContext;
  return (
    <Layout>
      <>
      <Link to={'/'}>to Home</Link>
      <CardList posts={data} authors={authors} />
      </>
    </Layout>
  )
};

export default statusPage;