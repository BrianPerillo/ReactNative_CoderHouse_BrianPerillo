import {Button,FlatList,Modal,StyleSheet,Text,TextInput,View,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

const ItemList = () => {

  const [inputText, setInputText] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (text) => setInputText(text);
  const handleAddItem = () => {
    setItemList([
      ...itemList,
      {
        id: Math.random().toString(),
        value: inputText,
      },
    ]);
    setInputText('');
  }

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  }

  const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }

  return (

      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Agregar item"
            style={styles.input}
            onChangeText={handleChangeText}
            value={inputText}
          />
          <TouchableOpacity
            activeOpacity={.8}
            onPress={handleAddItem}
            style={styles.addButton}
          >
            <Text style={styles.addButtonContent}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatList}>
            <FlatList
            data={itemList}
            renderItem={data => {
                return (
                <View style={styles.item}>
                    <Text>{data.item.value}</Text>
                    <Button
                    title="DELETE"
                    color="#dc3545"
                    onPress={() => handleModal(data.item.id)}
                    />
                </View>
                );
            }}
            keyExtractor={item => item.id}
            />
        </View>
        {/*El Modal sería una ventana que se genera que en este caso contiene un botón para confirmar el delete - Para saber cuando debe mostrarse usa el estado modalVisible*/}
        <Modal animationType="slide" visible={modalVisible} transparent>  
        {/*Las Views serían una especie de divs para generar la estructura/maqueta de como se verá el msg del modal agregandole estilos*/}
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, styles.shadow]}>
              <Text style={styles.modalMessage}>¿Está seguro que desea eliminar?</Text>
              <Text style={styles.modalTitle}>{itemSelected.value}</Text>
              <View>
                <Button
                  onPress={handleConfirmDelete}
                  color="#28a745"
                  title="CONFIRMAR"
                />
              </View>
            </View>
          </View>
        </Modal>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  addButton:{
    padding: 9,
    height: 45,
    width: 45,
    borderRadius:50,
    backgroundColor:'orange',
    alignItems: 'center',
  },
  addButtonContent:{
      color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flexGrow: 0.8,
    borderBottomColor: '#969A97',
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    marginTop: 20,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#D6D1CD',
    borderBottomWidth: 1,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMessage: {
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  flatList:{
    marginTop:30,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flatList:{
    marginTop:30,
  }
});

export default ItemList;
