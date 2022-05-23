import React, { useEffect } from 'react';
import { Typography, Row, Col, Statistic, Carousel} from 'antd';
import { Link } from 'react-router-dom';

import { useGetTargetExercisesQuery } from '../services/exerciseAPI';
//import 
import { Content } from 'antd/lib/layout/layout';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';

function onChange(a, b, c) {
    console.log(a, b, c);
  }

const contentStyle = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  };

const { Title } = Typography;

const HomePage = () => {
    const { data, isFetching } = useGetTargetExercisesQuery('biceps');
    if (!isFetching) console.log(data);

  return (
    <Content style={{padding: '0 50px'}}>
        <Col style={{background: '#fff', padding: 24, minHeight: '100vh', display: 'flex'}}>
            <Col>
                <Col>
                    <Title level={1}>Welcome to OctoPhysiq</Title>
                    <Title level={4}>Your fitness goals are achievable and we are here to help</Title>
                </Col>
                <Row>
                    <Col style={{background: 'd9d9d9', marginTop: 50}}>
                        <Title style = {{textDecoration:'underline'}}level={2}>Currently Available Features:</Title>
                        <Title level={4}>• Navigation to each page</Title>
                        <Title level={4}>• Exercise Search offers user the ability to find exercises based on targeted muscle</Title>
                        <Title level={4}>• Display is semi-formatted to work for most device sizes</Title>
                        <Title level={4}>• Run Planner page uses another microservice to retrieve weather in given city to see if it is worth running</Title>
                    </Col>
                </Row>
                <Row>
                    <Col style={{background: 'd9d9d9', marginTop: 50}}>
                        <Title style = {{textDecoration:'underline'}}level={2}>Currently Working On:</Title>
                        <Title level={4}>• Adding more detail to cards displayed on Exercise Search Page</Title>
                        <Title level={4}>• Adding a filter/limit to number of displayed cards on ExSeaPage for better loading</Title>
                        <Title level={4}>• Adding more filter options for user on Search Page</Title>
                        <Title level={4}>• Creating a proper Home page</Title>
                        <Title level={4}>• Starting Planner Page</Title>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Carousel dotPosition={'top'} style={{marginLeft: 20, width: '40vw', height: '40vh'}} afterChange={onChange}>
                    <div>
                        <img src={img1} atl="img1" style={{maxWidth: '100%'}}/>
                    </div>
                    <div>
                        <img src={img2} atl="img2" style={{maxWidth: '100%'}}/>
                    </div>
                    <div>
                        <img src={img3} atl="img3" style={{maxWidth: '100%'}}/>
                    </div>
                    <div>
                        <img src={img4} atl="img4" style={{maxWidth: '100%'}}/>
                    </div>
                </Carousel>
            </Col>
        </Col>
    </Content>
  );
};

export default HomePage;