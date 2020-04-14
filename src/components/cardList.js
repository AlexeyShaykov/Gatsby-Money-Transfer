import React from 'react';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


import CardNews from './card';

const PostList = styled(List)({
  'list-style': 'none',
     margin: 0,
     display: 'flex',
     'flex-wrap': 'wrap',
     padding: 0
});

const CardList = props => {
  const findAuthor = id => props.authors.filter(author => author.id === id)
  return (
    <>
      <PostList>
        {props.posts.map((post, index) =>  <CardNews key={post.id} {...{...post.fields, ...{index: index, author: findAuthor(post.fields.author[0])}}}/>)}
      </PostList>
    </>
  );
}

export default CardList;