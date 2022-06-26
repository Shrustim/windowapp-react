import React, { useState,useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Mobile No',
    dataIndex: 'mobileNo',
    key: 'mobileNo',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    }
   
  
];





function Userlist(){
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`https://temp-app-windowshop.herokuapp.com/users`)
    .then(res => {
      const persons = res.data;
      setData(res.data);
    })
  },[]);
  console.log(data);
  return(<><h3>User List</h3><Table columns={columns} dataSource={data} /></>);
}
export default Userlist;