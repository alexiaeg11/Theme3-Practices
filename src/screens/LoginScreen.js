import React, { useState } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Link,
  Center,
  Pressable,
  useColorModeValue,
} from "native-base";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Colores dinámicos según el modo de color
  const bgColor = useColorModeValue('gray.100', 'gray.900'); // Fondo principal
  const cardBgColor = useColorModeValue('white', 'gray.800'); // Fondo de la caja de login
  const textColor = useColorModeValue('coolGray.800', 'coolGray.50'); // Color de texto
  const linkColor = useColorModeValue('indigo.500', 'indigo.300'); // Color de enlaces

  const handleLogin = () => {
    if (email && password) {
      setIsAuthenticated(true);
      navigation.navigate('MainTab');
    } else {
      alert('Please enter your credentials');
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} bg={bgColor}>
        <Box
          bg={cardBgColor}
          p={5}
          w="90%"
          maxW="350"
          borderRadius={10}
          shadow={2}
        >
          <Heading size="lg" textAlign="center" color="indigo.500">
            Welcome Back
          </Heading>
          <Heading
            mt="1"
            size="xs"
            textAlign="center"
            color={textColor}
          >
            Sign in to continue
          </Heading>

          <VStack space={4} mt={5}>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChangeText={setPassword}
              />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: linkColor,
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forgot Password?
              </Link>
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={handleLogin}
            >
              Login
            </Button>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.signupText, { color: linkColor }]}>
                New user?{" "}
                <Text style={styles.signupLink}>Sign Up</Text>
              </Text>
            </Pressable>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  signupText: {
    textAlign: 'center',
    marginTop: 15,
  },
  signupLink: {
    fontWeight: 'bold',
  },
});

export default LoginScreen;
