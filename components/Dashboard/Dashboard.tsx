import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchWithButton from '../SearchWithButton/SearchWithButton';
import Listing from '../Listing/Listing';
import {Gradient, SectionContainer, Title} from './Dashboard.styles';


const Dashboard = (): JSX.Element => { 
  return (
    <SectionContainer>
      <Gradient
        colors={['#f8fbd7', '#c6bee6', '#f7e0d9', '#c6bee6']}
        >
        <Title>Todo List</Title>
        <SearchWithButton/>
        <Listing/>
      </Gradient>
    </SectionContainer>
  );
};

export default Dashboard;
