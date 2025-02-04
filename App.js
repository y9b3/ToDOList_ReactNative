import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardToDo } from "./components/CardToDo/CardTodo";

const TODO_LIST = [
  { id: 1, title: "Jouer à R6", isCompleted: true },
  { id: 2, title: "Aller chez le garagiste", isCompleted: false },
  { id: 3, title: "Faire les courses", isCompleted: true },
  { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
  { id: 5, title: "Sortir le chien", isCompleted: true },
  { id: 6, title: "Aller chez le garagiste", isCompleted: false },
  { id: 7, title: "Faire les courses", isCompleted: true },
  { id: 8, title: "Appeler le vétérinaire", isCompleted: true },
];

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header></Header>
          </View>
          <View style={s.body}>
            <CardToDo todo={TODO_LIST[0]}></CardToDo>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>footer</Text>
      </View>
    </>
  );
}
