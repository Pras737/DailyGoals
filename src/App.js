import './App.css';
import Header from "./component/Header"
import Home from './component/Home'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Contact from './component/Contact';
import About from "./component/About";
import Services from './component/Services';
import Footer from './component/Footer';
import User from './component/User';






function App() {
  return (
  
   <Router>
   <Header/>


   

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/User/sad' element={<Contact/>}/>
      <Route path='/User/:id' element={<User/>}/>
    </Routes>

    
    <Footer/>

   </Router>
    
    
  );
}

export default App;
