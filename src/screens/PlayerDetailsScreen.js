import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayerDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player Details Screen</Text>
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

export default PlayerDetailsScreen;
