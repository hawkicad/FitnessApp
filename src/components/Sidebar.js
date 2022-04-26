import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, TableOutlined, SearchOutlined, CalendarOutlined, FireOutlined, CalculatorOutlined, MenuOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
import Title from 'antd/lib/typography/Title';
const teal = '#00b4a3';
const grey = '#383838';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
        <Sider style={{background: grey, color: teal}} mode='inline'>
          <Menu
            defaultSelectedKeys={['home']}
            style={{background: grey, color: 'white'}}
            mode="inline"
          >
            <Menu.Item key ='home'>
              <HomeOutlined/>
              <Link className='MenuLink' to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key ='planner'>
              <TableOutlined/>
              <Link className='MenuLink' to="/planner">Workout Planner</Link>
            </Menu.Item>
            <Menu.Item key ='search'>
              <SearchOutlined/>
              <Link className='MenuLink' to="/search">Exercise Search</Link>
            </Menu.Item>
            <Menu.SubMenu
              className='customSubmenu'
              key = 'sidebarSubmenu'
              title={
                <span>
                  <CalendarOutlined/>
                  <span>Tracking</span>
                </span>
              }
            >
              <Menu.Item key ='strength'>
                <FireOutlined/>
                <Link className='MenuLink' to="strength"><span>Strength</span></Link>
              </Menu.Item>
              <Menu.Item key ='weight'>
                <CalculatorOutlined/>
                <Link className='MenuLink' to="weight">Weight/Calories</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
      )}
    </div>
  );
};

export default Sidebar;
