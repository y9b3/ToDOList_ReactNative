import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";
import check from "../../assets/check.png";

export function CardToDo({ todo }) {
  return (
    <>
      <TouchableOpacity style={s.card}>
        <Text
          style={[
            s.txt,
            todo.isCompleted && { textDecorationLine: "line-through" },
          ]}
        >
          {todo.title}
        </Text>
        {todo.isCompleted && <Image style={s.img} source={check}></Image>}
      </TouchableOpacity>
    </>
  );
}
