/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Tam from 'containers/Tam/Loadable';
import Dinh from 'containers/Dinh/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const paths = {
  tam: '/tam',
  dinh: '/dinh',
  home: '/',
  notFound: ['/not-found', '*', ""],
};

export default function App() {
  return (
    <>

            {/* //Chua co Header */}

      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>

        <Switch>
          <Route exact path={paths.home} component={HomePage} />
          <Route path={paths.tam} component={Tam} />
          <Route path={paths.dinh} component={Dinh} />


          <Route path="" component={NotFoundPage} />
        </Switch>




        {/* Style toan bo */}
        <GlobalStyle />
      </AppWrapper>

      {/* Chua co Footer */}

    </>

  );
}
