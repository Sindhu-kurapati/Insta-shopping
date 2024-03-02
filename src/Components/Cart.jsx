import React, { useEffect, useState } from 'react';
import CartImg from '../assets/Cart.png';
import {Table,Row, Col, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Cart = ({cartItems}) => {

    const [totalQuantity,setTotalQuantity] = useState(0);
    const [totalPrice,setTotalPrice]=useState(0);

    const navigate = useNavigate();

    useEffect(()=>{
        let tempPrice = 0;
        let tempQuantity = 0;
        Object.keys(cartItems).map((cartItemId)=>{
            const details = cartItems[cartItemId];
            tempQuantity += details.quantity;
            tempPrice += details.quantity * details.price;
        })
        setTotalQuantity(tempQuantity);
        setTotalPrice(tempPrice);
    },[])

  return (
    <div style={{margin:32}}>
        <h3 style={{color:'#660033',fontWeight:700}}>Your Cart:</h3>
            <Row>
                <Col>
                    <Table style={{marginTop:40,border:'2px solid #660033'}}>
                        <thead style={{marginTop:40,border:'2px solid #660033'}}>
                            <tr>
                                <th style={{color:'#660033'}}>Name</th>
                                <th style={{color:'#660033'}}>Quantity</th>
                                <th style={{color:'#660033'}}>Price</th>
                            </tr>
                        </thead>
                        <tbody style={{marginTop:40,border:'2px solid #660033'}}>
                            {Object.keys(cartItems).map((cartItemId,index)=>{
                                const itemDetails = cartItems[cartItemId];
                                return(
                                    <tr key={index}>
                                        <td>{itemDetails.title}</td>
                                        <td>{itemDetails.quantity}</td>
                                        <td>{itemDetails.quantity * itemDetails.price}</td>
                                    </tr>
                                )
                            })}
                            <tr style={{marginTop:40,border:'2px solid #660033'}}>
                                <th style={{color:'#660033'}}>Total:</th>
                                <th style={{color:'#660033'}}>{totalQuantity}</th>
                                <th style={{color:'#660033'}}>{totalPrice}</th>
                            </tr>
                        </tbody>
                    </Table>
                    <div>
                        <Button style={{backgroundColor:'#660033',border:'none',margin:10}} onClick={()=>navigate('/checkout')}>Check Out</Button>
                    </div>
                </Col>
                <Col>
                    <img src={CartImg} height={500}/>
                </Col>
            </Row>
    </div>
  )
}

export default Cart;
