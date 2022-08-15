import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

type GradientViewProps = {
  children: React.ReactNode;
};

export function GradientView({ children }: GradientViewProps) {
  return (
    <LinearGradient
      style={styles.containerView}
      colors={["#141414", "#050505"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      {children}
    </LinearGradient>
  );
}
