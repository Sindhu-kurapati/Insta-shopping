import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
const ProductDetails = ({cartItems, handleAddToCart}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const {title,price,images,description,id} = location.state;
    
    const [otherProducts, setOtherProducts] = useState([]);

    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=12`);
            // const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id}/products?limit=11&offset=0`);
            setOtherProducts(response.data);
        }
        getData();
    },[])
    
  return (
    <div style={{padding:'30px',backgroundColor:'#ffe6e6'}}>
        <Row>
            <Col lg={2}>
                {images.map((image, index)=>{
                    return (
                        <img key={index} src={image} style={{width:"150px",marginBottom:'10px',borderRadius:'10px'}} />
                    )
                })}
            </Col>
            <Col lg={4}>
                <div>
                    <img src={images[0]} style={{width:"350px",marginBottom:'10px',borderRadius:'10px'}}/>
                    <h3 style={{color:'#660033',fontWeight:700}}>{title}</h3>
                    <h3 style={{color:'#660033',fontWeight:700}}>$ {price}</h3>
                    <div>{description}</div>
                    <Button style={{marginTop:20,backgroundColor:'#660033',border:'none'}} onClick={() => {
                        if(id in cartItems){
                            const currentItem = cartItems[id];
                            handleAddToCart({[id] : {title, price, quantity: currentItem.quantity + 1}})
                        } else{
                            handleAddToCart({[id] : {title, price, quantity:1}})
                        }
                    }}>Add To Cart</Button>
                </div>
            </Col>
            <Col>
            <h3>Other Products in same Category</h3>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                    {otherProducts.map((product) => {
                        if(product.id == id) return
                        return (
                            <Card key={product.id} className='productBtn' style={{width:'8rem',height:'13rem',border:'none',margin:20}}>
                                <Card.Img src={product.images[0]} style={{height:110,width:'7rem',margin:'5px auto'}}/>
                                <Card.Title style={{fontSize:'17px',margin:'0 10px'}}>{product.title.split(" ")[0]}</Card.Title>
                                <Card.Text style={{margin:'0 10px' }}>$ {product.price}</Card.Text>
                                <Button onClick={()=> navigate(`/product/${product.id}`,{state:product})} style={{width:'100px',height:'4vh',backgroundColor:'#660033',border:'none',margin:'5px 15px',display:'flex',alignItems:'center'}}>View Item</Button>
                            </Card>
                         )
                    })}
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetails;
