import React from 'react';
import Box from '@material-ui/core/Box';

import Layout from './layout';
import CardList from './cardList';
import TagLink from './tagLink';

const IndexPage = ({ pageContext }) => {
  const { posts, categories, tags, authors } = pageContext;
  return (
    <Layout>
        <>
        <Box display='flex' mb={2}>
          { categories.map(category => <TagLink key={category} to={`/category/${category}`}>to {category}</TagLink>) }
        </Box>
        <Box display='flex'>
          { tags.map(tag => <TagLink green="true" key={tag} to={`/tag/${tag}`}>to {tag}</TagLink>) }
        </Box>
          { !posts.length
            ? <Box>
                что-то пошло не так
              </Box>
              : <CardList posts={posts} authors={authors} />
          }
        </>
    </Layout>
  )
} 

export default IndexPage
