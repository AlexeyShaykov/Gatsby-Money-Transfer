import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { DataContext } from '../../plugins/gatsby-plugin-top-layout/TopLayout';

import Layout from '../components/layout';
import CardList from '../components/cardList';


const StatusPage = ({ pageContext }) => {
  const { data, setData } = useContext(DataContext);
  setData(pageContext);
  return (
    <Layout>
      <>
        <Link to={'/'}>to Home</Link>
        <CardList  />
      </>
    </Layout>
  )
};

export default StatusPage;