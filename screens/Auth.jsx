import { View, Text, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext, useState} from 'react';
import UserCtx from '../userContext';
import { getAuth } from 'firebase/auth';
import { styles } from '../styles/styles';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { Task } from './Task';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const auth = getAuth() 

const Auth = () => {
    const { user, setUser } = useContext(UserCtx)
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
      setTaskItems([...taskItems, task])
      setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
}

    const logout = () => {
        auth.signOut()
        .then(() => {
            setUser({email: ''})
            deleteUserFromAsyncStorage('email')
        })
        .catch(err => console.log(err))   
    }

    const deleteUserFromAsyncStorage = async(key) =>{
        try{
            await AsyncStorage.removeItem(key)
        }catch (error){
            console.log(err);

        }

    }
  return (
    <View style={styles.containerTask}>
    <ScrollView style={styles.tasksWrap}>
        <View style={styles.items}>
            {
                taskItems.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                Alert.alert(
                                    "¡Atencion!",
                                    "¿Eliminar el recordatorio?",
                                    [
                                        {
                                            text: "No",
                                        },
                                        { text: "Si", onPress: () => completeTask(index) }
                                    ]
                                )
                            }}
                        >
                            <Task text={item} />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    </ScrollView>
    <View style={styles.WTaskWrap}>
        <TextInput
            style={styles.inputTa}
            placeholder={'Recordatorio'}
            value={task}
            onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
            onPress={() => {
                Alert.alert(
                    "¡Atencion!",
                    "¿Eliminar el recordatorio?",
                    [
                        {
                            text: "Si",
                        },
                        { text: "NO", onPress: () => handleAddTask() }
                    ]
                )
            }}
        >
            <View>
            <TouchableOpacity
            onPress={() => {
                Alert.alert(
                    "¡Atencion!",
                    "¿Agregar Recordatorio?",
                    [
                        {
                            text: "No",
                        },
                        { text: "Si", onPress: () => handleAddTask() }
                    ]
                )
            }}
        >
            <View>
            <Entypo name="add-to-list" size={50} color="black" />
            </View>
        </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>
    <View style={styles.inicio}>
        <TouchableOpacity
            onPress={logout}
        >
            <Entypo name="home" size={50} color="black"/>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default Auth