import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import Routes from './routes';
// import Menu from './Components/Menu/Menu'
import Carrinho from './Components/Carrinho/Carrinho'
import './App.css';
// import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store';
// import ReactDOMServer from 'react-dom/server';
import { lazy, Suspense } from 'react'

const Rotas = lazy(() => import('./routes'))
const Menu = lazy(() => import('./Components/Menu/Menu'))

// Renderização pelo SSR
// 1º passo: comentar o código da linha 18
const Footer = lazy(() => import('./Components/Footer/Footer'))


function App() {

  // Renderização pelo SSR do Footer
  // 2º passo: descomentar o código  da linha 26 até 36

  // const FooterFromServer = ReactDOMServer.renderToString(<Footer />);
  // console.log(FooterFromServer);

  // function createMarkup() {
  //   return {__html: FooterFromServer};
  // }

  // function FooterComponent() {
  //   return <div dangerouslySetInnerHTML={createMarkup()} />;
  // }



  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid>
          <Suspense fallback={<p>CARREGANDO O MENU...</p>}>
            <Menu />
          </Suspense>

          <Carrinho />
          <Suspense fallback={<p>CARREGANDO A PAGINA...</p>}>
            <Rotas />
          </Suspense>

          
          <Suspense fallback={<p>CARREGANDO O RODAPÉ...</p>}>
            <Footer /> 
          </Suspense>
       
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// 3º passo: comentar as linhas 53 a 55 e colocar o <FooterComponent /> na linha 52
// 4º passo: Descomentar a linha 10