import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncImage from './components/AsyncImage';
import * as firebase from 'firebase';

    // Initialize Firebase
    
    
async function fb() {
  const storage = firebase.storage();
  const imageReference = storage.ref('Logo.png');
  const logo = await imageReference.getDownloadURL().then((url) => {
      return url;
  });
  return logo;
}

export default function App() {

const [logoURI, setlogoURI] = useState(null);

useEffect(async () => {
  setlogoURI(await fb());
},[]);
  
  return (
    <View style={styles.container1}>
      <View
        style={styles.container1}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>

        {logoURI && <Image source = {{uri: logoURI}} style = {styles.appLogo}/>}

          <TouchableOpacity onPress={() => alert()} style = {styles.startButton}>
            <Text style={styles.startText}>Start</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  appLogo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginTop: 100,
  },
  startButton: {
    justifyContent: 'center',
    backgroundColor: "#004D9C",
    borderRadius: 5,
    width: 125,
    height: 50
  },
  startText:{
    textAlign: 'center', 
    fontSize: 15, 
    color: '#FCB209'
  },
  title: {
    width: 350,
    resizeMode: 'contain',
    alignItems: 'center'
  }
});
