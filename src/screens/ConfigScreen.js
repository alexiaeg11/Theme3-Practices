import React from 'react';
import { AlertDialog, Menu, Popover, Tooltip, Modal, Box, VStack, Text, Pressable, HStack, Icon, Divider, Center, useColorModeValue, Switch, Button, Badge, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const ConfigurationScreen = () => {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false); 
    const [isOpNotfications, setIsOpNotifications] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [isDeleteAlertifEnabled, setDeleteAlertEnabled] = React.useState(false);

    const [isMenuModalOpen, setIsMenuModalOpen] = React.useState(false);
    const [activeModal, setActiveModal] = React.useState(null);

    const openModal = (modalName) => {
        setIsMenuModalOpen(false);
        setActiveModal(modalName);
    };
    const closeModal = () => setActiveModal(null);

    const returnToMenu = () => {
        setActiveModal(null);
        setIsMenuModalOpen(true);
    };

    const toggleSwitch = () => {
        
        setIsNotificationsEnabled(prev => !prev);
        
        if (!isNotificationsEnabled) {
            setIsOpNotifications(true);
        }
    };

    const onCloseNotif = () => setIsOpNotifications(false)
    const cancelRef = React.useRef(null);
    const onCloseDeleteAlert = () => setDeleteAlertEnabled(false);

    const bgColor = useColorModeValue('coolGray.100', 'coolGray.800');
    const textColor = useColorModeValue('light.text.900', 'dark.text.100');
    const iconColor = useColorModeValue('dar.icon.200', 'white');
    const boxColor = useColorModeValue('white', 'coolGray.700');
    const borderColor = useColorModeValue('muted.300', 'darkBlue.800');
    return (
        <Center flex={1} bg={bgColor}>
            <Box
                bg={boxColor}
                px={4}
                py={6}
                safeArea w="80%"
                maxW={400}
                borderLeftWidth={1}
                borderRightWidth={1}
                borderLeftColor={borderColor}
                borderRightColor={borderColor}
                borderRadius={10}
                Boxshadow={3}
            >
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Configuración
                </Text>
                <VStack space={4}>
                    {/* Notificaciones */}
                    <HStack alignItems="center"
                        justifyContent="space-between"
                    >
                        <HStack alignItems="center"
                            space={2}
                        >
                            <Text fontSize="md">Notificaciones</Text>
                            <Switch
                                onValueChange={toggleSwitch}  
                                isChecked={isNotificationsEnabled}
                            />
                        </HStack>
                        {/* Aquí irá el Popover */}
                        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpNotfications} onClose={onCloseNotif}>
                            <AlertDialog.Content>
                                <AlertDialog.CloseButton />
                                <AlertDialog.Header>Notificaciones</AlertDialog.Header>
                                <AlertDialog.Body>
                                    Se enviarán notificaciones a partir de ahora.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                    <Button.Group space={2}>
                                        <Button colorScheme="success" onPress={onCloseNotif}>
                                            Aceptar
                                        </Button>
                                    </Button.Group>
                                </AlertDialog.Footer>
                            </AlertDialog.Content>
                        </AlertDialog>
                        <Popover trigger={triggerProps => {
                            return <Pressable {...triggerProps}>
                                <Icon as={MaterialIcons} name="info-outline" size="md" color={iconColor} />
                            </Pressable>;
                        }}>
                            <Popover.Content accessibilityLabel="Información" w="130"
                            >
                                <Popover.Arrow />
                                <Popover.Header
                                >Información</Popover.Header>
                                <Popover.Body>
                                    Activa las notificaciones
                                </Popover.Body>
                            </Popover.Content>
                        </Popover>
                    </HStack>
                    <Divider />
                    {/* Opciones avanzadas */}
                    <HStack justifyContent="space-between" alignItems="center">
                        <Text fontSize="md">Opciones avanzadas</Text>
                        <Menu shadow={2} w="190" trigger={triggerProps => {
                            return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                <Icon as={MaterialIcons} name="more-vert" size="md" color={iconColor} />
                            </Pressable>;
                        }}>
                            <Menu.Item>Historial</Menu.Item>
                            <Menu.Item>Ir a perfil</Menu.Item>
                            <Menu.Item>Opcion algo</Menu.Item>
                            <Menu.Item>Restaurar configuraciones</Menu.Item>
                            <Menu.Item>No se</Menu.Item>
                            <Menu.Item isDisabled>Item Prieto</Menu.Item>
                        </Menu>
                    </HStack>
                    <Divider />
                    {/* Información general */}
                    <HStack justifyContent="space-between" alignItems="center">
                        <Pressable
                            onPress={() => setShowModal(true)}>
                            <Text fontSize="md">Información general</Text>
                        </Pressable>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Content maxWidth="400px">
                                <Modal.CloseButton />
                                <Modal.Header>Información general</Modal.Header>
                                <Modal.Body>
                                    <VStack space={2}>
                                        <Text>Esta pantalla fue creada por el equipo 4:</Text>
                                        <Text>Jose Sael Lopez Carrillo</Text>
                                        <Text>Alan Eduardo Guevara Hernandez</Text>
                                        <Text>Liliana Alejandra Bonilla Salas</Text>
                                        <Text>Michelle Guadalupe Villagomez Lopez</Text>
                                        <Text>Cesar de Jesus Alvarez Ortiz</Text>
                                    </VStack>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                            setShowModal(false);
                                        }}>
                                            Cerrar
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>

                        <Tooltip label="Presiona para ver informacion interesante" openDelay={5}
                            bg={"blue.600"} color={textColor}
                            placement='left'
                        >
                            <Pressable>
                                <Icon as={MaterialIcons} name="help-outline" size="md" color={iconColor} />
                            </Pressable>
                        </Tooltip>
                    </HStack>
                    <Divider />

                    {/*para segundo dia*/}
                    {/* Detalles adicionales WIP */}
                    <Pressable onPress={() => setIsMenuModalOpen(true)}>
                        <Text fontSize="md" color="blue.500">
                            Detalles adicionales
                        </Text>
                    </Pressable>
                    <Modal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)}>
                        <Modal.Content>
                            <Modal.CloseButton />
                            <Modal.Header>Detalles adicionales</Modal.Header>
                            <Modal.Body>
                                <VStack space={4}>
                                    <Button variant="ghost" onPress={() => openModal("terms")}>Términos y condiciones</Button>
                                    <Button variant="ghost" onPress={() => openModal("privacy")}>Política de privacidad</Button>
                                    <Button variant="ghost" onPress={() => openModal("license")}>Licencia</Button>
                                </VStack>
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>
                    {/* Aquí irá el Modal */}
                    
                    {activeModal === "terms" && (
                        <Modal isOpen={true} onClose={closeModal}>
                            <Modal.Content>
                                <Modal.CloseButton />
                                <Modal.Header>Términos y condiciones</Modal.Header>
                                <Modal.Body>
                                    <ScrollView>
                                        <Text>Contenido de los términos y condiciones...</Text>
                                    </ScrollView>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="outline" onPress={returnToMenu}>
                                            Regresar al menú
                                        </Button>
                                        <Button onPress={closeModal}>
                                            Cerrar
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    )}

                    {activeModal === "privacy" && (
                        <Modal isOpen={true} onClose={closeModal}>
                            <Modal.Content>
                                <Modal.CloseButton />
                                <Modal.Header>Política de privacidad</Modal.Header>
                                <Modal.Body>
                                    <ScrollView>
                                        <Text>Contenido de la política de privacidad...</Text>
                                    </ScrollView>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="outline" onPress={returnToMenu}>
                                            Regresar al menú
                                        </Button>
                                        <Button onPress={closeModal}>
                                            Cerrar
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    )}

                    {activeModal === "license" && (
                        <Modal isOpen={true} onClose={closeModal}>
                            <Modal.Content>
                                <Modal.CloseButton />
                                <Modal.Header>Licencia</Modal.Header>
                                <Modal.Body>
                                    <ScrollView>
                                        <Text>Contenido de la licencia...</Text>
                                    </ScrollView>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="outline" onPress={returnToMenu}>
                                            Regresar al menú
                                        </Button>
                                        <Button onPress={closeModal}>Cerrar</Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    )}

                    <Pressable
                        bg="danger.600"
                        rounded="lg"
                        _pressed={{
                            bg: "danger.700",
                            opacity: 0.8
                        }}
                        alignSelf={"center"}
                        px={4}
                        py={1}
                        marginTop={10}
                        onPress={() => setDeleteAlertEnabled(!isDeleteAlertifEnabled)}
                    >
                        <Text fontSize="md" color="white">
                            Eliminar cuenta
                        </Text>
                    </Pressable>
                    <AlertDialog leastDestructiveRef={cancelRef} isOpen={isDeleteAlertifEnabled} onClose={onCloseDeleteAlert}>
                        <AlertDialog.Content>
                            <AlertDialog.CloseButton />
                            <AlertDialog.Header>Eliminar cuenta</AlertDialog.Header>
                            <AlertDialog.Body>
                                ¿Estás seguro de que deseas eliminar tu cuenta?
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button.Group space={2}>
                                    <Button variant="unstyled" colorScheme="coolGray" onPress={onCloseDeleteAlert} ref={cancelRef}>
                                        Cancelar
                                    </Button>
                                    <Button colorScheme="danger" onPress={onCloseDeleteAlert}>
                                        Eliminar
                                    </Button>
                                </Button.Group>
                            </AlertDialog.Footer>
                        </AlertDialog.Content>
                    </AlertDialog>


                </VStack>
            </Box>
        </Center>
    );
};

export default ConfigurationScreen;
