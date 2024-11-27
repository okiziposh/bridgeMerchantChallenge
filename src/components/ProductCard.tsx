import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  title: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<Props> = ({ title, image, price }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>${price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#fff', borderRadius: 8, margin: 8 },
  image: { height: 100, width: '100%', borderRadius: 8 },
  title: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
  price: { fontSize: 14, color: '#555' },
});

export default ProductCard;
