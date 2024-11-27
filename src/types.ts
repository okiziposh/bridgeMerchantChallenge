import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined; // Home has no params
  ResultScreen: { keyword: string }; // ResultScreen expects 'keyword'
  SearchScreen: undefined; // No parameters for SearchScreen
};




export type ResultScreenRouteProp = RouteProp<RootStackParamList, 'ResultScreen'>;

