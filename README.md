# Portfolio Studenta – React Native / Expo

Aplikacja mobilna stworzona w **React Native / Expo**, której celem jest prezentacja portfolio studenta w formie nowoczesnej aplikacji mobilnej. Projekt został przygotowany jako aplikacja zaliczeniowa i zawiera ekran profilu, listę projektów, ekran szczegółów projektu, ekran kontaktowy, działającą nawigację, formularze z walidacją oraz lokalny zapis danych, dzięki czemu zmiany nie znikają po ponownym uruchomieniu aplikacji. 

## Opis projektu

Aplikacja przedstawia portfolio studenta na kilku ekranach i została wykonana zgodnie z wymaganiami projektu. Zawiera spersonalizowane dane autora, własne projekty, własną kolorystykę oraz możliwość edycji i dodawania danych z poziomu aplikacji. 

Projekt został oparty o **Expo Router**, dzięki czemu użytkownik może poruszać się pomiędzy ekranami profilu, projektów i kontaktu za pomocą dolnej nawigacji zakładkowej, a dodatkowo przechodzić do szczegółów wybranego projektu w zagnieżdżonej nawigacji typu Stack. 

## Funkcjonalności

- ekran profilu z danymi studenta, opisem, umiejętnościami i zdjęciem profilowym, z możliwością edycji danych, 
- ekran z listą projektów, 
- ekran szczegółów wybranego projektu, zawierający nazwę, opis, technologie i rok realizacji, 
- ekran kontaktowy z danymi kontaktowymi autora, 
- działająca nawigacja między ekranami z wykorzystaniem `expo-router`, `Tabs` i `Stack`, 
- możliwość dodawania nowych projektów przez formularz, 
- walidacja danych w formularzach, 
- lokalny zapis danych profilu i projektów przy użyciu `AsyncStorage`, 
- możliwość usuwania projektów i aktualizacji profilu, 
- otwieranie adresu e-mail, GitHuba i LinkedIna z poziomu aplikacji, 
- kopiowanie linku do profilu LinkedIn do schowka. 

## Zastosowane technologie

- React Native 
- Expo 
- Expo Router 
- TypeScript 
- React Context API 
- AsyncStorage 
- Expo Clipboard 
- Ionicons / `@expo/vector-icons` 

## Personalizacja projektu

Projekt został spersonalizowany zgodnie z wymaganiami zadania. Aplikacja zawiera własne dane autora, własne dane kontaktowe, własne projekty oraz indywidualną ciemną kolorystykę opartą między innymi o kolory `#0f172a`, `#1e293b`, `#22d3ee` i `#14b8a6`. 

Domyślny profil zawiera dane autora: **Bartosz Jojko**, opis związany z kierunkiem informatycznym i aplikacjami mobilnymi oraz listę umiejętności. Ekran kontaktowy zawiera adres e-mail, link do GitHuba, LinkedIna oraz lokalizację autora. 

## Struktura aplikacji

Najważniejsze elementy projektu obejmują:

```text
app/
├── _layout.tsx            # główny layout z zakładkami Tabs
├── index.tsx              # ekran profilu
├── contact.tsx            # ekran kontaktowy
└── projects/
    ├── _layout.tsx        # zagnieżdżony Stack
    ├── index.tsx          # lista projektów
    ├── [id].tsx           # szczegóły projektu
    └── new.tsx            # formularz dodawania projektu

context/
├── ProfileContext.tsx     # zarządzanie profilem
└── ProjectsContext.tsx    # zarządzanie projektami

data/
└── projects.ts            # dane początkowe projektów

utils/
└── storage.ts             # zapis i odczyt danych lokalnych
```

Struktura aplikacji wynika z podejścia używanego w laboratoriach z Expo Router i odpowiada wymaganiom projektu wieloekranowego. 

## Instrukcja uruchomienia

### Wymagania

Przed uruchomieniem projektu należy posiadać:

- Node.js,
- npm lub yarn,
- Expo Go na telefonie lub skonfigurowany emulator. 

### Uruchomienie projektu

```bash
git clone https://github.com/JvstAce/PortfolioStudentaBJ.git
cd PortfolioStudentaBJ
npm install
npx expo start
```

Po uruchomieniu serwera developerskiego można:

- zeskanować kod QR aplikacją **Expo Go**,
- uruchomić projekt na emulatorze,
- testować aplikację lokalnie na urządzeniu mobilnym. 

## Walidacja i zapis danych

Aplikacja zawiera formularze z walidacją danych. Podczas edycji profilu sprawdzana jest długość imienia, opisu oraz liczba umiejętności, natomiast przy dodawaniu projektu walidowane są między innymi nazwa, opis, technologie oraz rok realizacji. 

Dane profilu i projektów są zapisywane lokalnie z użyciem `AsyncStorage`, dzięki czemu pozostają dostępne także po ponownym uruchomieniu aplikacji. 


## Autor

**Bartosz Jojko**  
Student informatyki, specjalizacja: aplikacje mobilne i platformy internetowe.

- GitHub: [JvstAce](https://github.com/JvstAce) 
- LinkedIn: [bartosz-jojko-2463563a9](https://www.linkedin.com/in/bartosz-jojko-2463563a9/) 
- E-mail: bartosz.jojko@gmail.com 

## Status projektu

Projekt spełnia założenia aplikacji portfolio studenta wykonanej w React Native / Expo: posiada wymagane ekrany, nawigację, formularz dodawania projektów, walidację, lokalny zapis danych oraz personalizację. 
