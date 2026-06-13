import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
// Import hooka z kontekstu (Ścieżka dostosowana: wychodzimy z app i projects za pomocą ../..)
import { useProjects } from '../../context/ProjectsContext';

export default function ProjectsScreen() {
  const router = useRouter();
  // Pobranie danych i akcji usuwania z globalnego kontekstu
  const { projects, removeProject } = useProjects();

  // Funkcja wyświetlająca natywne okno dialogowe z potwierdzeniem
  const confirmDelete = (id: string, name: string) => {
    Alert.alert(
      'Usuń projekt',
      `Czy na pewno chcesz usunąć projekt "${name}"?`,
      [
        { text: 'Anuluj', style: 'cancel' },
        { 
          text: 'Usuń', 
          style: 'destructive', 
          onPress: () => removeProject(id) 
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Wybrane projekty</Text>

      {/* Przycisk dodawania nowego projektu nad listą */}
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => router.push('/projects/new')}
      >
        <Text style={styles.addButtonText}>+ Dodaj projekt</Text>
      </TouchableOpacity>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/projects/${item.id}`)}
            style={styles.card}
          >
            {/* Nagłówek karty zawierający nazwę oraz przycisk Usuń po prawej stronie */}
            <View style={styles.cardHeader}>
              <Text style={styles.projectName}>{item.name}</Text>
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => confirmDelete(item.id, item.name)}
              >
                <Text style={styles.deleteButtonText}>Usuń</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.projectDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
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
  // Style przycisku "+ Dodaj projekt" dokładnie według wytycznych z punktu 3
  addButton: {
    backgroundColor: '#10b981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  // Kontener ułatwiający ułożenie przycisku usuwania w prawym górnym rogu
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22d3ee',
    flex: 1, // Pozwala nazwie zająć dostępną przestrzeń i nie nachodzić na przycisk
    paddingRight: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 20,
  },
  // Stylizacja przycisku "Usuń" w karcie
  deleteButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(239, 68, 68, 0.15)', // Delikatne czerwone tło pod przyciskiem
  },
  deleteButtonText: {
    color: '#ef4444', // Czerwony kolor tekstu przycisku destrukywnego
    fontWeight: '600',
    fontSize: 14,
  },
});