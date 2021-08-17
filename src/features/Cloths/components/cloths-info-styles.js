import styled from "styled-components";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
export const ClothCard = styled(Card)`
  background-color: #86c5da;
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const ClothsCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: #86c5da;
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
  flex-direction: row;
`;
export const Icon = styled.Image`
width : 20px;
height:20px;
`;