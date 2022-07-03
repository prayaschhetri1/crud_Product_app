import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getData } from "../ProductRedux/action";
import styled from "styled-components";

const SingleProdPage = () => {
  const [singleData, setSingleData] = useState({});
  const dispatch = useDispatch();
  const allProd = useSelector((state) => state.app.prods, shallowEqual);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const newData = allProd?.find((item) => item.id === Number(id));
      newData && setSingleData(newData);
    }
  }, [allProd, id]);

  return (
    <SingleProductWrapper>
        
      <img width="269" height="290" src={singleData.image} alt="" />
      <h3>{singleData.title}</h3>
      <h4>₹ {singleData.price}</h4>
      <h4>RATINGS : {singleData.rating}</h4>
    </SingleProductWrapper>
  );
};

export default SingleProdPage;

const SingleProductWrapper = styled.div`
  width: 300px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  padding: 8px;
`;
