# Portfolio Studenta – React Native / Expo

Aplikacja mobilna stworzona w **React Native / Expo**, której celem jest prezentacja portfolio studenta w formie nowoczesnej aplikacji mobilnej. Projekt został przygotowany jako aplikacja zaliczeniowa i zawiera ekran profilu, listę projektów, ekran szczegółów projektu, ekran kontaktowy, działającą nawigację, formularze z walidacją oraz lokalny zapis danych, dzięki czemu zmiany nie znikają po ponownym uruchomieniu aplikacji. [file:1][file:2][file:27][file:33]

## Opis projektu

Aplikacja przedstawia portfolio studenta na kilku ekranach i została wykonana zgodnie z wymaganiami projektu. Zawiera spersonalizowane dane autora, własne projekty, własną kolorystykę oraz możliwość edycji i dodawania danych z poziomu aplikacji. [file:1][file:2][file:29][file:41]

Projekt został oparty o **Expo Router**, dzięki czemu użytkownik może poruszać się pomiędzy ekranami profilu, projektów i kontaktu za pomocą dolnej nawigacji zakładkowej, a dodatkowo przechodzić do szczegółów wybranego projektu w zagnieżdżonej nawigacji typu Stack. [file:2][file:31][file:35]

## Funkcjonalności

- ekran profilu z danymi studenta, opisem, umiejętnościami i zdjęciem profilowym, z możliwością edycji danych, [file:27][file:29][file:33]
- ekran z listą projektów, [file:2][file:30][file:41]
- ekran szczegółów wybranego projektu, zawierający nazwę, opis, technologie i rok realizacji, [file:2][file:1]
- ekran kontaktowy z danymi kontaktowymi autora, [file:32][file:34]
- działająca nawigacja między ekranami z wykorzystaniem `expo-router`, `Tabs` i `Stack`, [file:2][file:31][file:35]
- możliwość dodawania nowych projektów przez formularz, [file:1]
- walidacja danych w formularzach, [file:1][file:33]
- lokalny zapis danych profilu i projektów przy użyciu `AsyncStorage`, [file:1][file:29][file:30]
- możliwość usuwania projektów i aktualizacji profilu, [file:1][file:29][file:30]
- otwieranie adresu e-mail, GitHuba i LinkedIna z poziomu aplikacji, [file:32][file:34]
- kopiowanie linku do profilu LinkedIn do schowka. [file:32][file:34]

## Zastosowane technologie

- React Native [file:27][file:33]
- Expo [file:28]
- Expo Router [file:2][file:31][file:35]
- TypeScript [file:29][file:30]
- React Context API [file:29][file:30]
- AsyncStorage [file:1][file:29][file:30]
- Expo Clipboard [file:32][file:34]
- Ionicons / `@expo/vector-icons` [file:31][file:35]

## Personalizacja projektu

Projekt został spersonalizowany zgodnie z wymaganiami zadania. Aplikacja zawiera własne dane autora, własne dane kontaktowe, własne projekty oraz indywidualną ciemną kolorystykę opartą między innymi o kolory `#0f172a`, `#1e293b`, `#22d3ee` i `#14b8a6`. [file:27][file:32][file:33][file:41]

Domyślny profil zawiera dane autora: **Bartosz Jojko**, opis związany z kierunkiem informatycznym i aplikacjami mobilnymi oraz listę umiejętności. Ekran kontaktowy zawiera adres e-mail, link do GitHuba, LinkedIna oraz lokalizację autora. [file:29][file:32][file:34]

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

Struktura aplikacji wynika z podejścia używanego w laboratoriach z Expo Router i odpowiada wymaganiom projektu wieloekranowego. [file:1][file:2][file:29][file:30][file:41]

## Instrukcja uruchomienia

### Wymagania

Przed uruchomieniem projektu należy posiadać:

- Node.js,
- npm lub yarn,
- Expo Go na telefonie lub skonfigurowany emulator. [file:3]

### Uruchomienie projektu

```bash
git clone https://github.com/JvstAce/nazwa-repozytorium.git
cd nazwa-repozytorium
npm install
npx expo start
```

Po uruchomieniu serwera developerskiego można:

- zeskanować kod QR aplikacją **Expo Go**,
- uruchomić projekt na emulatorze,
- testować aplikację lokalnie na urządzeniu mobilnym. [file:3]

## Walidacja i zapis danych

Aplikacja zawiera formularze z walidacją danych. Podczas edycji profilu sprawdzana jest długość imienia, opisu oraz liczba umiejętności, natomiast przy dodawaniu projektu walidowane są między innymi nazwa, opis, technologie oraz rok realizacji. [file:1][file:33]

Dane profilu i projektów są zapisywane lokalnie z użyciem `AsyncStorage`, dzięki czemu pozostają dostępne także po ponownym uruchomieniu aplikacji. [file:1][file:29][file:30]


## Autor

**Bartosz Jojko**  
Student informatyki, specjalizacja: aplikacje mobilne i platformy internetowe. [cite:19]

- GitHub: [JvstAce](https://github.com/JvstAce) [cite:21]
- LinkedIn: [bartosz-jojko-2463563a9](https://www.linkedin.com/in/bartosz-jojko-2463563a9/) [file:32]
- E-mail: bartosz.jojko@gmail.com [file:32]

## Status projektu

Projekt spełnia założenia aplikacji portfolio studenta wykonanej w React Native / Expo: posiada wymagane ekrany, nawigację, formularz dodawania projektów, walidację, lokalny zapis danych oraz personalizację. [file:1][file:2][file:29][file:30][file:33]
