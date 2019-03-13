import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import AsideContainer  from 'src/components/containers/aside/AsideContainer';
import MainContainer from 'src/components/containers/main/MainContainer';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/styles/globalStyles';
import { colorTheme } from 'src/styles/themes';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 100vh;
`;

const App = () => {
  return (
    <ThemeProvider theme={ colorTheme }>
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
              <AsideContainer />
              <MainContainer />
        </AppContainer>
      </React.Fragment>
    </ThemeProvider>

  );
};










export default hot(module)(App);
