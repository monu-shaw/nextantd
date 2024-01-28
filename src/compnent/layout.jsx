"use client"
import React, { useState } from 'react';
import { Layout, Affix, Menu } from 'antd';
import App from './catdrawer';
import LoginModal from './loginmodal';

const { Header , Content} = Layout;

const MyComponent = ({children}) => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
  <Layout>
    <Header style={{ position: 'fixed', top: 0,width:'100%', zIndex: 1000 }}>
  <Menu mode="horizontal">
    <Menu.Item key="home">Home</Menu.Item>
    <Menu.Item key="about" onClick={()=>setIsModalVisible(i=>!i)} >Login</Menu.Item>
    <Menu.Item key="contact" onClick={()=>setVisible(i=>!i)}>Categories</Menu.Item>
  </Menu>
  <App visible={visible} setVisible={setVisible} />
  <LoginModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
</Header>

    <Content style={{marginTop:'68px'}}>
      {children}
    </Content>
  </Layout>
)};

export default MyComponent;
