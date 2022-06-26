import { Table, Tag, Space } from 'antd';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const columns = [
  {
    title: 'Order Date',
    dataIndex: 'orderDate',
    key: 'orderDate',
    render: text => <a>{text}</a>,
  },
  { 
    title: 'User',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
   {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },
  {
    title: 'Pincode',
    dataIndex: 'pincodeNo',
    key: 'pincode',
  },
 {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <>
           <Tag color={text == "pending" ? "red" : "green"} >
                {text}
              </Tag>
        </>
      ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to={"/orderdetail/"+text.id+""}>Show</Link>
      </Space>
    ),
  },
];



function Orderlist(){
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`https://temp-app-windowshop.herokuapp.com/ordersAllList`)
    .then(res => {
      const persons = res.data;
      setData(res.data);
    })
  },[]);
  console.log(data);
return(<><h3>Order List</h3><Table columns={columns} dataSource={data} /></>);
}
export default Orderlist;