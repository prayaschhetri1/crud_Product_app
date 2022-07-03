import axios from "axios";
import React, { useEffect } from "react";
import { getData } from "../ProductRedux/action";
import { useDispatch, useSelector } from "react-redux/es/exports";
import SingleProduct from "../Components/SingleProduct";
import styled from "styled-components";
import {Link} from 'react-router-dom'
const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.prods);
  //   console.log(data);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <ProductsWrapper>
      {data &&
        data.map((item) => {
          return (
            <SingleProductWrapper key={item.id}>
              
              <SingleProduct item={item} />
             
            </SingleProductWrapper>
          );
        })}
    </ProductsWrapper>
  );
};

export default Products;

const ProductsWrapper = styled.div`
  display: grid;
  width: 90%;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(289px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
  margin-top: 20px;
`;

const SingleProductWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  padding: 8px;
`;
