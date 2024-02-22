import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const PlayerItem = ({ player }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{player.name}</Text>
      {/* Affichez d'autres informations du joueur ici */}
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

export { PlayerItem };