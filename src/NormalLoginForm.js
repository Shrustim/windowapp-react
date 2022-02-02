import { Form, Input, Button, Checkbox } from 'antd';
import React, { useState } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const NormalLoginForm = ({setIsLogin}) => {
  const [errorMessage,setErrorMessage] = useState("");
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      if(values.username !== "admin" || values.password !== "123123"){
        setErrorMessage("Invalid Username and password.");
      }else{
        setErrorMessage("");
        setIsLogin(true);
      }
    
    };
  
    return (
        <div style={{    width: "100%",
            display: "flex",
            justifyContent: "center", marginTop: "131px"}}>
                <div  style={{    width: "26%",
                padding: "18px",
                border: "1px solid #b3b0b0",
                borderRadius: "15px",
                boxShadow: "2px 7px 5px 0px",
                background: "white"
                 }}>

               <h2>Login</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
       
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
         
        </Form.Item>
        <span style={{padding:"20px",color:"red"}}>{errorMessage}</span>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  };
  export default NormalLoginForm;  