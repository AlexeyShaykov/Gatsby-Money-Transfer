import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';

import { DataContext } from '../../plugins/gatsby-plugin-top-layout/TopLayout';
import CardNews from './card';

const CardList = () => {
  const { data } = useContext(DataContext);
  const { posts, authors } = data;
  const findAuthor = id => authors.filter(author => author.id === id);
  return (
    <>
    {posts && posts.length && <Grid container spacing={3}>
      {posts.map((post, index) =>  <CardNews key={post.id} {...{...post.fields, ...{index: index, author: findAuthor(post.fields.author[0])}}}/>)}
    </Grid>}
    </>
  );
}

export default CardList;