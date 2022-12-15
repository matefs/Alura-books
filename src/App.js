 
import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import styled from 'styled-components'
import UltimosLancamentos from './componentes/UltimosLancamentos'


const AppContainer = styled.div`
 
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #232526, #414345); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


`



function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa/>
      <UltimosLancamentos />
    </AppContainer> 
  );
}

export default App;
