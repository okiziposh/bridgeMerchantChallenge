import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  category: string;
}

const CategoryCard: React.FC<Props> = ({ category }) => (
  <View style={styles.card}>
    <Text style={styles.text}>{category}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, margin: 8 },
  text: { fontSize: 16, fontWeight: 'bold' },
});

export default CategoryCard;
