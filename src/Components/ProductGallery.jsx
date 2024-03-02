import axios from 'axios';
import {useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductGallery = () => {
    const [products,setProducts]=useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getProducts(){
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=12');
            setProducts(response.data);    
        }
        getProducts();
    },[])

    return (
    <div style={{backgroundColor:'#ffe6e6'}}>
        <h1 style={{padding:'20px',color:'#660033',fontWeight:700}}>Select the Product</h1>
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {products.map((product)=>{
                return (
                    <Card key={product.id} className='productBtn' style={{width:'22rem',border:'none',margin:'15px auto',padding:'10px'}}>
                        <Card.Img src={product.images[0]}/>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>$ {product.price}</Card.Text>
                        <Button onClick={()=>navigate(`/product/${product.id}`,{state:product})} style={{width:'150px',backgroundColor:'#660033',border:'none'}}>View Item</Button>
                    </Card>
                )
            })}
        </div>
    </div>
  )

}

export default ProductGallery;
