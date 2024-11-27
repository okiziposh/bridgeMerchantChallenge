import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useProducts } from '../hooks/useProducts';
import { getSearchHistory, saveSearchHistory } from '../utils/storage';
import CategoryCard from '../components/CategoryCard';
import SearchBar from '../components/SearchBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // Adjust path if needed

// Define props type
type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'SearchScreen'>;

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const { categories } = useProducts();
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const fetchHistory = async () => setHistory(await getSearchHistory());
    fetchHistory();
  }, []);

  const handleSearch = (keyword: string) => {
    saveSearchHistory(keyword);
    navigation.navigate('ResultScreen', { keyword }); // Navigate to ResultScreen
  };

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryCard category={item} />}
      />
      <Text>Search History</Text>
      {history.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default SearchScreen;

