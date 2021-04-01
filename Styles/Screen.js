import styled from 'styled-components';

export const Screen = styled.ScrollView`
  flex: 1;
  background-color: #ebf1f7;
  padding-left: 22px;
  padding-right: 20px;
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
  border-radius: 5px;
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
export const ServicesCart = styled.View`
  width: 345px;
  height: 340px;
  background-color: #ffffff;
  margin-right: 54px;
  border-radius: 10px;
  margin-top: 24px;
`;
export const TechCart = styled.View`
  width: 345px;
  height: 219px;
  background-color: #ffffff;
  margin-top: 24px;
  border-radius: 10px;
`;
export const IconViewWrapper = styled.View`
  padding-right: 29px;
  padding-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 16px;
`;
export const IconWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IconText = styled.Text`
  font-family: 'DMSans-Regular';
  font-size: 14px;
  padding-top: 9px;
`;
