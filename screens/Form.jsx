import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { View, Text, TextInput, Pressable, TouchableHighlight, ActivityIndicator, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { styles } from '../styles/styles'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Formik } from 'formik';
import { loginValidationSchema } from '../validation/validationShema';
import UserCtx from "../userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

//todo: listen for auth state change

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export default function Form() {
    const navigation = useNavigation()
    const {user, setUser} = useContext(UserCtx)
    const [isVisible,setIsVisible] = useState(false) 
    const [isNewUser,setIsNewUser] = useState(false)
    const [initializing, setInitializing] = useState(true)

    const stateChange = (user) =>{
      setUser((prev) => prev = user)
      if(initializing) setInitializing(prev => prev = false)
    }
    useEffect(() =>{
      const subscriber = auth.onAuthStateChanged(stateChange)
      return subscriber
    }, [])

    const handleRegister = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredentials =>{
          console.log(userCredentials)
          setUser(prev => ({...prev, email: values.email}))
          storeUser(values.email)
        })
        .catch(err => console.log(err))
    }

    const handleLogin = (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredentials => {
        console.log(userCredentials);
        setUser(prev => ({...prev, email: values.email}))
        storeUser(values.email)
      })
      .catch(err => console.log(err))
  }

    const storeUser = async (user) =>{
      try{
        const userEmail = JSON.stringify(user)
        AsyncStorage.setItem('email', userEmail)
      }catch (err){
        console.log(err);
      }

    }

    if(initializing) return <ActivityIndicator/>
  return (
    <Formik 
    initialValues={{email: '', password: ''}}
    validationSchema={loginValidationSchema}
    onSubmit={values => {isNewUser ? handleRegister(values) : handleLogin(values) }}
    >
        {({
            handleChange, handleBlur, handleSubmit, values, errors, touched
        }) =>(


    <View style={[styles.container, styles.gray]}>
    {errors.email && touched.email && (<Text style={styles.error}>{errors.email}</Text>)}
    <View style={styles.inputWithIcon}>
        
      <TextInput style={styles.input}
      placeholder='email@email.com'
      placeholderTextColor={'black'}
      onChangeText={handleChange('email')}
      name="email"
      value={values.email}
      textAlignVertical='bottom'
      />
      <MaterialIcons name="email" size={24} color="black" />
      </View>
      {errors.password && touched.password && (<Text style={styles.error}>{errors.password}</Text>)}
      <View style={styles.inputWithIcon}>
      <TextInput style={styles.input}
      placeholder='contraseña'
      placeholderTextColor={'black'}
      onChangeText={handleChange('password')}
      name='password'
      value={values.password}
      textAlignVertical='bottom'
      secureTextEntry={isVisible}

      />
      <Pressable onPress={()=>setIsVisible(!isVisible)}>
      <Entypo name={isVisible ? "eye-with-line" : "eye"  }size={24} color="black" />
      </Pressable>
      
      </View> 
      <TouchableHighlight style={isNewUser? [styles.button] : [styles.button, styles.bgMistyRose]} onPress={handleSubmit}>
        {isNewUser?
        <Text style={[styles.buttonText]}>Crear Cuenta</Text>
        :
        <Text style={[styles.buttonText]}>Ingresar</Text>
        }
      </TouchableHighlight>   

      <TouchableHighlight onPress={ () => setIsNewUser ((prev => !prev))
        }style={styles.button} >
        {isNewUser ?
        <Text style={styles.buttonText}> Ya esta regristado</Text>
        :
        <Text style={styles.buttonText}>Quiero crear una cuenta</Text>
        }
      </TouchableHighlight>
      <TouchableHighlight onPress={()=> navigation.navigate("ForgotPassword")} style={styles.button}>
        <Text style={styles.buttonText}>Restablecer Contraseña</Text>  
      </TouchableHighlight>

    </View>
        )}
    </Formik>
  )
}