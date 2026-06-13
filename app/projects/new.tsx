import React, { useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
// Import hooka z kontekstu do zapisu danych
import { useProjects } from '../../context/ProjectsContext';

export default function NewProjectScreen() {
  const router = useRouter();
  const { addProject } = useProjects();

  // 2. Pola formularza w stanie aplikacji
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [year, setYear] = useState('');
  
  // Stan przechowujący komunikaty błędów dla poszczególnych pól
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 4. i 4.4.4 Wzorzec walidacji przepisany ze specyfikacji zadania
  const validate = () => {
    const e: Record<string, string> = {};
    
    if (name.trim().length < 3) e.name = 'Min. 3 znaki';
    if (description.trim().length < 10) e.description = 'Min. 10 znaków';
    
    const techs = technologies.split(',').map(t => t.trim()).filter(Boolean);
    if (techs.length === 0) e.technologies = 'Podaj min. 1 technologię';
    
    const y = parseInt(year, 10);
    if (isNaN(y) || y < 2000 || y > 2030) e.year = 'Rok 2000-2030';
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Obsługa zapisu formularza po pomyślnej walidacji
  const handleSave = () => {
    if (validate()) {
      // Przygotowanie technologii w postaci tablicy stringów przed zapisem
      const techsArray = technologies.split(',').map(t => t.trim()).filter(Boolean);
      
      // 5. Wywołanie akcji zapisu, powrót i alert sukcesu
      addProject({
        name: name.trim(),
        description: description.trim(),
        technologies: techsArray,
        year: parseInt(year, 10),
      });

      Alert.alert('Sukces', 'Projekt dodany!', [
        {
          text: 'OK',
          onPress: () => router.back(), // Powrót na listę
        }
      ]);
    }
  };

  return (
    // 3. Struktura JSX
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.header}>Nowy projekt</Text>

          {/* Pole: Nazwa projektu */}
          <Text style={styles.label}>Nazwa projektu</Text>
          <TextInput
            style={[styles.input, errors.name ? styles.inputError : null]}
            placeholder="Wpisz nazwę projektu"
            placeholderTextColor="#94a3b8"
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          {/* Pole: Opis projektu */}
          <Text style={styles.label}>Opis</Text>
          <TextInput
            style={[styles.input, styles.textArea, errors.description ? styles.inputError : null]}
            placeholder="Wpisz krótki opis projektu"
            placeholderTextColor="#94a3b8"
            multiline
            numberOfLines={3}
            value={description}
            onChangeText={setDescription}
          />
          {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

          {/* Pole: Technologie */}
          <Text style={styles.label}>Technologies (oddzielone przecinkami)</Text>
          <TextInput
            style={[styles.input, errors.technologies ? styles.inputError : null]}
            placeholder="np. React Native, TypeScript, Expo"
            placeholderTextColor="#94a3b8"
            value={technologies}
            onChangeText={setTechnologies}
          />
          {errors.technologies && <Text style={styles.errorText}>{errors.technologies}</Text>}

          {/* Pole: Rok */}
          <Text style={styles.label}>Rok powstania</Text>
          <TextInput
            style={[styles.input, errors.year ? styles.inputError : null]}
            placeholder="np. 2026"
            placeholderTextColor="#94a3b8"
            keyboardType="numeric"
            value={year}
            onChangeText={setYear}
          />
          {errors.year && <Text style={styles.errorText}>{errors.year}</Text>}

          {/* Przyciski operacyjne formularza */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Zapisz projekt</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
              <Text style={styles.cancelButtonText}>Anuluj</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Zmienione z jasnego na docelowy ciemny granat
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e2e8f0', // Jasny tekst tytułu
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
    color: '#94a3b8', // Stonowany jasny kolor etykiet
  },
  input: {
    backgroundColor: '#1e293b', // Pola tekstowe w kolorze kart, zamiast białego
    borderWidth: 1,
    borderColor: '#334155', // Ciemniejsza ramka pasująca do tła
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#f8fafc', // Biały tekst wpisywany przez użytkownika
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  saveButton: {
    backgroundColor: '#14b8a6', // Kolor przycisku zmieniony na Twój docelowy Teal
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#0f172a', // Tekst przycisku w kolorze ciemnego tła, zgodnie z zasadą kontrastu
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#334155', // Anuluj jako neutralny, ciemniejszy przycisk
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#cbd5e1',
    fontSize: 16,
    fontWeight: '600',
  },
});