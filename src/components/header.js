import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { ThemeContext } from '../../plugins/gatsby-plugin-top-layout/TopLayout';

import {
  Typography,
  makeStyles,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    background: `rebeccapurple`,
    height: 70,
    'text-align': 'center',
    display: 'flex'
  },
  textHeader: {
    color: '#fff'
  }
}))

const Header = ({ siteTitle }) => {
  const { light, toggle } = useContext(ThemeContext);
  const classes = useStyles();
  const { header, textHeader } = classes;
  return (
    <header className={header}>
      <Box 
        m='auto'
        maxWidth='960px'
      >
       <Typography variant='h1'className={textHeader} component='h1'>
          {siteTitle}
        </Typography>
      </Box>
      <FormGroup row>
        <FormControlLabel
            control={
              <Switch
                checked={light}
                onChange={toggle}
                color="secondary"
              />
            }
            label="Light"
            className={textHeader}
        />
      </FormGroup>
    </header>
  )
} 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
