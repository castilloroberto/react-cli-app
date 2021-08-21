
 import React, { useState } from 'react';
 import {
   Button,
   StyleSheet,
   Text,
   TextInput,
   View,
 } from 'react-native';

import * as SecureStore from 'expo-secure-store';


async function save(key:string, value:string) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key:string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    // alert("🔐 Here's your value 🔐 \n" + result);
    return JSON.parse(result)
  } else {
    // alert('No values stored under that key.');
    return {age:0,name:'vacio'}
  }
}

interface Person{
  name:string
  age:number
}



 const App = () => {


  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)





   return (
      <View style={styles.body}>
        <Text>Nombre</Text>
        <TextInput value={name}/>
        <Text>edad</Text>
        <TextInput value={age.toString()} onChangeText={(t)=> setAge(Number(t))} />
        <Button title="Ingresar" onPress={()=>''}/>
        
        <Text>Nombre</Text>
        <Text>edad</Text>
        <Button title="Buscar" onPress={()=>''}/>

      </View>
   );
 };

 const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
 });

 export default App;
