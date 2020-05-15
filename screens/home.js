import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity,Modal,TextInput } from 'react-native';

export default function Home({navigation}) {
    const [name, setName] = useState('');
    const [place,setPlace] = useState('');
    const [description,setDescription] = useState('');
    const [modalVisible,setModalVisible] = useState(false);
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: "Berbuka puasa",
            place: "Restoran",
            description: "Berbuka with family"
        },
        {
            id: 2,
            name: "Revise missing class",
            place: "Home",
            description: "Need to do the To do Exercise"
        },
        {
            id: 3,
            name: "Prepare for Raya",
            place: "GIant supermarket",
            description: "Buy baju raya"
        }
    ]);
    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.container}>
                    
                        <TextInput placeholder="Enter Item Name" style={styles.inputStyle} onChangeText={(text)=>setName(text)}/>
                         <TextInput placeholder="Enter Item Description" style={styles.inputStyle} onChangeText={(text)=>setDescription(text)}/>
                         <TextInput placeholder="Enter Item Place" style={styles.inputStyle} onChangeText={(text)=>setPlace(text)}/>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => {
                                let newItem = {name:name,description:description,place:place}
                                setTodos((prevTodos)=>{
                                    return [
                                        ...prevTodos, newItem
                                    ]
                                })
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Save</Text>
                            
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.cancelStyle}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                            
                        </TouchableOpacity>
                    
                </View>
            </Modal>
            <FlatList
                data={todos}
                renderItem={({ item }) => 
                <TouchableOpacity onPress={()=> navigation.push('Detail')}>
                <View style={styles.item}><Text>{item.name}</Text></View>
                </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <View style={styles.buttonStyle}><Text style={styles.textStyle}>Add new Item</Text></View>
            </TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: 'pink',
        padding: 30,
        marginVertical: 20,
        width: 300
    },
    buttonStyle: {
        backgroundColor: 'blue',
        padding: 20,
        width: 300,
    },
    cancelStyle: {
        backgroundColor: 'red',
        padding: 20,
        width: 300,
        marginVertical:10
    },
    textStyle: {
        color: 'white',
        textAlign: 'center'
    },
    inputStyle:{
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginVertical:20,
        width:300
    }
});
