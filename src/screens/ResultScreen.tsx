// src/screens/ResultScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useProducts } from '../hooks/useProducts';
import { ResultScreenRouteProp } from '../types';

interface Props {
  route: ResultScreenRouteProp;
}

const ResultScreen: React.FC<Props> = ({ route }) => {
  const { keyword } = route.params;
  const { products } = useProducts();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results for: {keyword}</Text>
      {products ? (
        products.map((product) => (
          <Text key={product.id} style={styles.product}>
            {product.title}
          </Text>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  product: { fontSize: 16, marginBottom: 10 },
});

export default ResultScreen;

