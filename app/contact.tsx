import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function ContactScreen() {
  const email = 'bartosz.jojko@gmail.com';
  const githubUrl = 'https://github.com/JvstAce';
  const linkedinUrl = 'https://www.linkedin.com/in/bartosz-jojko-2463563a9/';
  const location = 'Knurów / Akademia Śląska';

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleGithubPress = () => {
    Linking.openURL(githubUrl);
  };

  const handleLinkedinPress = () => {
    Linking.openURL(linkedinUrl);
  };

  const handleCopyLinkedin = async () => {
    await Clipboard.setStringAsync(linkedinUrl);
    Alert.alert('Skopiowano', 'Link do LinkedIna został skopiowany.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Kontakt</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>E-mail</Text>
          <Text style={styles.linkText}>{email}</Text>

          <Text style={styles.sectionTitle}>GitHub</Text>
          <Text style={styles.linkText}>{githubUrl}</Text>

          <Text style={styles.sectionTitle}>LinkedIn</Text>
          <Text style={styles.linkText} selectable>
            {linkedinUrl}
          </Text>

          <Text style={styles.sectionTitle}>Lokalizacja</Text>
          <Text style={styles.infoText}>{location}</Text>

          <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
            <Text style={styles.buttonText}>Wyślij e-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleGithubPress}>
            <Text style={styles.buttonText}>Otwórz GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLinkedinPress}>
            <Text style={styles.buttonText}>Otwórz LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleCopyLinkedin}>
            <Text style={styles.buttonText}>Kopiuj link do LinkedIna</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#e2e8f0',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#f8fafc',
  },
  linkText: {
    fontSize: 15,
    color: '#22d3ee', // Świetnie nadaje się na klikalne linki mailowe/GitHub
    marginBottom: 16,
  },
  infoText: {
    fontSize: 15,
    color: '#cbd5e1',
    marginBottom: 16,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#14b8a6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '600',
  },
});