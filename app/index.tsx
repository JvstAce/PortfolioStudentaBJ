import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
// 1. Import nowego kontekstu profilu
import { useProfile } from '../context/ProfileContext';

export default function ProfileScreen() {
  // Pobranie danych i metody zapisu z globalnego stanu
  const { profile, updateProfile } = useProfile();

  // Stan zarządzający trybem edycji (punkt 6 z polecenia)
  const [editing, setEditing] = useState(false);

  // Stany lokalne pól formularza edycji
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [skills, setSkills] = useState(profile.skills.join(', '));
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Synchronizacja formularza z aktualnymi danymi przy wejściu w tryb edycji
  useEffect(() => {
    if (editing) {
      setName(profile.name);
      setBio(profile.bio);
      setSkills(profile.skills.join(', '));
      setErrors({});
    }
  }, [editing, profile]);

  // 7. Funkcja walidacji pól (imię min. 2 znaki, opis min. 10, min. 1 umiejętność)
  const validate = () => {
    const e: Record<string, string> = {};
    if (name.trim().length < 2) e.name = 'Imię musi mieć min. 2 znaki';
    if (bio.trim().length < 10) e.bio = 'Opis musi mieć min. 10 znaków';
    
    const skillsArray = skills.split(',').map(s => s.trim()).filter(Boolean);
    if (skillsArray.length === 0) e.skills = 'Podaj min. 1 umiejętność';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Obsługa zapisu zwalidowanego formularza
  const handleSave = () => {
    if (validate()) {
      const skillsArray = skills.split(',').map(s => s.trim()).filter(Boolean);
      
      // Wywołanie aktualizacji w AsyncStorage i wyjście z trybu edycji
      updateProfile({
        name: name.trim(),
        bio: bio.trim(),
        skills: skillsArray,
      });
      
      setEditing(false);
      Alert.alert('Sukces', 'Dane profilu zostały zaktualizowane!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Portfolio Studenta</Text>

        {editing ? (
          /* Tryb Edycji: Formularz z polami tekstowymi */
          <View style={styles.card}>
            <Text style={styles.editHeader}>Edytuj dane profilu</Text>

            <Text style={styles.formLabel}>Imię i nazwisko</Text>
            <TextInput
              style={[styles.input, errors.name ? styles.inputError : null]}
              value={name}
              onChangeText={setName}
              placeholderTextColor="#64748b"
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <Text style={styles.formLabel}>O mnie (Bio)</Text>
            <TextInput
              style={[styles.input, styles.textArea, errors.bio ? styles.inputError : null]}
              multiline
              numberOfLines={4}
              value={bio}
              onChangeText={setBio}
              placeholderTextColor="#64748b"
            />
            {errors.bio && <Text style={styles.errorText}>{errors.bio}</Text>}

            <Text style={styles.formLabel}>Umiejętności (oddzielone przecinkami)</Text>
            <TextInput
              style={[styles.input, errors.skills ? styles.inputError : null]}
              value={skills}
              onChangeText={setSkills}
              placeholderTextColor="#64748b"
            />
            {errors.skills && <Text style={styles.errorText}>{errors.skills}</Text>}

            {/* Przyciski Zapisz / Anuluj */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonTextWhite}>Zapisz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setEditing(false)}>
                <Text style={styles.buttonTextWhite}>Anuluj</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          /* Tryb Podglądu: Wyświetlanie danych pobranych z Contextu */
          <View style={styles.card}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.image}
            />

            {/* Dane dynamiczne podstawione z obiektu profile */}
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.subtitle}>Informatyka, 3 rok</Text>

            <Text style={styles.sectionTitle}>O mnie</Text>
            <Text style={styles.description}>{profile.bio}</Text>

            <Text style={styles.sectionTitle}>Umiejętności</Text>
            {profile.skills.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                • {skill}
              </Text>
            ))}

            {/* Przycisk aktywujący tryb edycji */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => setEditing(true)}
            >
              <Text style={styles.buttonText}>Edytuj profil</Text>
            </TouchableOpacity>
          </View>
        )}
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
  /* STYLE DLA POLA FORMULARZA I EDYCJI */
  editHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 16,
    textAlign: 'center',
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#94a3b8',
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#334155',
    borderWidth: 1,
    borderColor: '#475569',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#f8fafc',
  },
  textArea: {
    height: 90,
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
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#10b981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonTextWhite: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});