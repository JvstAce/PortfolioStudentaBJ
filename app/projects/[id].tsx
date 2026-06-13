import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
// 1. Import hooka z kontekstu zamiast lokalnej tablicy danych
import { useProjects } from '../../context/ProjectsContext';

export default function ProjectDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // 1. Pobranie reaktywnych projektów oraz metody usuwania z kontekstu
  const { projects, removeProject } = useProjects();

  // 1. Dopasowanie szukania projektu według składni z polecenia
  const project = projects.find((p) => p.id === id);

  // Obsługa potwierdzenia usuwania projektu ze szczegółów
  const handleDelete = () => {
    Alert.alert(
      'Usuń projekt',
      'Czy na pewno chcesz bezpowrotnie usunąć ten projekt?',
      [
        { text: 'Anuluj', style: 'cancel' },
        {
          text: 'Usuń',
          style: 'destructive',
          onPress: () => {
            // 3. Wywołanie usunięcia i powrót do listy
            removeProject(String(id));
            router.back();
          },
        },
      ]
    );
  };

  // 2. Jeśli projekt nie istnieje – ekran błędu (Nagłówek + Przycisk wróć)
  if (!project) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Nie znaleziono projektu</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Wróć do listy</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.title}>{project.name}</Text>
          {/* Zmieniono z fullDescription na description zgodnie z typem Project */}
          <Text style={styles.description}>{project.description}</Text>

          <Text style={styles.sectionTitle}>Technologie</Text>
          {project.technologies.map((tech, index) => (
            <Text key={index} style={styles.techItem}>
              • {tech}
            </Text>
          ))}

          <Text style={styles.sectionTitle}>Rok realizacji</Text>
          <Text style={styles.yearText}>{project.year}</Text>

          {/* 3. Przycisk Usuń projekt dodany zgodnie z wymaganiami kolorystycznymi */}
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Usuń projekt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Wróć do listy</Text>
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
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    marginTop: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#22d3ee',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#cbd5e1',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 12,
    color: '#f8fafc',
  },
  techItem: {
    fontSize: 15,
    color: '#cbd5e1',
    marginBottom: 6,
  },
  yearText: {
    fontSize: 16,
    color: '#94a3b8',
  },
  backButton: {
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
  // 3. Style dedykowane dla przycisku usuwania projektu
  deleteButton: {
    marginTop: 30,
    backgroundColor: '#ef4444', // Kolor zadany w punkcie 3
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});