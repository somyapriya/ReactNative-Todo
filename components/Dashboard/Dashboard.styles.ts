import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const SectionContainer = styled.View`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  margin: 20px;
  color: #033604;
  font-weight: bold;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  margin-top: 32px;
  padding-horizontal: 24px;
`;
