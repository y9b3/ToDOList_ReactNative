import { Image, Text } from "react-native";
import { s } from "./Header.style";
import headerlogo from "../../assets/logo.png";

export function Header() {
  return (
    <>
      <Image style={s.img} source={headerlogo} resizeMode="contain"></Image>
      <Text style={s.subtittle}>Tu as problament un truc à faire</Text>
    </>
  );
}
