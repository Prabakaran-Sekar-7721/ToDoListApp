## Component Details

---

### Appcontent.tsx
**Component:** `AppContent`
**Location:** `Appcontent.tsx`
**Description:** Root component that sets up safe area, status bar, and renders the Header and Main components.

**Key Packages Used:**
- react
- react-native
- react-native-safe-area-context

---

### Header.tsx
**Component:** `Header`
**Location:** `Header.tsx`
**Description:** Displays the app title and an add button. Handles opening the modal for adding tasks.

**Key Packages Used:**
- react
- react-native
- @expo/vector-icons
- react-native-mmkv
- react-native-modal
- react-native-paper

---

### EditModal.tsx
**Component:** `EditModal`
**Location:** `EditModal.tsx`
**Description:** Modal for adding or editing a task. Includes title, description, date picker, and save/delete actions.

**Key Packages Used:**
- react
- react-native
- react-native-mmkv
- react-native-modal
- react-native-paper

---

### DatePicker.tsx
**Component:** `DateTimePickerComponent`
**Location:** `DatePicker.tsx`
**Description:** Date and time picker for selecting task deadlines.

**Key Packages Used:**
- react
- react-native
- @react-native-community/datetimepicker
- react-native-modal

---

### FlatListComponent.tsx
**Component:** `FlatListComponent`
**Location:** `FlatListComponent.tsx`
**Description:** Renders each task item in the list, with support for editing, marking complete, and swipe actions.

**Key Packages Used:**
- react
- react-native
- react-native-mmkv
- react-native-paper
- react-native-gesture-handler
- react-native-reanimated

---

### Main.tsx
**Component:** `Main`
**Location:** `Main.tsx`
**Description:** Displays the list of tasks using a FlatList and the FlatListComponent.

**Key Packages Used:**
- react
- react-native
- react-native-mmkv

---

### mmkv.tsx
**Component:** `storage (MMKV instance)`
**Location:** `mmkv.tsx`
**Description:** Exports the MMKV storage instance for fast key-value storage.

**Key Packages Used:**
- react-native-mmkv

---
