import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import ProductCurdOpRTKDetail from "./ProductCurdOpRTKDetail";
import { useGetProductsQuery  } from '../../redux_store/services/productsRTK';
export default function ProductCurdOpRTK() {
  const { data, error, isLoading } = useGetProductsQuery();
  const [editId,setEditId] = useState(null);
 
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
        <Space size="middle" onClick={()=>{setEditId(text.id)}}>
        Edit
        </Space>
      
      ),
    },
  ];
  console.log(data);
  return (
    <div><h1>Product Curd operation using RTK Query</h1>
    <h3>Product List</h3>
    {error ? ( <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                    <Table columns={columns} dataSource={data} />
                   
                   
                     </>
                ) : null}

    
    <br/>
    <ProductCurdOpRTKDetail editId={editId} />
    </div>
  )
}
