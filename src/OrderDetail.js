import { Table,Button } from 'antd';
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
     const [userDetail,setUserDetail]=useState({});
    const getProductInfoOrder = () => {
            axios.get(`https://temp-app-windowshop.herokuapp.com/orders/${id}`)
        .then(res => {
          setUserDetail(res.data);
          console.log("setUserDetail",res.data);
          const orderData = res.data;
            axios.get(`https://temp-app-windowshop.herokuapp.com/users/${res.data.userId}`)
          .then(res => {
           // setProducts(res.data);
            console.log("user",res.data);
            const userData = res.data;
            setUserDetail({
              "name":userData.name,
              "address":orderData.address,
              "pincode":orderData.pincode,
              "qty":orderData.qty,
              "totalPrice":orderData.totalPrice,
              "orderDate":orderData.orderDate
            })
           
        })
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

return(<div>
     <h2>Order Detail 

      <Link to={"/"}>  <Button type="primary" htmlType="button" style={{float: "right"}}>
          Back
        </Button> </Link>
     </h2> 

      <h3> Order no : {id}</h3>
      <h3> Order Date : {userDetail.orderDate}</h3>
      <h3> Name : {userDetail.name}</h3>
      <h3> Address : {userDetail.address}</h3>
      <h3> Pincode : {userDetail.pincode}</h3>
      <h3> QTY : {userDetail.qty}</h3>
      <h3> TOTAL : {userDetail.totalPrice}</h3>

  <Table columns={columns} dataSource={products} />
  </div>);
}
export default OrderDetail;