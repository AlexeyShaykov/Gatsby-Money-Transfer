import { styled } from '@material-ui/core/styles';

import { Link } from 'gatsby';

import theme from './constants/theme';

const TagLink = styled(Link)({
  display: 'block',
  padding: theme.spacing(2),
  'background-color': props => props.green ? theme.palette.secondary.main : 'rebeccapurple',
  color: '#fff',
  'text-decoration': 'none',
  'margin-right': theme.spacing(2),
  'border-radius': theme.spacing(2)
});

export default TagLink;
