import Navbar from 'react-bootstrap/Navbar';
import { Badge, Button } from 'react-bootstrap';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Logo from './assets/logo.png';
import CartBag from './assets/CartBag.png';
import SignUp from './Components/SignUp';
import {Routes,Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductGallery from './Components/ProductGallery';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
 
 const [user,setUser] = useState('');
 const navigate = useNavigate();
 const [cartItems, setCartItems] = useState({});

 useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');

    if(userEmail && userPassword){
      setUser(userEmail);
      setUser(userPassword);
    }
  },[user]);

 const handleAddToCart = (item)=>{
  setCartItems({...cartItems, ...item});
 }
  const handleLogout = () =>{
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    setUser(null);
    navigate('/login');
    window.location.reload();
  }

  return (
    <div style={{height:'100vh',backgroundColor:'#ffe6e6'}}>
      <Navbar className="Instabuy-navbar">
        <Navbar.Brand onClick={()=>navigate('/')}>
          <img className='logo'
          alt=''
          src={Logo}
          width="35"
          height="35"
          />{''}
          <strong style={{color:'#660033',fontWeight:800,fontSize:'25px',margin:'35px 1px'}}>InstaBuy!</strong>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user && <Button style={{backgroundColor:'#660033',border:'none'}} onClick={()=>navigate('/cart')}>Cart&nbsp;{Object.keys(cartItems).length > 0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)}</Button>}
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
          {<Button style={{backgroundColor:'#660033',border:'none'}} onClick={()=>handleLogout()}> {user ? 'Log Out' : 'Login'} </Button>}
        </Navbar.Collapse>
      </Navbar>

      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/signup' element={<SignUp setUser={setUser}/>}/>
        <Route path='/products' element={<ProductGallery/>}/>
        <Route path='/product/:id' element={<ProductDetails handleAddToCart ={handleAddToCart} cartItems={cartItems}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes> 
    </div>  
    
  )
}

export default App;
