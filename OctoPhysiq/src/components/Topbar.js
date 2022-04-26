import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Avatar, Menu, Button, Breadcrumb, Typography, Space} from 'antd';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
import Title from 'antd/lib/typography/Title';
const teal = '#00b4a3';
const grey = '#383838';

const Topbar = () => {

    return (
        <Header style={{padding: 10, background: 'black'}}>
            <Avatar style={{float:'right', color: 'black'}} icon={<UserOutlined/>}/>
            <Title style={{color: teal, float: 'left'}} level={3}>OctoPhysiq</Title>
        </Header>
    )
    
}

export default Topbar;