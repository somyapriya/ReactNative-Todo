import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {updateTask, deleteTask} from '../../actions/actions';
import {
  CloseIcon,
  Desc,
  EmptyState,
  ListContainer,
  ListWrapper,
  Title,
  Wrapper,
} from './Listing.styles';

const Listing = (): JSX.Element => {
  const [listingDetails, setDetails] = useState([]);
  const todoList = useSelector((state: any) => state.todoSelector.todoList);

  const dispatch = useDispatch();

  useEffect(() => {
    setDetails(todoList);
  }, [todoList, listingDetails]);

  const textStyle = (item: any) => {
    if (item.status === 'completed') {
      let style = {textDecorationLine: 'line-through'};
      return style;
    } else {
      return null;
    }
  };
  return (
    <>
      {todoList?.length ? (
        <FlatList
          data={todoList}
          keyExtractor={item => item.name}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <ListContainer
                style={
                  item.status === 'completed'
                    ? {backgroundColor: '#cdcdde'}
                    : {backgroundColor: '#E6E6FA'}
                }>
                <ListWrapper>
                  <CheckBox
                    style={{width: 20, height: 20}}
                    onValueChange={val => {
                      if (val) {
                        setDetails(
                          (listingDetails[index].status = 'completed'),
                        );
                        dispatch(updateTask(listingDetails));
                      } else {
                        setDetails((listingDetails[index].status = 'todo'));
                        dispatch(updateTask(listingDetails));
                      }
                    }}
                    boxType="square"
                    tintColor="#E75480"
                    onCheckColor="#E75480"
                    onTintColor="#E75480"
                    animationDuration={0.1}
                    onAnimationType="bounce"
                  />
                  <View>
                    <Title
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={textStyle(item)}>
                      {item.title}
                    </Title>
                    <Desc style={textStyle(item)}>{item.description}</Desc>
                  </View>
                </ListWrapper>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Delete Task',
                      'Are you sure, you want to delete this task',
                      [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => dispatch(deleteTask(item))},
                      ],
                    );
                  }}>
                  <CloseIcon> X</CloseIcon>
                </TouchableOpacity>
              </ListContainer>
            );
          }}
        />
      ) : (
        <Wrapper>
          <EmptyState>
            Nothing to display! Please add something in your todo list
          </EmptyState>
        </Wrapper>
      )}
    </>
  );
};

export default Listing;
