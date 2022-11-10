// IMPORT CSS FRAMEWORK
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// IMPORT REACT ROUTER
import { Routes, Route } from 'react-router-dom';

// IMPORT PAGES
import Index from './Pages';

// IMPORT COMPONENT
import DetailProduct from './Components/DetailProduct/DetailProduct';

// IMPORT COMPONENTS
import Header from './Components/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid style={{ width: '95vw' }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="productDetail" element={<DetailProduct />}>
            <Route path=":productId" element={<DetailProduct />} />
          </Route>
        </Routes>
      </Container>
      <Container fluid>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
