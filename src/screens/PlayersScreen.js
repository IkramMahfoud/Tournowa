import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players Screen</Text>
      {/* Ajoutez d'autres composants ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PlayersScreen;
