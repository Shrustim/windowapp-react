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
  AutoComplete,Table,Space,message
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
   const [productPriceList,setProductPriceList]=useState([]);
   useEffect(()=>{
    axios.get(`https://temp-app-windowshop.herokuapp.com/unit-masters?filter=%7B%20%22fields%22%3A%20%7B%22id%22%3A%20true%2C%20%22name%22%3A%20true%20%7D%7D`)
    .then(res => {
      setUnitlist(res.data);
    })
    getDataPrice();
  },[]);
   const getDataPrice = async() => {
     axios.get("https://temp-app-windowshop.herokuapp.com/productPriceById/"+id)
        .then(res => {
           setProductPriceList( res.data);
        })
   }

   const submitForm = (values) => {
    var discountValue = ( parseFloat(values.price)/100 ) * parseFloat(values.discount)
    var totalPrice  = parseFloat(values.price) - parseFloat(discountValue).toFixed(2)
    var insertdata = {
       "productId": parseInt(id),
        "unitId": parseInt(values.unitId),
        "qty": parseInt(values.qty),
        "price": parseFloat(values.price),
        "discount": parseFloat(values.discount),
        "totalPrice": totalPrice,
        "is_show": 1,
        "is_active": 1
    }
    console.log("insertdata",insertdata)
     axios.post(`https://temp-app-windowshop.herokuapp.com/productprices`,insertdata)
        .then(res => {
        form.resetFields();
        getDataPrice();
        })
   }
   const deletePro = (idd) => {
    console.log(idd)
     const updateData = {
     
       // ...orderDataaa,
        "is_show": 0,
        "is_active": 0
     }
  console.log("updateData",updateData)
     axios.delete(`https://temp-app-windowshop.herokuapp.com/productprices/${idd.id}`)
        .then(res => {
          message.success('Deleted updated successfully.');
         getDataPrice();
        })
   }
   const columns = [
  
  {
    title: 'Name',
    dataIndex: 'productName',
    key: 'productName',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
    render: (text, record) => (
      <span>
        {record.qty}{record.unitName}
      </span>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount'
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },
   {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to={"#"} onClick={() => deletePro(record)}>Delete</Link>

      </Space>
    ),
  },
];
 return(
    <div style={{width:"100%"}}>
      <h3>Add Price to Product</h3>
        <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={submitForm}
      scrollToFirstError
    >
     <Form.Item
        name="unitId"
        label="Unit"
        rules={[
          {
            required: true,
            message: 'Please select unit.',
          },
        ]}
       >
        <Select placeholder="select unit">
        { unitlist.length > 0 ? 
            unitlist.map((i,index)=>{
              return  <Option value={i.id} key={index}>{i.name}</Option>;
            })
          :  null
          }
         
        
        </Select>
      </Form.Item>
      <Form.Item
        name="qty"
        label="Qty"
        rules={[
         
          {
            required: true,
            message: 'Please input qty.',
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
            message: 'Please input price.',
          },
        ]}
      >
        <Input />
      </Form.Item>

        <Form.Item
        name="discount"
        label="Discount"
        rules={[
         
          {
            required: true,
            message: 'Please input discount.',
          },
        ]}
      >
        <Input />
      </Form.Item>
       {/*  <Form.Item
        name="totalPrice"
        label="TotalPrice"
        rules={[
         
          {
            required: true,
            message: 'Please input TotalPrice.',
          },
        ]}
      >
        <Input />
      </Form.Item>
      */}
        <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Product Price
        </Button>

        <Link to="/productlist"> <Button type="primary" htmlType="button">
          Cancel
        </Button></Link>
      </Form.Item>
    </Form>
       <Table columns={columns} dataSource={productPriceList} />
    </div>
   )
}

export default AddProductPrice;