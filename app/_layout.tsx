import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
// Import dostawcy kontekstu projektów
import { ProjectsProvider } from '../context/ProjectsContext';
// 1. DODANY IMPORT: Dostawca kontekstu profilu
import { ProfileProvider } from '../context/ProfileContext';

export default function RootLayout() {
  return (
    <ProjectsProvider>
      {/* 2. DODANE OPAKOWANIE: ProfileProvider wewnątrz ProjectsProvider */}
      <ProfileProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#1e293b',
              borderTopColor: '#334155',
            },
            tabBarActiveTintColor: '#22d3ee',
            tabBarInactiveTintColor: '#94a3b8',
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Profil',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="projects"
            options={{
              title: 'Projekty',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="code-slash" size={size} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="contact"
            options={{
              title: 'Kontakt',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="mail" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </ProfileProvider>
    </ProjectsProvider>
  );
}