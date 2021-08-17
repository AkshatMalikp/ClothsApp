import styled from "styled-components";
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

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
