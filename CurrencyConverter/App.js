import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { useState } from 'react';
export default function App() {
  const[lkr,setlkr]=useState('');
  const[usd,setusd]=useState('');

  const converttousd=()=>{
    const rate=0.003;
    const converte=(parseFloat(lkr)*rate).toFixed(2);
    setusd(converte);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LKR to USD Converter</Text>
      <TextInput style={styles.input}
      placeholder="Enter amount in LKR"
      mode="outlined"
      value={lkr}
      onChangeText={setlkr}
    />

    <Button title='convert' onPress={converttousd} />
    {usd ? <Text style={styles.result}>USD: {usd}$</Text> : null}
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

  },
  result:{
    fontSize:25,
    color:'balck',
    marginTop:20
  }

});
