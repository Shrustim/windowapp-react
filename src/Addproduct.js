

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

const Addproduct = () => {
  const [form] = Form.useForm();
  const [category,setCategory]=useState([]);
  const [product,setProduct]=useState(null);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    axios.post(`https://temp-app-windowshop.herokuapp.com/products`,values)
    .then(res => {
      setCategory(res.data);
    form.resetFields();
    })

  };

  useEffect(()=>{
    axios.get(`https://temp-app-windowshop.herokuapp.com/categories`)
    .then(res => {
      setCategory(res.data);
    })
  },[]);
  
  
  return (
<div style={{width:"70%"}}>
  <h3>Add Product</h3>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
      }}
      scrollToFirstError
    >
      <Form.Item
        name="productName"
        label="Product Name"
        rules={[
         
          {
            required: true,
            message: 'Please input product name.',
          },
        ]}
      >
        <Input />
      </Form.Item>



      <Form.Item
        name="imageone"
        label="Image one URL"
        rules={[
          {
            required: true,
            message: 'Please input image one URL.',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

   <Form.Item
        name="imagetwo"
        label="Image two URL"
        rules={[
          {
            required: true,
            message: 'Please input image two URL.',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

   <Form.Item
        name="imagethree"
        label="Image three URL"
        rules={[
          {
            required: true,
            message: 'Please input image three URL.',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

   
     <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: 'Please input description.',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: true,
            message: 'Please input product price.',
          },
        ]}
      >
        <InputNumber
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

     

    
      <Form.Item
        name="categoryId"
        label="Category"
        rules={[
          {
            required: true,
            message: 'Please select category.',
          },
        ]}
      >
        <Select placeholder="select your category">
        { category.length > 0 ? 
            category.map((i,index)=>{
              return  <Option value={i.id} key={index}>{i.categoryName}</Option>;
            })
          :  null
          }
         
        
        </Select>
      </Form.Item>

     
    
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
</div>
  );
};

export default Addproduct;