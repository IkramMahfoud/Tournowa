import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MatchItem = ({ match }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{match.title}</Text>
      {/* Affichez d'autres informations du match ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { MatchItem };