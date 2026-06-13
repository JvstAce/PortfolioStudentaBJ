import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { saveData, loadData } from '../utils/storage';


export type Profile = {
    name: string;
    bio: string;
    skills: string[];
};

type ProfileCtx = {
    profile: Profile;
    updateProfile: (p: Profile) => void;
};


const DEFAULT_PROFILE: Profile = {
    name: 'Bartosz Jojko',
    bio: 'Jestem studentem informatyki, specjalizującym się w aplikacjach mobilnych i platformach internetowych. Interesuję się tworzeniem nowoczesnych aplikacji w React Native, web developmentem oraz rozwijaniem praktycznych projektów, które łączą estetykę z funkcjonalnością.',
    skills: ['React Native']
};


const STORAGE_KEY = '@profile';

const ProfileContext = createContext<ProfileCtx | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
    const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);
    const [loaded, setLoaded] = useState(false);

    // Wczytanie profilu przy starcie aplikacji
    useEffect(() => {
        (async () => {
            const stored = await loadData<Profile>(STORAGE_KEY);
            if (stored) {
                setProfile(stored);
            }
            setLoaded(true);
        })();
    }, []);

    // 2. Funkcja aktualizująca dane udostępniana przez kontekst
    const updateProfile = async (newProfile: Profile) => {
        setProfile(newProfile);
        await saveData(STORAGE_KEY, newProfile);
    };

    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfile() {
    const ctx = useContext(ProfileContext);
    if (!ctx) throw new Error('useProfile musi być użyty wewnątrz ProfileProvider');
    return ctx;
}