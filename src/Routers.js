import React, { useState,Suspense, lazy } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import Productlist from"./Productlist";
// import Orderlist from "./Orderlist";
// import Userlist from "./Userlist";
// import OrderDetail from "./OrderDetail";
// import Addproduct from "./Addproduct";
// import NormalLoginForm from "./NormalLoginForm";
// import Refsdemo from "./components/Refsdemo";
// import Contextdemo from "./components/context/Contextdemo";
// import LazySuspence from "./components/codesplitting/LazySuspence";
import './DashboardCss.css';
const Productlist = lazy(() => import('./Productlist'));
const Orderlist = lazy(() => import('./Orderlist'));
const Userlist = lazy(() => import('./Userlist'));
const OrderDetail = lazy(() => import('./OrderDetail'));
const Addproduct = lazy(() => import('./Addproduct'));
const NormalLoginForm = lazy(() => import('./NormalLoginForm'));
const Refsdemo = lazy(() => import('./components/Refsdemo'));
const Contextdemo = lazy(() => import('./components/context/Contextdemo'));
const LazySuspence = lazy(() => import('./components/codesplitting/LazySuspence'));;
const ForwardingRefs = lazy(() => import('./components/ForwardingRefs'));
const Portals = lazy(() => import("./components/Portals"));
const HigherOrderComp = lazy(() => import("./components/hoc/HigherOrderComp"));
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



function Routers() {
const [isLogin,setIsLogin] = useState(true);
console.log("isLogin",isLogin);
if(isLogin) { 
  return (
    <Router>
   <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="1">Decorate</Menu.Item>
        <Menu.Item key="2" onClick={()=>{setIsLogin(false);window.location.href = 'https://adminpanel-decorate.herokuapp.com/'; }}>Sign Out</Menu.Item>
      </Menu>
    
    </Header>
    <Content style={{ padding: '0 50px' }}>
     
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub2']}
            style={{ height: '100%' }}
          >
             <SubMenu key="sub2" icon={<UserOutlined />} title="Users/Orders">
                 <Menu.Item key="1"> <Link to="/">Order List</Link></Menu.Item>
                 <Menu.Item key="2">  <Link to="/userlist">User List</Link></Menu.Item>
             </SubMenu>
            <SubMenu key="sub1" icon={<LaptopOutlined/>} title="Product">
                <Menu.Item key="3"> <Link to="/productadd">Add Product</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/productlist">Product List</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<LaptopOutlined/>} title="Advanced Points">
                <Menu.Item key="5"> <Link to="/refsdemo">Refs demo</Link></Menu.Item>
                <Menu.Item key="6"> <Link to="/contextdemo">Context demo</Link></Menu.Item>
                <Menu.Item key="7"> <Link to="/lazysuspence">Code-Splitting Lazy Suspence</Link></Menu.Item>
                <Menu.Item key="8"> <Link to="/forwardingrefs">Forwarding Refs</Link></Menu.Item>
                <Menu.Item key="9"> <Link to="/portals">Portals</Link></Menu.Item>
                <Menu.Item key="10"> <Link to="/higherOrderComp">HigherOrderComp</Link></Menu.Item>
                
            </SubMenu>
           
               
            
        
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
       
           <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                        <Route exact path="/" element={<Orderlist/>}/>
                        <Route  path="/userlist" element={<Userlist/>}/>
                        <Route  path="/productlist" element={<Productlist/>}/>
                        <Route  path="/productadd" element={<Addproduct/>}/>
                        <Route  path="/productedit/:id" element={<Addproduct/>}/>
                        <Route  path="/orderdetail/:id" element={<OrderDetail/>}/>
                        <Route path='/refsdemo' element={<Refsdemo/>} />
                        <Route path='/contextdemo' element={<Contextdemo/>} />
                        <Route path="/lazysuspence" element={<LazySuspence/>} />
                        <Route path="/forwardingrefs" element={<ForwardingRefs/>} />
                        <Route path="/portals" element={<Portals/>} />
                        <Route path="/higherOrderComp" element={<HigherOrderComp/>} />
                        
                  </Routes>
            </Suspense>
       

         
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </Router>
  );
         }{  return(
          <Router>
             <Routes>
           <Route exact path="/" element={<NormalLoginForm setIsLogin={setIsLogin}/>}/>
           <Route  path="/login" element={<NormalLoginForm setIsLogin={setIsLogin}/>}/>
            
        </Routes>
             </Router>
         );
         }
}

export default Routers;


