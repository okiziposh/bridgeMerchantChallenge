import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Positioning the search bar
    top: -551,            // From the Figma design
    left: -215,           // From the Figma design
    width: 430,           // Width from the Figma design
    height: 1052,         // Height from the Figma design
    backgroundColor: '#fff', // Add a white background
    borderRadius: 10,     // Optional: Adjust for rounded corners
    shadowColor: '#000',  // Add a shadow for better appearance
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,         // Shadow for Android
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default SearchBar;

