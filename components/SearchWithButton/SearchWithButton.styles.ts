import styled from 'styled-components';

export const TextInputWrapper = styled.TextInput`
  background-color: white;
  border-color: grey;
  border-width: 1px;
  height: 40px;
  border-radius: 5px;
  padding-horizontal: 5px;
  margin: 5px;
  justifycontent: 'center';
  alignitems: 'center';
  margintop: 22;
`;

export const TextInputWrapperDescription = styled.TextInput`
  background-color: white;
  border-color: grey;
  border-width: 1px;
  height: 80px;
  border-radius: 5px;
  padding-horizontal: 5px;
  margin: 5px;
  justifycontent: 'center';
  alignitems: 'center';
  margintop: 12;
`;


export const ErrorContainer = styled.Text`
  color: red;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  background-color: #1cb4ad;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const AddText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const ModalView = styled.View`
  position: absolute;
  background: white;
  border-radius: 10px;
  height: 300px;
  width: 100%;
  margin: 20px;
  flex-direction: column;
  align-content: center;
  padding: 20px;
  padding-top: 20px;
  top: 180;
  z-index: 100000;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid grey;
`;
export const CancelText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
`;

export const BackDrop = styled.View`
position: absolute;
height: 100%;
width: 100%;
margin: 20px;
background:#000
z-index: 10000;
opacity:0.2
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const TitleText = styled.Text`
color: #000;
font-weight: bold;
margin-top:10px;
margin-bottom:5px;
`;