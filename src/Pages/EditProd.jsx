import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { editData } from "../ProductRedux/action";

const EditProd = () => {
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.app.prods)
    const param = useParams();

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    price: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const payload = {
    image: formData.image,
    title: formData.title,
    price: formData.price,
  };

  const handleEdit = (e) => {
    e.preventDefault();
   
    dispatch(editData(payload))
    DeleteData(param.id)
  };

const DeleteData = (id) => {
    axios.delete(`http://localhost:8080/prods/${id}`,)
    .then((res) => {
        console.log(res.data)
    })
}


  
  return (
    <EditWrapper>
      <form onSubmit={handleEdit}>
        <div>
          <input
            type="url"
            placeholder="add image url here..."
            onChange={handleChange}
            name="image"
          />
        </div>
        <div>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="add title here..."
          />
        </div>
        <div>
          <input
            name="price"
            onChange={handleChange}
            type="number"
            placeholder="add price here..."
          />
        </div>
        <div>
          <input onChange={handleChange} type="submit" value="EDIT" />
        </div>
      </form>
    </EditWrapper>
  );
};

export default EditProd;

const EditWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;
