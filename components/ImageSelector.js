import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { COLORS } from '../constants';

const ImageSelector = props => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de uso de la cámara para usar esta app',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  //Tomar Foto
  const handlerTakeImage = async () => {

    //Pido permiso para tomar usar la cámara
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    //Si dió los permisos ejecutamos el método launchCameraAsync de ImagePicker, todo se guarda en const image
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8,
    });

    //seteamos la uri de la imagen, actualizando el estado para ejecutar un re-render y cargar la imagen tomada en la vista (!pickedUri ?): 
    setPickedUri(image.uri);

    //setemos la uri de la imagen también en el componente padre, ya que la necesita para cuando presionen el button guardar dirección y ejecutar el dispatch.
    props.onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri
         ? <Text>No hay imagen seleccionada...</Text>
         : <Image style={styles.image} source={{ uri: pickedUri }} />
        }
      </View>
      <Button
        title="Tomar Foto"
        color={COLORS.LIGTH_PINK}
        onPress={handlerTakeImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.BLUSH,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default ImageSelector;