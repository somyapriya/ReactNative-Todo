/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, isAvailableError} from '../../actions/actions';

import {
  TextInputWrapper,
  ErrorContainer,
  Button,
  AddText,
  ModalView,
  CancelButton,
  CancelText,
  ButtonWrapper,
  TextInputWrapperDescription,
  TitleText,
} from './SearchWithButton.styles';

const SearchWithButton = (): JSX.Element => {
  const [textValue, setValue] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [modalVisible, setModalVisible] = useState(false);
  const todoList = useSelector((state: any) => state.todoSelector.todoList);
  const isAlreadyAvailable = useSelector(
    (state: any) => state.todoSelector.isAlreadyAvailable,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAlreadyAvailable) {
      setValue(textValue);
      setDescription(description);
    } else {
      setValue('');
      setModalVisible(false);
      setDescription('');
    }
  }, [todoList.length, isAlreadyAvailable]);

  return (
    <>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}>
        <AddText>Add Task</AddText>
      </Button>
      {modalVisible && (
        <>
          <ModalView>
          <TitleText>Task</TitleText>

            <TextInputWrapper
              onChangeText={(textEntry: string) => {
                setValue(textEntry);
              }}
              placeholder="Please enter your todo task"
              value={textValue}
            />
          <TitleText>Description</TitleText>
            <TextInputWrapperDescription
              onChangeText={(textEntry: string) => {
                setDescription(textEntry);
              }}
              placeholder="Description"
              value={description}
            />

            {isAlreadyAvailable && (
              <ErrorContainer>Already Available in the list</ErrorContainer>
            )}

            <ButtonWrapper>
              <CancelButton
                onPress={() => {
                  setModalVisible(false);
                  setValue('');
                  setDescription('');
                  dispatch(isAvailableError(false));
                }}>
                <CancelText>Cancel</CancelText>
              </CancelButton>
              <Button
                style={textValue?.length ? {opacity: 1} : {opacity: 0.5}}
                disabled={textValue?.length ? false : true}
                onPress={() => {
                  dispatch(addTask(textValue as string, description as string));
                }}>
                <AddText>Save</AddText>
              </Button>
            </ButtonWrapper>
          </ModalView>
        </>
      )}
    </>
  );
};

export default SearchWithButton;
