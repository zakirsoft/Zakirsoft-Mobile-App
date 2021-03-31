import styled from 'styled-components';

export const Screen = styled.ScrollView`
  flex: 1;
  background-color: #ebf1f7;
  padding-left: 25px;
`;
export const Logo = styled.View`
  flex-direction: row;
  width: 100%;
  height: 48px;
  margin-left: 24px;
  margin-top: 23px;
`;
export const PrimaryButton = styled.TouchableOpacity`
  background-color: #1558ff;
  width: 133px;
  height: 48px;
  border-radius:5px
  justify-content: center;
  align-items: center;
`;
export const SecondaryButton = styled.TouchableOpacity`
  background-color: #ebf1f7;
  width: 133px;
  height: 48px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
