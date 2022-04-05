import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews'
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';


function App() {
  
  return (
    <div>
      <div className='container mx-auto'>
        <div>
        <Header></Header>
      <div>
      <Routes className='mb-20'>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
    </div>
        
      </div>
      <div>
      <Footer></Footer>
      
        </div>
      </div>
  );
}

export default App;
