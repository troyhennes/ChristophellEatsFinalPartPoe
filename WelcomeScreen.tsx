import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import ChristophellEatsLogo from '../assets/ChristophellEats.png';

type ScreenType = 'Welcome' | 'Home' | 'AddMenuItem' | 'MenuList' | 'Menu';

interface Props {
  navigate: (screen: ScreenType) => void;
}

const WelcomeScreen: React.FC<Props> = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Image source={ChristophellEatsLogo} style={styles.logo} />
      <Text style={styles.breadcrumb}>Home / Welcome</Text>
      <Text style={styles.welcomeText}>Welcome to Christophell Eats</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#E74C3C' }]}
          onPress={() => Alert.alert('Exit', 'Application closed!')}
        >
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: Platform.OS === 'web' ? 600 : '100%',
    margin: Platform.OS === 'web' ? 'auto' : 0,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 25,
  },
  breadcrumb: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 300,
  },
  button: {
    flex: 1,
    backgroundColor: '#2E86DE',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});