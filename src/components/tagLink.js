import { styled } from '@material-ui/core/styles';

import { Link } from 'gatsby';

import theme from './constants/theme';

const TagLink = styled(Link)({
  display: 'block',
  padding: theme.spacing(2),
  'background-color': props => props.light ? theme.palette.primary.light : theme.palette.primary.main,
  color: '#fff',
  'text-decoration': 'none',
  'margin-right': theme.spacing(2),
  'border-radius': theme.spacing(2)
});

export default TagLink;
