// src/components/Loader.js
import React, { useRef, useEffect } from "react";
import { Animated, ActivityIndicator } from "react-native";

export default function Loader() {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fade, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(fade, { toValue: 0, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fade }}>
      <ActivityIndicator size="large" />
    </Animated.View>
  );
}
