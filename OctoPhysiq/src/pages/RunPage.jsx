import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, Row, Col, Input, Select} from 'antd';

import useCitySearch from '../hooks/useCitySearch';
import Loader from '../components/Loader';

const {Title, Text} = Typography;
const { Search } = Input;
const { Meta } = Card;

const RunPage = () => {
    
    const [city, setCity] = useState('corvallis');
    const [ data, loading, error ] = useCitySearch(city);

    console.log(data);

  if (loading) return <Loader />;

  return (
    <Col style={{background: '#d9d9d9', padding: 24, minHeight: '100vh'}}>
      <Col>
        <Title level={2}>Run Planner</Title>
        <p>Here you can plan your run based on the weather outside in the location you're looking to run at</p>
        <p>Using this weather data, you can decide when to run or whether you wish to do so in spite of the weather</p>
        <p>Default : Corvallis, OR</p>
      </Col>
      <Col>
        <Title level={3}> Enter the city you're planning your run in today : </Title>
        <Search 
          placeholder='Enter City Name'
          allowClear
          enterButton="Search"
          size='large'
          onSearch={(e) => setCity(e.toLowerCase())} />
      </Col> <br />

      <>
        <Row gutter={[32,32]} style={{marginBottom : 300}}>
          {data?.map((day) => (
            <Col xs={24} sm={12} lg={6} key={day.dt}>
              <Card 
                hoverable
                cover={<img alt="missing demo" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>}
                style={{background : '#00b4a3'}}
              >
                <Title level={5}>{`${day.dt_txt}`}</Title>
                <p>{`${day.weather[0].description} | Temp : ${Math.round((day.main.temp - 273.15) * (9/5) + 32)} °F`}</p>
                <p>{`${day.wind.speed} mph wind | Feels Like : ${Math.round((day.main.feels_like - 273.15) * (9/5) + 32)} °F`}</p>
              </Card>
          </Col>
          ))}
        </Row>
      </>
    </Col>
  );
};

export default RunPage;