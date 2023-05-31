import styled from 'styled-components';

export const EmptyState = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 20px;
  color: #E75480;
  font-weight: 400;
  flex:1;
`;

export const Wrapper = styled.View`
  flex-direction:row;
  flex:0.7;
  justify-content:center;
  align-items:center
  
`;

export const ListWrapper = styled.View`
  flex-direction:row;
  justify-content:flex-start;
 
`;
export const Title = styled.Text`
  font-size: 18px;
  margin-left:10px;
  font-weight: bold;
  width:220px;
`;


export const ListContainer = styled.View`
  flex-direction:row;
  justify-content:space-between;
  margin:5px;
  padding:10px
  border:1px solid white;
  height:auto;
  border-radius:5px;

`;

export const CloseIcon =styled.Text`
font-size:18px;
font-weight:bold;
color:red;
padding:5px
`


export const Desc = styled.Text`
  font-size: 14px;
  margin-left:10px;
  margin:10px;
  width:220px;
`;
