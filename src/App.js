import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/portafolio' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/portafolio/about' element={<About />} />
          <Route path='/portafolio/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
