import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: 'center', paddingTop: 10, fontSize: 50, color: "#fff"}}>Prem is gay or not</Text>
      <View style={styles.yesnobutton}>
        <Button  title='Yes' color="#d4f9fc" onPress={() => {
          alert("You are right")
        }}/>
        <Button title='No' color="#d4f9fc" onPress={() => {
          alert("You are wrong")
        }}/>
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
  yesnobutton : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 100
  }
});
