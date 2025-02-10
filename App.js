import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardToDo } from "./components/CardToDo/CardTodo";
import { useState } from "react";

export default function App() {
  const [todolist, seTodoList] = useState([
    { id: 1, title: "Jouer à R6", isCompleted: true },
    { id: 2, title: "Aller chez le garagiste", isCompleted: false },
    { id: 3, title: "Faire les courses", isCompleted: true },
    { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
  ]);

  function ubdateToDo(todo) {
    const ubdateToDo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const indexToubdate = todolist.findIndex(
      (todo) => todo.id === ubdateToDo.id
    );

    const ubdatedToDolist = [...todolist];
    ubdatedToDolist[indexToubdate] = ubdateToDo;
    seTodoList(ubdatedToDolist);
  }

  function renderToDoList() {
    return todolist.map((todo) => (
      <View style={s.cardItem} key={todo.id}>
        <CardToDo onPress={ubdateToDo} todo={todo}></CardToDo>
      </View>
    ));
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header></Header>
          </View>
          <View style={s.body}>
            <ScrollView>{renderToDoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>footer</Text>
      </View>
    </>
  );
}
