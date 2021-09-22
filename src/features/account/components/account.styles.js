import styled from "styled-components";
import { TextInput } from "react-native-paper";
export const ABack = styled.ImageBackground.attrs({
  source: require('../../../../background.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ACover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AContainer = styled.View`
  background-color: rgba(220, 225, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AInput = styled(TextInput)`
  width: 300px;
`;