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
    
      <div  className='relative'>
        <div className='container mx-auto'>
        <Header></Header>
      <div className="flex">
      <Routes>
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
        <div className='relative bottom-0'>
      <Footer></Footer>
        </div>
      </div>
  );
}

export default App;
