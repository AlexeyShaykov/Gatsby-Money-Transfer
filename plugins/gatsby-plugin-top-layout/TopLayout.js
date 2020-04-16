import React, { useState }  from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../../src/components/constants/theme';

export const ThemeContext = React.createContext({
  light: false,
  toggle: () => {}
});

export const DataContext = React.createContext({
  data: {},
  setData: () => {},
});

export default function TopLayout(props) {
  const [light, setLight] = useState(false);
  const toggle = () => {
    setLight(!light);
  };
  const [data, setDataHandler] = useState({});
  const setData = (data) => {
    setDataHandler(data);
  };
  return (
    <>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <DataContext.Provider value={{
        data,
        setData,
      }}>
          <ThemeContext.Provider value={{
              light,
              toggle,
            }}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {props.children}
            </ThemeProvider>
          </ThemeContext.Provider>
      </DataContext.Provider>
    </>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};