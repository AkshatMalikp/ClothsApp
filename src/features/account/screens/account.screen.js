import React from "react";
import { ABack, ACover, AContainer } from '../components/account.styles';
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
export const AccountScreen = ({ navigation }) => {
  return (
    <ABack>
      <ACover />
      <AContainer>
        <Button
          icon="tshirt-v"
          mode="text"
          color="black"
          onPress={() => navigation.navigate("Login")}
        >
          LOG IN
        </Button>
        <Spacer size='large'>
          <Button
            icon="tshirt-v"
            mode="text"
            color="black"
            onPress={() => navigation.navigate("Register")}
          >
            REGISTER
          </Button>
        </Spacer>
      </AContainer>
    </ABack>
  );
};
