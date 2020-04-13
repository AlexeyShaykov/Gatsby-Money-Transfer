import React from 'react'
import PropTypes from 'prop-types'

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
