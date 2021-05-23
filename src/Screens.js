import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Image } from "react-native";
import { Card, Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from './Token';
import {login} from './Mock'
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";


// --  
export const LogInScreen = ({ navigation }) => {

  const [loginValue, setLoginValue] = useState('');
  const [pswdValue, setPswdValue] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const loginUser = async () => {
    setErrorMessage('');
    login(loginValue, pswdValue)
      .then(async (res) => {
        await setToken(res.auth_token);
        navigation.navigate('Profile');
      })
      .catch((err) => setErrorMessage(err.message));
  };



return (
    <ScreenContainer>
             <Text style={styles.logo}>News | LogIn</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
           value={loginValue}
           onChangeText={(data) => setLoginValue(data)}
            
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value={pswdValue}
           onChangeText={(data) => setPswdValue(data)}
            />
        </View>
        <View style={styles.fixToText}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity 
            style={styles.loginBtn}
            onPress={loginUser}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
     
    </ScreenContainer>
    )
};


  export const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

  export const HomeScreen = ({ navigation }) => (
    <ScreenContainer>
      <Text style={styles.logo}>WELCOME!</Text>
     
    </ScreenContainer>
  );

 

  export const NewsScreen = ({ navigation }) => {

    const array = [
      {
        key: 1,
        title: 'Diana interview: PM concerned after inquiry into BBC deceit',
        src: 'Around the BBC',
        img_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/15FE/production/_118603650_gettyimages-740435969.jpg',
        description: 'The BBC should take "every possible step" to ensure that nothing like its deceit of the Princess of Wales to secure an interview ever happens again, Prime Minister Boris Johnson has said.'
      },
      {
        key: 2,
        title: 'Lady Gaga had a \'psychotic break\' after sexual assault left her pregnant',
        src: 'Around the BBC',
        img_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1648F/production/_118597219_gaga.png',
        description: 'Lady Gaga has revealed she suffered a breakdown as a result of sexual assault that led to pregnancy.'
      },
      {
        key: 3,
        title: 'Africa\'s week in pictures: 14-20 May 2021',
        src: 'Around the BBC',
        img_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/4F9B/production/_118597302_68c88aa2-d90e-40d4-9e16-39af6d28bd6d.jpg',
        description: 'A selection of the week\'s best photos from across the continent and beyond'
      },
    
    ]

    const defaultImg =
    'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    const Newslist = () => {
      return array.map((list) => {
        return (
          <Card
          key={list.key}
          featuredTitle={list.title}
          featuredTitleStyle={styles.featuredTitleStyle}
          image={{
            uri: list.img_url || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {list.description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.noteStyle}>{list.src}</Text>
           
          </View>
        </Card>
        );
      });
    };

    return  <ScreenContainer>{Newslist()}</ScreenContainer>; 
};

  export const ProfileScreen = ({ navigation }) => (
    <ScreenContainer>
      <Text>Profile Page Screen</Text>
    
    </ScreenContainer>
  );





  const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      },
     
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#e6e6ea",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"#003f5c"
    },
    forgot:{
      color:"#003f5c",
      fontSize:11
    },
    
    loginText:{
      color:"white",
      fontSize:16
    },
    signupText:{
        color:"#fb5b5a",
        fontSize:11
      },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginBottom:10
      },
      featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
      },
      noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
      }
  });