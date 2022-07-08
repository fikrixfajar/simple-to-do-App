import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task  from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
     
    {/* Today's Task*/}
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.items}>
        {/* This is the task will go */}
       <Task text={"Task Pertama Bray"} />
       <Task text={"Ini Coba task kedua"} />
       <Task text={"Mengerjakan skripsi"} />
      </View>

    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {}
});
