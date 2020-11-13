import React from 'react';
import styled from 'styled-components';
import Layout from './components/Layout';

const AppElement = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function App() {
  return (
    <AppElement>
      <Layout />
    </AppElement>
  );
}

export default App;
