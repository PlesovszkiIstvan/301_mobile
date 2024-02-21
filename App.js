import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View,TextInput } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [height,setHeight] = useState(0)
  const [radius,setRadius] = useState(0)
  const [volume,setVolume] = useState(0)

  function calc(){
    return 1/3*radius*height 
  }

  function setVol(){
    let res = calc()
    setVolume(res)
  }

  return (
    <View style={styles.container}>
      <Text>Terkup szamitas :3</Text>
      <View style={styles.inputStyles}>
        <Text>Magasság:</Text>
        <TextInput 
        style={styles.heightInput}
        onChangeText={height => {setHeight(height)}}
        ></TextInput>
        <Text>Sugár:</Text>
        <TextInput 
        style={styles.radiusInput}
        onChangeText={radius => {setRadius(radius)}}
        ></TextInput>
      </View>
      <Pressable style={styles.pressable} onPress={setVol}>
        <Text>Számít</Text>
      </Pressable>
      <TextInput style={styles.eredmeny} value={volume}></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heightInput: {
    backgroundColor: '#fff'
  },
  radiusInput: {
    backgroundColor: '#fff'
  },

});

