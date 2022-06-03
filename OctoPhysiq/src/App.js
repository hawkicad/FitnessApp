import React, { useState, useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.less';
import { Layout, Avatar, Menu, Button, Breadcrumb, Typography, Space} from 'antd';

import HomePage from './pages/HomePage';
import PlannerPage from './pages/PlannerPage';
import SearchPage from './pages/SearchPage';
import StrengthPage from './pages/StrengthPage';
import WeightPage from './pages/WeightPage';
import RunPage from './pages/RunPage';
import NutritionPage from './pages/NutritionPage';

import {
  HomeOutlined,
  TableOutlined,
  FireOutlined,
  CalendarOutlined,
  CalculatorOutlined,
  SearchOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ThunderboltOutlined,
  HeartOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const teal = '#00b4a3';
const grey = '#383838';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [screenSize]);
  
  return (
    <div className="App">
      <Layout>
        <Header style={{padding: 10, background: 'black'}}>
          <Avatar style={{float:'right', color: 'black'}} icon={<UserOutlined/>}/>
          <Button type="primary" onClick={toggleCollapsed} style={{float: 'left', marginRight: 5, color: 'black', background: 'white', borderColor: teal}}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Title style={{color: teal, float: 'left'}} level={3}>OctoPhysiq</Title>
        </Header>
        <Layout>
          <Sider style={{background: grey, color: teal, minHeight: '100vh'}} collapsed={collapsed} mode='inline'>
            <Menu
              defaultSelectedKeys={['home']}
              style={{background: grey, color: 'white'}}
              mode="inline"
            >
              <Menu.Item key ='home'>
                <HomeOutlined/>
                <span>
                  <Link className='MenuLink' to="/">Home</Link>
                </span>
              </Menu.Item>
              <Menu.Item key ='planner'>
                <TableOutlined/>
                <span>
                  <Link className='MenuLink' to="/planner">Workout Planner</Link>
                </span>
              </Menu.Item>
              <Menu.Item key ='search'>
                <SearchOutlined/>
                <span>
                  <Link className='MenuLink' to="/search">Exercise Search</Link>
                </span>
              </Menu.Item>
              <Menu.Item key ='run'>
                <ThunderboltOutlined />
                <span>
                  <Link className='MenuLink' to="/run">Run Planner</Link>
                </span>
              </Menu.Item>
              <Menu.Item key ='calorie'>
                <HeartOutlined />
                <span>
                  <Link className='MenuLink' to="/calorie">Calorie Search</Link>
                </span>
              </Menu.Item>
              <Menu.SubMenu
                className='customSubmenu'
                key = 'sidebarSubmenu'
                title={
                  <span>
                    <CalendarOutlined/>
                    <span style={{paddingLeft : 8}}>Tracking</span>
                  </span>
                }
              >
                <Menu.Item key ='strength'>
                  <FireOutlined/>
                  <Link className='MenuLink' to="/strength"><span>Strength</span></Link>
                </Menu.Item>
                <Menu.Item key ='weight'>
                  <CalculatorOutlined/>
                  <Link className='MenuLink' to="/weight">Weight/Calories</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <div>
              <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/planner" element={<PlannerPage/>}/>
                <Route exact path="/search" element={<SearchPage/>}/>
                <Route exact path="/run" element={<RunPage/>}/>
                <Route exact path="/calorie" element={<NutritionPage/>}/>
                <Route exact path="/strength" element={<StrengthPage/>}/>
                <Route exact path="/weight" element={<WeightPage/>}/>
              </Routes>
            </div>
            <Footer style={{background: 'black', width: '100vw', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <Typography.Title level={5} style={{color: 'white'}}> Copyright © 2022 
                  <Link to="/">
                    <span style={{paddingLeft: 5}}>
                      OctoPhysiq LLC.
                    </span>
                  </Link> <br />
                  All Rights Reserved.
                  </Typography.Title>
                  <Space>
                    <Link to="/"><span style={{textDecoration: 'underline'}}>Home</span></Link>
                    <Link to="/planner"><span style={{textDecoration: 'underline'}}>Routine Planner</span></Link>
                    <Link to="/search"><span style={{textDecoration: 'underline'}}>Exercise Search</span></Link>
                    <Link to="/run"><span style={{textDecoration: 'underline'}}>Run Planner</span></Link>
                    <Link to="/calorie"><span style={{textDecoration: 'underline'}}>Calorie Search</span></Link>
                    <Link to="/strength"><span style={{textDecoration: 'underline'}}>Strength Tracking</span></Link>
                    <Link to="/weight"><span style={{textDecoration: 'underline'}}>Weight/Calorie Tracking</span></Link>
                  </Space>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
