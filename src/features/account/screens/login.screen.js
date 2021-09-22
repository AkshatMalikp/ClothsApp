import React from "react";
import {
  ABack,
  ACover,
  AContainer,
  AInput,
} from '../components/account.styles';
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from '../../../components/fortext/text.component';
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../../services/Shops/authentication/authentication.context";
import { useContext, useState } from "react";
export const LoginScreen = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <ABack>
      <ACover />
      <AContainer>
        <AInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setemail(u)}
        />

        <Spacer size="large">
          <AInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setpassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error"> {error}</Text>
          </Spacer>
        )}

        <Spacer size="large">
          <Button
            icon="login"
            mode="text"
            color="black"
            onPress={() => onLogin(email, password)}
          >
            Login
          </Button>
        </Spacer>
      </AContainer>
    </ABack>
  );
};
