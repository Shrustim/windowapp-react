import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import {
  useParams, Link,useNavigate 
} from "react-router-dom";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const AddProductPrice = () => {
   const navigate = useNavigate();
   let { id } = useParams();
   const [form] = Form.useForm();
   const [unitlist,setUnitlist]=useState([]);
   useEffect(()=>{
    axios.get(`https://temp-app-windowshop.herokuapp.com/unit-masters?filter=%7B%20%22fields%22%3A%20%7B%22id%22%3A%20true%2C%20%22name%22%3A%20true%20%7D%7D`)
    .then(res => {
      setUnitlist(res.data);
    })
  },[]);
 return(
    <div style={{width:"100%"}}>
      <h3>Add Price to Product</h3>
     
    </div>
   )
}

export default AddProductPrice;