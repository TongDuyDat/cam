import React, { useState } from 'react';
import { CloudUploadOutlined, VideoCameraOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import UploadFile from './uploadVideo';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Live from './live_cam';


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
// const items = [
//   getItem('Class Edu', 'grp', <UserOutlined />,
//     [
//       getItem('Upload Video', '/upload', <CloudUploadOutlined />),
//       getItem('Live cam', '/live', <VideoCameraOutlined />)
//     ],
//     'group'),
// ]
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu theme="dark" mode="horizontal" />
        </Header>
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Layout
            style={{
              padding: '24px 0',
              background: colorBgContainer,
            }}
          >
            <Sider
              style={{
                background: colorBgContainer,
              }}
              width={200}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={'/upload'}
                type='group'
                style={{
                  height: '100%',
                }}
              // items={items}
              >
                <Menu.Item key={'/upload'}>
                  <CloudUploadOutlined />
                  <span>Upload Video</span>
                  <Link to="/"/>
                </Menu.Item>
                <Menu.Item key={'/live'}>
                  <VideoCameraOutlined />
                  <span>Live cam</span>
                  <Link to="/live"/>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content
              style={{
                padding: '0 24px',
                minHeight: 280,
              }}
            >
              <Routes>
                <Route exact path="/" element={<UploadFile />} />
                <Route path="/live" element={<Live />} />
              </Routes>
              {/* <UploadFile/> */}
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
};
export default App;