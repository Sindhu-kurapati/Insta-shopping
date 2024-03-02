import React,{useEffect} from 'react';
import { Button, Carousel } from 'react-bootstrap';
import CarouselOneImg from '../assets/Carousel1.png';
import CarouselTwoImg from '../assets/Carousel2.png';
import CarouselThreeImg from '../assets/Carousel3.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CompanyOneImg from '../assets/Company1.png';
import CompanyTwoImg from '../assets/Company2.png';
import CompanyThreeImg from '../assets/Company3.png';
import CompanyFourImg from '../assets/Company4.png';
import CompanyFiveImg from '../assets/Company5.png';
import CompanySixImg from '../assets/Company6.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    
    const navigate =useNavigate();

    useEffect (() => {
        const user = localStorage.getItem('userEmail','userPassword');
        //not logged in
        if(!user){
          navigate('/login')
        }
       },[]);

    const handleClick = ()=>{
        navigate('/products');
    }
  return (
    <div className='home-container'>
      <Carousel style={{height:'70vh'}}>
        <Carousel.Item>
            <Row>
                <Col style={{margin:' 5rem 1rem 1rem 9rem'}}>
                <div>
                    <h1 style={{color:'crimson',fontWeight:700}}><i>SHOP WITH UTMOST</i></h1>
                    <h1 style={{color:'#ebb434',fontWeight:700}}><i>STYLE</i></h1>
                    <h5 style={{marginBottom:'20px',width:'350px'}}>Shop from the latest Trendy Clothes to the best gadgets. With Star Shopper you save 10% every time you shop!</h5>
                    <div style={{marginBottom:'20px'}}>
                        <Button 
                            onClick={()=>handleClick()}
                            style={{width:'300px', backgroundColor:'#eb345b',border:'none'}}>Browse Products
                        </Button>
                    </div>
                    <div>
                        <h5 style={{paddingBottom:10,color:'black'}}>Products are available from :</h5>
                        <img src={CompanyOneImg} style={{height:'50px'}}/>
                        <img src={CompanyTwoImg} style={{height:'50px'}}/>
                        <img src={CompanyThreeImg} style={{height:'50px'}}/>
                        <img src={CompanyFourImg} style={{height:'50px'}}/>
                        <img src={CompanyFiveImg} style={{height:'50px'}}/>
                        <img src={CompanySixImg} style={{height:'50px'}}/>
                    </div>
                </div>
                </Col>
                <Col style={{padding:'0px 100px'}}><img src={CarouselOneImg} style={{height:'80vh',width:600}}/></Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
            <Col style={{margin:' 5rem 1rem 1rem 9rem'}}>
                <div>
                    <h1 style={{fontWeight:700,color:'#0d6efd'}}><i>SHOP WITH UTMOST</i></h1>
                    <h1 style={{color:'#ff0066',fontWeight:700}}><i>STYLE</i></h1>
                    <h5 style={{marginBottom:'20px',width:'350px'}}>Shop from the latest Trendy Clothes to the best gadgets. With Star Shopper you save 10% every time you shop!</h5>
                    <div style={{marginBottom:'20px'}}>
                        <Button 
                            onClick={()=>handleClick()}
                            style={{width:'300px',backgroundColor:'#0d6efd',border:'none'}}>Browse Products
                        </Button>
                    </div>
                    <div>
                        <h5 style={{paddingBottom:10}}>Products are available from :</h5>
                        <img src={CompanyOneImg} style={{height:'50px'}}/>
                        <img src={CompanyTwoImg} style={{height:'50px'}}/>
                        <img src={CompanyThreeImg} style={{height:'50px'}}/>
                        <img src={CompanyFourImg} style={{height:'50px'}}/>
                        <img src={CompanyFiveImg} style={{height:'50px'}}/>
                        <img src={CompanySixImg} style={{height:'50px'}}/>
                    </div>
                </div>
                </Col>
                <Col style={{padding:'0px 100px'}}><img src={CarouselTwoImg} style={{height:'80vh',width:600}}/></Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
            <Col style={{margin:' 5rem 1rem 1rem 9rem'}}>
                <div>
                    <h1 style={{fontWeight:700,color:'#993399'}}><i>SHOP WITH UTMOST</i></h1>
                    <h1 style={{color:'#009999',fontWeight:700}}><i>STYLE</i></h1>
                    <h5 style={{marginBottom:'20px',width:'350px'}}>Shop from the latest Trendy Clothes to the best gadgets. With Star Shopper you save 10% every time you shop!</h5>
                    <div style={{marginBottom:'20px'}}>
                        <Button 
                            onClick={()=>handleClick()}
                            style={{width:'300px',backgroundColor:'#993399',border:'none'}}>Browse Products
                        </Button>
                    </div>
                    <div>
                        <h5 style={{paddingBottom:10}}>Products are available from :</h5>
                        <img src={CompanyOneImg} style={{height:'50px'}}/>
                        <img src={CompanyTwoImg} style={{height:'50px'}}/>
                        <img src={CompanyThreeImg} style={{height:'50px'}}/>
                        <img src={CompanyFourImg} style={{height:'50px'}}/>
                        <img src={CompanyFiveImg} style={{height:'50px'}}/>
                        <img src={CompanySixImg} style={{height:'50px'}}/>
                    </div>
                </div>
                </Col>
                <Col style={{padding:'0px 100px'}}><img src={CarouselThreeImg} style={{height:'80vh',width:600}}/></Col>
            </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home;
