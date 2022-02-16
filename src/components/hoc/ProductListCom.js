
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import HOC2 from "./HOC2";
const columns = [
  {
    title: 'Name',
    dataIndex: 'productName',
    key: 'productName',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Image',
    dataIndex: 'imageone',
    key: 'imageone',
    render: text => <img src={text} style={{height:"100px",width:"100px",borderRadius:"50%"}}></img>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
       <Link to={"/productedit/"+text.id+""}>Edit</Link>
      </Space>
    ),
  },
];





function ProductListCom({ data }){
//   const [data,setData]=useState([]);
//   useEffect(()=>{
//     axios.get(`https://temp-app-windowshop.herokuapp.com/products`)
//     .then(res => {
//       const persons = res.data;
//       setData(res.data);
//     })
//   },[]);
  
return(<><h3>Product List</h3><Table columns={columns} dataSource={data} /></>);
}

const SearchProducts = HOC2(ProductListCom, "products");

export default SearchProducts;