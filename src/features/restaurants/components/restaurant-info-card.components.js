import React from "react";
import { Text, View, Image } from 'react-native';
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from '../../../../assets/open';
import { Spacer } from "../../../components/spacer/spacer.component";
const ClothCard = styled(Card)`
  background-color: #86c5da;
`;
const ClothsCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: #86c5da;
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;
export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Shop",
    icon = "https://cdn2.iconfinder.com/data/icons/men-clothes-lineal/512/suit-512.png",
    photos = [
      "https://image.freepik.com/free-vector/ornamental-fashion-logo_23-2148916367.jpg",
    ],
    address = "Some random addredss",
    isopened = true,
    rating = 4,
    isClosed = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <ClothCard>
      <ClothsCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosed && (
              <Text variant="label" style={{ color: "red", fontSize: 15 }}>
                CLOSED! RIGHT NOW
              </Text>
            )}
            <Spacer position="left" size="large">
              {isopened && <Open xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position="left" size="large">
              <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </ClothCard>
  );
};
