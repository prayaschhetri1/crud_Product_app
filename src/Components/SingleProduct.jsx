import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SingleProduct = ({item}) => {
    
    const handleAddToCart = () => {

    }
  return (
    <>
      <Link to={`/prod/${item.id}`} >
      <img width="100%" height="290" src={item.image} alt="" />
      <h3>{item.title}</h3>
      <h4>₹ {item.price}</h4>
      <h4>RATINGS : {item.rating}</h4>
      </Link>
      <ButtonAdd onClick={handleAddToCart}>Add to Cart</ButtonAdd>
      <br />
      <Link to={`/prod/${item.id}/edit`}>
      <ButtonEdit>EDIT</ButtonEdit>
      </Link>
    </>
  )
}

export default SingleProduct;

const ButtonEdit = styled.div`
background: blue;
color:white;
font-weight: 600;
border:none;
width:150px;
padding:5px;
text-align: center;



`

const ButtonAdd = styled.div`
    background: #ff00ea;
color:white;
font-weight: 600;
border:none;
width:150px;
padding:5px;
text-align: center;



`