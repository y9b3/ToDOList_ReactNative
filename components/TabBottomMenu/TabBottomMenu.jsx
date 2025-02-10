import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMenu.style";

export function TabBottomMenu() {
  return (
    <View style={s.footer}>
      <TouchableOpacity>
        <Text style={s.text}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={s.text}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={s.text}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
