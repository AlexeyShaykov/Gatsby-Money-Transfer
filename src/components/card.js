import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Box,
  ListItem,
} from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';

import theme from './constants/theme';
import TagLink from './tagLink';


const useStyles = makeStyles(props => ({
  card: {
    width: '100%',
    height: '100%'
  },
  media: {
    width: '100%',
    height: 260
  },
  link: {
    'text-decoration': 'none',
    display: 'block',
    width: '100%',
    height: '100%'
  },
  item: {
    width: props => props.index === 0 ? '100%' : `calc(50% - ${props.theme.spacing(3)}px)`,
    padding: 0,
    position: 'relative',
    margin: props => props.theme.spacing(2),
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10
  }
}));

function CardNews(props) {
  const { title, slug, date, image, tags, index = 0, author, featured = false } = props;
 const { name, email } = author[0].fields;
  const classes = useStyles({ index, theme });
  const { card, media, link, item, icon } = classes;
  return (
    <ListItem className={item} m={2}>
      <Link to={`/post/${slug}`} className={link}>
        <Card className={card}>
          <CardMedia className={media} image={image[0].url}>
          </CardMedia>
          <Box>
            <CardContent>
              <Box display="flex">
                <Box mr={2}>{`${name} -- ${email}`}</Box>
                <Box>{date}</Box>
              </Box>
              <Typography color="primary" variant="subtitle1" component="h2">
                {title}
              </Typography>
              <Typography color="secondary" variant="subtitle2" component="p">
                {slug}
              </Typography>
              { tags &&
                <Box display='flex' mt={2}>
                  { tags.map(tag => <TagLink green="true" key={tag} to={`/tag/${tag}`}>{tag}</TagLink>) }
                </Box>
              }
            </CardContent>
          </Box>
          { featured &&
            <FlagIcon className={icon} color="primary" fontSize="large" />
          }
        </Card>
      </Link>
    </ListItem>
  )
};

CardNews.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string,
  index: PropTypes.number,
}

export default CardNews;
