import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Box, Heading, Input, Stack, Divider, FormControl, Icon, Pressable, Radio, Select, CheckIcon, Center, HStack, 
  Checkbox, Link, Button, VStack, ScrollView, Slider, Text, TextArea, Switch } from "native-base";

function Register() {
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState("Hombre");
  const [service, setService] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [age, setAge] = React.useState(10);

  return (
    <ScrollView w="100%">
      <Center flex={1}>
        <Box safeArea w="90%" maxW="290" py="8">
          <VStack space={3} mt="5">
            <Heading 
              size="lg" 
              fontWeight="600" 
              color="coolGray.800" 
              _dark={{ color: "warmGray.50" }}
            >
              Register
            </Heading>
            
            <FormControl isRequired>
              <VStack space={4}>
                <Input variant="outline" placeholder="Nombre" />
                <Input variant="outline" placeholder="Apellido" />
                <Input variant="outline" placeholder="Email" />
                <Input
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon 
                        as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} 
                        size={5} 
                        mr="2" 
                        color="muted.400" 
                      />
                    </Pressable>
                  }
                  placeholder="Password"
                />
                <FormControl.HelperText>
                  Minimo 8 caracteres.
                </FormControl.HelperText>
              </VStack>
            </FormControl>
            <Divider/>

            <FormControl isRequired mt="4">
              <FormControl.Label>Género</FormControl.Label>
              <Radio.Group 
                name="myRadioGroup" 
                accessibilityLabel="Seleccionar género" 
                value={value} 
                onChange={setValue}
              >
                <VStack space={2}>
                  <Radio value="Hombre">Hombre</Radio>
                  <Radio value="Mujer">Mujer</Radio>
                  <Radio value="Tanque">Tanque Sovietico T90 con blindaje reactivo</Radio>
                  <Radio value="Gey" isDisabled>Gey</Radio>
                </VStack>
              </Radio.Group>
            </FormControl>
            <Divider/>

            <FormControl isRequired mt="4">
              <FormControl.Label>Carrera</FormControl.Label>
              <Select
                selectedValue={service}
                accessibilityLabel="Selecciona Tu Carrera"
                placeholder="Selecciona Tu Carrera"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />
                }}
                onValueChange={setService}
              >
                <Select.Item label="Ingenieria en Tics" value="tics" />
                <Select.Item label="Ingenieria en Electronica" value="electronica" />
                <Select.Item label="Ingenieria en Gestion Empresarial" value="gestion" />
                <Select.Item label="Ingenieria Industrial" value="industrial" />
                <Select.Item label="Licenciatura Administracion de Empresas" value="admin" />
              </Select>
            </FormControl>

            <Divider />

            <FormControl>
              <FormControl.Label>Edad</FormControl.Label>
              <Slider defaultValue={18} minValue={10} maxValue={100} step={1} onChange={(v) => setAge(v)}>
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
              <Text>Edad seleccionada: {age}</Text>
            </FormControl>
            <Divider />
            <FormControl>
              <FormControl.Label>Sobre tics</FormControl.Label>
              <TextArea h={20} placeholder="Escribe algo sobre tics"/>
            </FormControl>
            <FormControl>
              <HStack alignItems="center" space={4}>
                <FormControl.Label>Recibir notificaciones</FormControl.Label>
                <Switch offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />
              </HStack>
            </FormControl>

            <HStack space={2} mt="5" alignItems="center">
              <Checkbox 
                value="accept" 
                accessibilityLabel="Acepto los términos y condiciones"
                onChange={setIsChecked}
              >
                I accept the
              </Checkbox>
              <Link href="https://es.wikipedia.org/wiki/T-90" isExternal>
                terms & conditions
              </Link>
            </HStack>

            <Button 
              mt="5" 
              mb="5"
              colorScheme="indigo"
              onPress={() => {
                console.log("Registro presionado", {
                  genero: value,
                  carrera: service,
                  aceptoTerminos: isChecked
                });
              }}
            >
              Register
            </Button>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
}

export default Register;

/*import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { NativeBaseProvider, Box, Heading, VStack, FormControl, HStack, Input, Button, Center, useColorModeValue, useBreakpointValue } from "native-base";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');

    const flexDir = useBreakpointValue({ base: 'column', lg: 'row' });

    const handleRegister = () => {
        if (password === confirmPassword) {
            setIsAuthenticated(true); 
            navigation.navigate('MainTab'); 
        } else {
            alert('Passwords do not match'); 
        }
    };

    return (
        <Center w="100%" bg={bgColor} flex={1}>
            <Image 
                source={require('../../assets/icon.png')} 
                style={{ width: '100%', height: 200, marginBottom: 20 }} 
                resizeMode="contain"
            />
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color={textColor}>
                    Welcome
                </Heading>
                <Heading mt="1" color={textColor} fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>
                <VStack space={3} mt="5" flexDirection={flexDir}>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input value={email} onChangeText={setEmail} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" value={password} onChangeText={setPassword} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input type="password" value={confirmPassword} onChangeText={setConfirmPassword} />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={handleRegister}>
                        Register
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" ccolor={textColor}>
                            Already have an account? 
                            <Button variant="link" colorScheme="indigo" onPress={() => navigation.navigate('Login')}>
                                Login
                            </Button>
                        </Text>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default RegisterScreen;*/

