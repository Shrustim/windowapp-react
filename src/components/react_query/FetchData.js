import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
 import {  useQuery } from 'react-query';

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


const FetchData = () =>{
  const fetchProducts = () => {
		return  axios.get(`https://temp-app-windowshop.herokuapp.com/products`)
    			.then(res 	=> res.data)
  }
  const { isLoading, error, data } = useQuery('repoData', fetchProducts);
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
 
	return(
      <div>
                <h3> Fetching Data with useQuery</h3>
                <Table columns={columns} dataSource={data} />
      </div>
		)
}
export default FetchData;