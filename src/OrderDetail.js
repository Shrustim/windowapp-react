import { Table } from 'antd';
import {
  useParams, Link,useNavigate 
} from "react-router-dom";
import React, { useState,useEffect } from 'react';
import axios from 'axios';
const columns = [
  {
     title: 'Image',
    dataIndex: 'imageone',
    key: 'imageone',
    render: text => <img src={text} style={{height:"100px",width:"100px",borderRadius:"50%"}}></img>,
  },
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
  },
  {
    title: 'Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  }
];



function OrderDetail(){
   const navigate = useNavigate();
   let { id } = useParams();
    const [products,setProducts]=useState(null);
     const [userDetail,setUserDetail]=useState(null);
    const getProductInfoOrder = () => {
       axios.get(`https://temp-app-windowshop.herokuapp.com/orders/${id}`)
      .then(res => {
        setUserDetail(res.data);
        console.log("setUserDetail",res.data);
       
    })
    axios.get(`https://temp-app-windowshop.herokuapp.com/ordersById/${id}`)
      .then(res => {
        setProducts(res.data);
        console.log("products",res.data);
       
    })
  }

     useEffect(()=>{
    if(typeof id !== "undefined" ){
     getProductInfoOrder();
    }
   },[id]);

return(<Table columns={columns} dataSource={products} />);
}
export default OrderDetail;