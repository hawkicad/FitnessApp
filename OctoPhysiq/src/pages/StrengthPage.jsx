import React, { useEffect } from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetTargetExercisesQuery } from '../services/exerciseAPI';
//import 
import { Content } from 'antd/lib/layout/layout';


const { Title } = Typography;

const StrengthPage = () => {

  return (
    <Content style={{padding: '0 50px'}}>
        <Col style={{background: '#fff', padding: 24, minHeight: '100vh'}}>
            <Title level={1}>Welcome to your Strength Progression Tracker</Title>
            <Title level={3}>Here you can track your performance for an exercise on a particular day</Title>
        </Col>
        <Row>
            <Col style={{background: 'd9d9d9'}}>

            </Col>
        </Row>
    </Content>
  );
};

export default StrengthPage;