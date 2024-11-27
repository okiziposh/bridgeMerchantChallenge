import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSearchHistory = async (keyword: string) => {
  const history = await getSearchHistory();
  if (!history.includes(keyword)) {
    const updatedHistory = [keyword, ...history].slice(0, 10); // Limit to 10 items
    await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  }
};

export const getSearchHistory = async (): Promise<string[]> => {
  const data = await AsyncStorage.getItem('searchHistory');
  return data ? JSON.parse(data) : [];
};
