import styled, {useTheme} from "styled-components";
import React, { Children } from "react";
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  bottom: 'marginBottom',
  right: 'marginRight',
};
const getVariant = (position, size, theme) => {
  const Index = sizeVariant[size];
  const pos = positionVariant[position];
  const value = theme.space[Index];

  return `${pos}:${value}`;
};

const SpacerView = styled.View`
${({ variant }) => variant};
`; 

export const Spacer =({position,size,children}) =>{
  const theme=useTheme();
  const variant = getVariant(position,size,theme);
  return <SpacerView variant={variant}>{children}</SpacerView>
}
Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
