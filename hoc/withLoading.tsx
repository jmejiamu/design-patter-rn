import React from "react";

import { ActivityIndicator, StyleSheet, View } from "react-native";

export const withLoading = <T,>(WrappedComponent: React.ComponentType<T>) => {
  const WithLoadingComponent = (props: T & { isLoading: boolean }) => {
    if (props.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return <WrappedComponent {...props} />;
  };
  return WithLoadingComponent;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
