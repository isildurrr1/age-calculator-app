import { useState } from 'react';
import Display from '../Display/Display';
import { IDate } from '../../types/types';
import Form from '../Form/Form';
import { styled } from 'styled-components'

const AppContainer = styled.main`
  display: flex;
  margin: auto;
  width: 843px;
  height: 652px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 22px 22px 212px 22px;
`;

const Container = styled.section`
  width: 728px;
  height: 545px;
  margin: auto;
`;

function App() {
  const [result, setResult] = useState<IDate>({
    years: 0,
    months: 0,
    days: 0,
  });
  return (
    <AppContainer>
      <Container>
        <h1 style={{ marginTop: '-35px', color: 'hsl(0, 0%, 100%)' }}>Heading</h1>
        <Form setResult={setResult} />
        <Display result={result} />
      </Container>
    </AppContainer>
  );
}

export default App;
