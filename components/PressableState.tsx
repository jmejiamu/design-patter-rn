import React from "react";
import { Pressable, StyleSheet } from "react-native";

interface PressableStateProps {
  children: (isPressed: boolean) => React.ReactNode;
}
const PressableState = ({ children }: PressableStateProps) => {
  const [pressed, setPressed] = React.useState(false);
  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      {children(pressed)}
    </Pressable>
  );
};

export default PressableState;

const styles = StyleSheet.create({});
