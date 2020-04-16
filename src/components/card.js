import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { styled } from '@material-ui/core';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Box,
  Grid,
} from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import { ThemeContext } from '../../plugins/gatsby-plugin-top-layout/TopLayout';

import theme from './constants/theme';
import TagLink from './tagLink';


const useStyles = makeStyles(() => ({
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
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10
  }
}));

const GreenTagList = styled(TagLink)({
  'background-color': props => props.light ? theme.palette.secondary.light : theme.palette.secondary.main,
});

function CardNews(props) {
  const { title, slug, date, image, tags, index = 0, author, featured = false } = props;
  const { light } = useContext(ThemeContext);
 const { name, email } = author[0].fields;
  const classes = useStyles({ index, theme });
  const { card, media, link, item, icon } = classes;
  return (
    <Grid item lg={index === 0 ? 12 : 6} xs={12} className={item}>
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
                  { tags.map(tag => <GreenTagList light={light ? 1 : 0} key={tag} to={`/tag/${tag}`}>{tag}</GreenTagList>) }
                </Box>
              }
            </CardContent>
          </Box>
          { featured &&
            <FlagIcon className={icon} color="primary" fontSize="large" />
          }
        </Card>
      </Link>
    </Grid>
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
