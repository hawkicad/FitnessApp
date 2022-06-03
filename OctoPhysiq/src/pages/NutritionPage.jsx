import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, Row, Col, Input, Select} from 'antd';

import useCalorieSearch from '../hooks/useCalorieSearch';
import Loader from '../components/Loader';

const {Title, Text} = Typography;
const { Search } = Input;
const { Meta } = Card;

const NutritionPage = () => {
    
    const [food, setFood] = useState('tomato');
    const [ data, length, loading, error ] = useCalorieSearch(food);

    console.log(data);
    console.log(length);

  if (loading) return <Loader />;

  return (
    <Col style={{background: '#d9d9d9', padding: 24, minHeight: '100vh'}}>
      <Col>
        <Title level={2}>Calorie Search</Title>
        <p>Here you can enter a food item to obtain it's corresponding nutritional information</p>
        <p>You can then use this information to count your calories and/or evaluate the way you eat</p>
        <p>Default : Tomato</p>
      </Col>
      <Col>
        <Title level={3}> Enter a food item you would like to search for : </Title>
        <Search 
          placeholder='Enter Food'
          allowClear
          enterButton="Search"
          size='large'
          onSearch={(e) => setFood(e.toLowerCase())} />
      </Col> <br />

      <Col>
        {(length == 0)
            ? <Title level={2}>Item not found, please try again</Title>
            : <div style={{background: 'black', color: '#00b4a3', width: '25%', border: '3px solid #00b4a3', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)'}}>
                <div>
                    <Title level={2} style={{color: '#00b4a3', textAlign: 'center', borderBottom: '3px solid white'}}>{data.items[0].name}</Title>
                </div>
                <div style={{paddingLeft: '15px'}}>
                    <p>Serving Size - grams : {data.items[0].serving_size_g}</p>
                    <p>Calories per Serving Size : {data.items[0].calories}</p>
                </div>
                <div>
                    <Title level={4} style={{color: '#00b4a3', textAlign: 'center', borderBottom: '3px solid white', borderTop: '3px solid white'}}>Macronutrients : </Title>
                    <div style={{paddingLeft: '15px', paddingBottom: '25px'}}>
                        <p>Carbs - grams : {data.items[0].carbohydrates_total_g}</p>
                        <p>Fat - grams : {data.items[0].fat_total_g}</p>
                        <p>Protein - grams : {data.items[0].serving_size_g}</p>
                        <p>Sugar - grams : {data.items[0].sugar_g}</p>
                    </div>
                </div>
            </div>
        }
      </Col>
    </Col>
  );
};

export default NutritionPage;