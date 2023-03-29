import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lista de materias</Text>
      <Text>Carrera 1</Text>
      <Text>-Materia 1</Text>
      <Text>-Materia 2</Text>
      <Text>-Materia 3</Text>
      <Text>-Materia 4</Text>
      <Text>-Materia 5</Text>
      <Text>-----------------------</Text>
      <Text>Carrera 2</Text>
      <Text>-Materia 1</Text>
      <Text>-Materia 2</Text>
      <Text>-Materia 3</Text>
      <Text>-Materia 4</Text>
      <Text>-Materia 5</Text>
      <StatusBar style="auto" />
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
});
