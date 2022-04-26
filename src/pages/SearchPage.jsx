import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, Row, Col, Input, Select} from 'antd';

import { useGetExercisesQuery } from '../services/exerciseAPI';
import Loader from '../components/Loader';

const {Title, Text} = Typography;
const { Search } = Input;
const { Meta } = Card;

const SearchPage = () => {
  const [targetMuscle, setTargetMuscle] = useState('')
  const { data: exercisesList, isFetching } = useGetExercisesQuery();
  const [exercises, setExercises] = useState();
  const [equipment, setEquipment] = useState('');

  console.log(exercisesList);

  useEffect(() => {
    setExercises(exercisesList);

    const filteredData = exercisesList?.filter((item) => item.target.toLowerCase().includes(targetMuscle));

    setExercises(filteredData);
  }, [exercisesList, targetMuscle]);

  if (isFetching) return <Loader />;

  return (
    <Col style={{background: '#d9d9d9', padding: 24, minHeight: '100vh'}}>
      <Col>
        <Title level={2}>Exercise Search</Title>
        <p>Here you can find exercises based on target muscle and desired equipment</p>
      </Col>
      <Col>
        <Title level={3}> Enter a muscle from the list : </Title>
        <Title level={5}>Abductors, Abs, Adductors, Biceps, Calves, Cardiovascular system, Delts, Forearm, Glutes, Hamstrings, Lats, Levator scalpulae, Pectorals, Quads, Serratus anterior, Spine, Traps, Triceps, Upper Back</Title>
        <Search 
          placeholder='Search by Muscle'
          allowClear
          enterButton="Search"
          size='large'
          onSearch={(e) => setTargetMuscle(e.toLowerCase())} />
      </Col> <br />

      <>
        <Row gutter={[16,16]}>
          {exercises?.map((exercise) => (
            <Col xs={24} sm={12} lg={6} key={exercise.id}>
              <Card 
                hoverable
                cover={<img alt="missing demo" src={`${exercise.gifUrl}`}/>}
              >
                <p>{exercise.name}</p>
              </Card>
          </Col>
          ))}
        </Row>
      </>
    </Col>
  );
};

export default SearchPage;
