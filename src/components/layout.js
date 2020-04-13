import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from './header';

const Layout = ({ children }) => {  
  return (
    <>
      <Header siteTitle='Список переводов' />
          <Container maxWidth='lg'>
            <Box my={4}>
              <main>{children}</main>
            </Box>
          </Container>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
