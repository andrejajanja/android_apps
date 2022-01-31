import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, FlatList, Alert, ScrollView} from "react-native";
import { Picker } from "@react-native-picker/picker";



const Aplikacija = () =>{
  const [prvi, setPrvi] = useState('');
  const [drugi, setDrugi] = useState('');
  const [lista,setLista] = useState([]);
  const [operacija, setOp] = useState('+');
  const [stanje, setStanje] = useState(false);

  return (
    <View style = {stil.sve}>
      <View style = {stil.header}>
        <Text style = {stil.texth}>Aplikacija - Andreja Jankovic IV8</Text>
      </View>
      <View style = {stil.body}>
        <Text style = {stil.textb}>Prvi sabirak:</Text>
        <TextInput 
        style = {stil.txtin}
        placeholder="Unesite ovde"
        keyboardType="numeric"
        placeholderTextColor={"black"}
        onChangeText={(val)=> setPrvi(val)}/>

        <Text style = {stil.textb}>Drugi sabirak:</Text>
        <TextInput 
        style = {stil.txtin}
        placeholder="Unesite ovde"
        keyboardType="numeric"
        placeholderTextColor={"black"}
        onChangeText={(val)=> setDrugi(val)}/>

        <Picker
        style={stil.pick}
        selectedValue={operacija}
        mode = "dropdown"
        onValueChange={(value,index) =>setOp(value)}>
          <Picker.item label = "+" value = "+"/>
          <Picker.item label = "-" value = "-"/>
          <Picker.item label = "*" value = "*"/>
          <Picker.item label = "/" value = "/"/>
        </Picker>

        <Button color = "#00aa00" title="Operacija" onPress={() => {
           var rezulatat = 0;
            if(prvi==""){
              setPrvi(0);
            }

            if(drugi==""){
              setDrugi(0);
            }

           switch(operacija){
             case "+":
               rezulatat = Number(prvi) + Number(drugi);
               break;
             case "-":
               rezulatat = prvi - drugi;
               break;
             case "*":
               rezulatat = prvi*drugi;
               break;
             case "/":
               if(drugi == 0)
               {
                 rezulatat = "GRESKA";
               }
               else
               {
                 rezulatat = prvi/drugi;
               }
       
               break;
             default:
               break
           }
       
           var rez_string = prvi.toString() + ' ' + operacija + ' ' + drugi + ' = ' +rezulatat;
           lista.push({key: lista.length,text: rez_string});
           setStanje(!stanje)
        }}/>
        <Text style = {stil.textb}>Status:</Text>
        <FlatList
          data={lista}
          extraData={stanje}
          renderItem={({item})=>(<View><Text style={stil.eliste}>{item.text}</Text></View>)}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  sve:{
    flex: 1
  },
  header:{
    flex: 1,
    backgroundColor: "#61ff71",
    alignItems: "center",
    justifyContent: 'center',
  },
  body:{
    flex: 12,
    backgroundColor: "#2ff743"

  },
  texth:{
    color:"white",
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius:15,
    backgroundColor:"#00aa00",
    padding: 5,
  },
  textb:{
    color:"white",
    fontSize: 20,
    backgroundColor:"#00aa00",
    margin: 10,
    alignSelf: "flex-start",
    padding: 7,
    borderColor: "black",
    borderWidth: 2,
    borderRadius:15,
  },
  txtin:{
    borderWidth:5,
    borderRadius: 10,
    borderColor: "#00ab1c",
    color: "black",
    backgroundColor: "white",
    fontSize:18,
    paddingHorizontal:10,
    margin: 3, 
  },

  dugme:{
    backgroundColor: "#00aa00",
    color:"#00aa00",
  },
  eliste:{
    color: "white",
    backgroundColor:"#00aa00",
    fontSize: 20,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 15,
    marginVertical: 3,
    padding: 15
  },
  pick:{
    borderWidth:2,
    borderColor: "black",
    backgroundColor: "#22aa22",
    margin: 10
  },
})

export default Aplikacija;
