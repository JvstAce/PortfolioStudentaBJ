import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Portfolio Studenta</Text>

        <View style={styles.card}>
          <Image
            source={require('./assets/profile.png')}
            style={styles.image}
          />

          <Text style={styles.name}>Bartosz Jojko</Text>
          <Text style={styles.subtitle}>Informatyka, 3 rok</Text>

          <Text style={styles.sectionTitle}>O mnie</Text>
          <Text style={styles.description}>
            Jestem studentem informatyki i interesuję się tworzeniem aplikacji mobilnych
            oraz nowoczesnych interfejsów użytkownika. Rozwijam swoje umiejętności
            programistyczne, poznaję nowe technologie i chętnie realizuję projekty,
            które pozwalają mi zdobywać praktyczne doświadczenie.
          </Text>

          <Text style={styles.sectionTitle}>Umiejętności</Text>
          <Text style={styles.skill}>• JavaScript</Text>
          <Text style={styles.skill}>• React Native</Text>
          <Text style={styles.skill}>• Java</Text>
          <Text style={styles.skill}>• SQL</Text>
          <Text style={styles.skill}>• Git i GitHub</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Alert.alert(
                'Cześć!',
                'Dzięki za odwiedzenie mojego portfolio. To dopiero początek mojej drogi w programowaniu mobilnym.'
              )
            }
          >
            <Text style={styles.buttonText}>Sprawdź więcej</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#22d3ee',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#f8fafc',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#cbd5e1',
  },
  skill: {
    fontSize: 15,
    marginBottom: 4,
    color: '#cbd5e1',
  },
  button: {
    marginTop: 24,
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

export default App;