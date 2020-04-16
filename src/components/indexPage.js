import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core';

import { ThemeContext, DataContext } from '../../plugins/gatsby-plugin-top-layout/TopLayout';
import theme from './constants/theme';

import Layout from './layout';
import CardList from './cardList';
import TagLink from './tagLink';

const GreenTagList = styled(TagLink)({
  'background-color': props => props.light ? theme.palette.secondary.light : theme.palette.secondary.main,
});

const IndexPage = ({ pageContext }) => {
  const { light } = useContext(ThemeContext);
  const { data, setData } = useContext(DataContext);
  setData(pageContext);
  const { categories = [], tags = [] } = data;
  return (
    <Layout>
        <>
        <Box display='flex' mb={2}>
          { categories.map(category => <TagLink light={light ? 1 : 0} key={category} to={`/category/${category}`}>to {category}</TagLink>) }
        </Box>
        <Box display='flex' mb={3}>
          { tags.map(tag => <GreenTagList light={light ? 1 : 0} key={tag} to={`/tag/${tag}`}>to {tag}</GreenTagList>) }
        </Box>
        <CardList />
        </>
    </Layout>
  )
}

export default IndexPage
