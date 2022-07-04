import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import News from './components/News';
import Video from './components/Videos';
import Bio from './components/Bio';
import Tour from './components/Tour';
import Contact from './components/Contact';
import Error from './components/Error';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <div className='App'>
    //   <NavbarComp />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='videos' element={<Video />} />
          <Route path='bio' element={<Bio />} />
          <Route path='tour' element={<Tour />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>our footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
