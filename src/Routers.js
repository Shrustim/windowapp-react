import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Productlist from"./Productlist";
import Orderlist from "./Orderlist";
import Userlist from "./Userlist";
import OrderDetail from "./OrderDetail";
import Addproduct from "./Addproduct";

import './DashboardCss.css';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function Routers() {
  return (
    <Router>
   <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Decorate</Menu.Item>
       
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
                <Menu.Item key="1"> <Link to="/productadd">Add Product</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/productlist">Product List</Link></Menu.Item>
            </SubMenu>
           
               
            
        
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Routes>
            <Route exact path="/" element={<Orderlist/>}/>
            <Route  path="/userlist" element={<Userlist/>}/>
            <Route  path="/productlist" element={<Productlist/>}/>
            <Route  path="/productadd" element={<Addproduct/>}/>
            <Route  path="/productedit/:id" element={<Addproduct/>}/>
            <Route  path="/orderdetail/:id" element={<OrderDetail/>}/>
            
        
        </Routes>

            {/* <h4> Product List</h4>
       
           <h4> User List</h4>
         
           <h4>Order List</h4>
           
         <h4>OrderDetail </h4>
           <OrderDetail />
         <h4>Add Product</h4>
         
          <Addproduct /> */}
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </Router>
  );
}

export default Routers;


