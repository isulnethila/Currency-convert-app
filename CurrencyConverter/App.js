import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { useState } from 'react';
export default function App() {
  const[lkr,setlkr]=useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LKR to USD Converter</Text>
      <TextInput style={styles.input}
      placeholder="Enter amount in LKR"
      mode="outlined"
      value={lkr}
      onChangeText={setlkr}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input:{
    width:'80%',
    height:40,
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginBottom:20,

  }
});
