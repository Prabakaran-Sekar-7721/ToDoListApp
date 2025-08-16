// Example: COMPONENTS.md

# Components Documentation

## Collapsible

**File:** `components/Collapsible.tsx`

- **Description:**  
  Renders a section that can expand/collapse to show or hide its children.
- **Props:**
  - `title` (string): Title of the collapsible section.
  - `children` (ReactNode): Content to display inside the collapsible area.

---

## ExternalLink

**File:** `components/ExternalLink.tsx`

- **Description:**  
  Renders a styled link that opens an external URL.
- **Props:**
  - `href` (string): The URL to open.
  - `children` (ReactNode): Link text or elements.

---

## HapticTab

**File:** `components/HapticTab.tsx`

- **Description:**  
  Custom tab bar button that triggers haptic feedback on press.
- **Props:**  
  Inherits all tab bar button props from Expo Router.

---

## HelloWave

**File:** `components/HelloWave.tsx`

- **Description:**  
  Animated waving hand icon for greeting screens.
- **Props:**  
  - `size` (number): Size of the icon.

---

## ParallaxScrollView

**File:** `components/ParallaxScrollView.tsx`

- **Description:**  
  ScrollView with a parallax header image and customizable background.
- **Props:**
  - `headerImage` (ReactNode): Image or icon for the header.
  - `headerBackgroundColor` (object): Background color for header (light/dark).
  - `children` (ReactNode): Scrollable content.

---

## ThemedText

**File:** `components/ThemedText.tsx`

- **Description:**  
  Text component that adapts to the current theme (light/dark).
- **Props:**
  - `type` (string): Style variant (`title`, `default`, etc.).
  - `children` (ReactNode): Text content.

---

## ThemedView

**File:** `components/ThemedView.tsx`

- **Description:**  
  View container that adapts its background to the current theme.
- **Props:**
  - `style` (object): Custom styles.
  - `children` (ReactNode): Content.

---

## IconSymbol

**File:** `components/ui/IconSymbol.tsx`

- **Description:**  
  Renders a platform-specific icon using system symbols.
- **Props:**
  - `name` (string): Icon name.
  - `size` (number): Icon size.
  - `color` (string): Icon color.

---

## TabBarBackground

**File:** `components/ui/TabBarBackground.tsx`

- **Description:**  
  Custom background for the tab bar, supporting blur and theme adaptation.
- **Props:**  
  Inherits tab bar background props.

---

**Note:**  
For more details, refer to the prop types and usage examples in each