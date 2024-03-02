import React, { useState } from 'react';
import LoginImg from '../assets/Login.png';
import {Row, Col, Form, Button,Card} from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {

    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () =>{
      if(email == '' || password == ''){
          alert('Enter the Required Fields');
      }
      else{
          setUser(email);
          setUser(password);
          localStorage.setItem('userEmail',email);
          localStorage.setItem('userPassword',password);
          navigate('/');
      }
    };

  return (
    <div style={{height:'90vh',backgroundColor:'#660033',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Row>
      <Col>
        <div style={{margin:'8rem 8rem',backgroundColor:'#33001a',height:'50vh',width:'500px',borderRadius:10,border:'2px solid #ffff1a'}}>
            <h1 style={{color:'#1affc6',margin:'1rem 2rem 0 2rem'}}>Insta Buy!</h1>
            <h4 style={{color:'#ffff66',margin:'2rem'}}>One place where brands come together from all across the world.</h4>
            <Form>
                <div style={{width:'70%',margin:'1rem auto',display:'flex',justifyContent:'space-between'}}>
                <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        onChange={(e)=>setEmail(e.currentTarget.value)}
                    type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicPassword">
                    <Form.Control 
                        onChange={(e)=>setPassword(e.currentTarget.value)}
                    type="password" placeholder="Password" />
                </Form.Group>
                </div>
                
                <Button onClick={()=>handleSubmit()}
                style={{width:'70%',margin:'0 4.5rem',border:'none',backgroundColor:'white',color:'black'}} variant="primary" type="submit">
                    <h6 style={{margin:'auto'}}>Start Shopping  &#10142;</h6>
                </Button>
                <div style={{color:'white', paddingTop:'25px',margin:'1rem'}}>
                    <h6>Join the Club, <Card.Link href="/signup" style={{color:'white',borderBottomColor:'2px solid white'}}>Click Here</Card.Link></h6>
                </div>
            </Form>
        </div>
      </Col>
      <Col>
      <img src={LoginImg} style={{height:500,marginTop:'50px'}}/>
      </Col>
      </Row>
    </div>
  )
}

export default Login;
