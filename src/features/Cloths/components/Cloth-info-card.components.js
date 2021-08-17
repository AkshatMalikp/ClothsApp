import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from '../../../../assets/open';
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/fortext/text.component";
import {
  ClothCard,
  ClothsCardCover,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
  Open,
  Icon,
} from './cloths-info-styles';
export const ClothsInfoCard = ({ restaurant = {} }) => {
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
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosed && <Text variant="error">CLOSED! RIGHT NOW</Text>}
            <Spacer position="left" size="large">
              {isopened && <Open xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </ClothCard>
  );
};
