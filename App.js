import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Title, List, TextInput, Button  } from 'react-native-paper';

const { width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App() {
  const [expandedFirstCurrency, setexpandedFirstCurrency] = useState(false);
  const [expandedSecondCurrency, setexpandedSecondCurrency] = useState(false);
  const [text, setText] = useState("");
  return (
      <View style={styles.container}>
        <Title style={styles.title}>Conversor de moedas</Title>
        <List.Section title="Primeira moeda" style={styles.listCurrency}>
          <List.Accordion title="" expanded={expandedFirstCurrency} onPress={()=> setexpandedFirstCurrency(!expandedFirstCurrency)}>
            <List.Item title="Dólar"/>
            <List.Item title="Euro"/>
            <List.Item title="Real"/>
          </List.Accordion>
        </List.Section>

        <List.Section title="Segunda moeda" style={styles.listCurrency}>
          <List.Accordion title="" expanded={expandedSecondCurrency} onPress={()=> setexpandedSecondCurrency(!expandedSecondCurrency)}>
            <List.Item title="Dólar" sel/>
            <List.Item title="Euro"/>
            <List.Item title="Real"/>
          </List.Accordion>
        </List.Section>
        <TextInput
          label="Valor"
          value={text}
          mode='outlined'
          style={styles.input}
          onChangeText={text => setText(text)}
        />
        <Button mode='contained' style={styles.buttonConverter}>Converter</Button>
        <TextInput
          label="Resultado"
          value={text}
          disabled='true'
          style={styles.input}
          onChangeText={text => setText(text)}
        />
        <StatusBar style="auto" backgroundColor='#fff' />
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
  title:{
    color: '#7DBA84'
  },
  listCurrency:{
    width: '90%',
  },
  input:{
    marginTop: 15,
    height: 80,
    width: '90%'
  },
  buttonConverter:{
    marginTop: 15,

  }
});
