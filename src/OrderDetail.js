import { Table,Button,Radio,message  } from 'antd';
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
    render: (text, record) => (
      <span>
        {record.qty} ({record.dbQty}{record.unitName})
      </span>
    ),
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
    const [value, setValue] = useState("");
    const [products,setProducts]=useState(null);
    const [orderDataaa,setOrderDataaa] = useState(null)
     const [userDetail,setUserDetail]=useState({});
    const getProductInfoOrder = () => {
            axios.get(`https://temp-app-windowshop.herokuapp.com/orders/${id}`)
        .then(res => {
          setUserDetail(res.data);
          console.log("setUserDetail",res.data);
          const orderData = res.data;
          setOrderDataaa(orderData)
            axios.get(`https://temp-app-windowshop.herokuapp.com/users/${res.data.userId}`)
          .then(res => {
           // setProducts(res.data);
            console.log("user",res.data);
            setValue(orderData.status)
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
const onChange = async(e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    const updateData = {
     
       // ...orderDataaa,
         "status": e.target.value,
     }
  console.log("updateData",updateData)
     axios.patch(`https://temp-app-windowshop.herokuapp.com/orders/${id}`,updateData)
        .then(res => {
          message.success('Status updated successfully.');
         //form.resetFields();
         //  history.push("/productlist");
        })
    
  };
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
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"pending"}>Pending</Radio>
          <Radio value={"completed"}>Completed</Radio>
        </Radio.Group>

      </div>
  <br/>
  <Table columns={columns} dataSource={products} />
  </div>);
}
export default OrderDetail;