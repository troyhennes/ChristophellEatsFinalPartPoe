# Christophell Eats App

Christophell Eats is a **cross-platform menu management application** built with **React Native** and **TypeScript**. It is designed to provide restaurant staff and managers an intuitive way to manage menu items, including adding new dishes, viewing totals, and displaying menus for clients. The application runs seamlessly on **iOS, Android, and web browsers**.

This project serves as an example of a well-structured React Native app with **global state management**, **dynamic content updates**, and **cross-platform responsive UI**. It demonstrates modern best practices in React Native development while providing a real-world restaurant menu solution.

---

## **Key Features**

### General Features
- Fully functional on mobile (iOS/Android) and web.
- Dynamic menu management:
  - Add, view, and remove dishes.
  - Display total items and estimated cost in real-time.
- Intuitive navigation between screens.
- Responsive layout optimized for different devices.
- User-friendly design with clear, readable typography and button layouts.

### Navigation
- **Welcome Screen:** A friendly welcome with the brand logo, and options to start or exit the app.
- **Home Screen:** Summary of the menu with total items, average price, and quick navigation to other screens.
- **Add Menu Item Screen:** Allows adding new dishes to the menu dynamically with dish name, price, and course selection.
- **Menu List Screen:** Displays selected menu items, allows deletion, and shows the estimated total cost.
- **Menu Screen (Client View):** Read-only menu view for clients with estimated total cost and easy navigation options.

### Advanced Features
- Shared menu state across all screens using **React Context API**.
- Adaptive styling using React Native’s `Platform` module.
- Clean, maintainable code structure, making it easy to extend.
- Input validation to prevent empty dish names or prices.
- Alerts for final menu display and exit confirmation.

---

## **Screens Overview**

### 1. Welcome Screen
- Central logo and greeting message.
- Two buttons:
  - **Start:** Navigates to the Home Screen.
  - **Exit:** Displays a confirmation alert.
- Web layout centers content with a max-width for readability.

### 2. Home Screen
- Displays:
  - Total number of menu items.
  - Average price of dishes.
  - List of existing menu items.
- Navigation options:
  - **Add Menu Item**
  - **Menu List**
  - **Menu (Client View)**
- Scrollable content for better accessibility on smaller screens.

### 3. Add Menu Item Screen
- Form to add dishes:
  - Dish Name (Text Input)
  - Price (Numeric Input)
  - Course selection (Starter, Main, Dessert, Beverage)
- Buttons:
  - **Add Item:** Adds a new dish to the shared menu.
  - **Refresh:** Clears the form.
  - **Back:** Returns to Home Screen.
- Dynamic summary of total items and total estimated cost.
- Each added item is immediately displayed on the screen.

### 4. Menu List Screen
- Shows all menu items currently added.
- Delete functionality for removing individual dishes.
- Displays:
  - Total number of items.
  - Total estimated price.
- Buttons:
  - **Back:** Returns to Home Screen.
  - **Add Item:** Navigates to Add Menu Item Screen.
  - **Display Final Menu:** Shows an alert summarizing items and total cost.
- Scrollable layout for handling long lists.

### 5. Menu Screen (Client View)
- Read-only view for clients or customers.
- Shows:
  - Dish name, price, and course for all items.
  - Total estimated cost.
- Navigation options:
  - **Back:** Returns to Home.
  - **Exit:** Prompts confirmation to close the app.

---

## **Technologies Used**

- **React Native** – For cross-platform UI.
- **TypeScript** – Ensures type safety and code quality.
- **React Context API** – For global state management.
- **React Native components** – ScrollView, TouchableOpacity, TextInput, Image, Alert.
- **Platform module** – Handles web-specific layout adjustments.
- **ESLint & Prettier** – For consistent code style.

---

## **Installation & Setup**

1. Clone the repository:

```bash
git clone <repository-url>
cd christophell-eats-app
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Run the app:

bash
Copy code
# Mobile (iOS)
npx react-native run-ios

# Mobile (Android)
npx react-native run-android

# Web
npm start
Usage Instructions
Adding a New Menu Item
Navigate to Add Menu Item Screen.

Enter dish name.

Enter dish price (numeric).

Select course type (Starter, Main, Dessert, Beverage).

Click Add Item.

The dish is added to the shared menu and displayed on Home and Menu List screens.

Removing a Menu Item
Navigate to Menu List Screen.

Press the Delete button next to the dish.

The item is removed immediately and the totals update.

Viewing Menu Totals
Both Home and Menu List screens display:

Total number of items.

Average price (Home).

Estimated total price (Menu List & Menu screens).

Project Structure
bash
Copy code
/assets
  - ChristophellEats.png       # Logo image

/screens
  - WelcomeScreen.tsx          # Welcome page
  - HomeScreen.tsx             # Main dashboard
  - AddMenuItemScreen.tsx      # Add new menu items
  - MenuListScreen.tsx         # Selected menu items
  - MenuScreen.tsx             # Client-facing menu

App.tsx                        # Root component with navigation and shared state
Future Improvements
Persist menu items using local storage or a backend database.

Add search and filter options for menu items.

Allow image upload for each menu item.

Include user authentication for staff vs. client roles.

Implement animations and transitions for a smoother UI experience.

Improve web responsiveness, with a fully adaptive layout for desktops and tablets.


## **CHANGELOG.md**

```markdown
# Changelog

All significant changes, updates, and bug fixes for Christophell Eats App are documented here.  

---

## [v1.2] – Major Extended Version

### General Enhancements
- Fully refactored for **cross-platform support**, including mobile and web.
- Introduced **React Context API** for consistent shared menu state across all screens.
- Implemented **Platform-specific styling** to handle web vs mobile layouts effectively.
- Centralized navigation via `currentScreen` in `App.tsx`.
- Updated all screens to use `ScrollView` for better content management.

### Welcome Screen
- Replaced default Buttons with **TouchableOpacity** for full styling control.
- Added **Exit confirmation alert** for safety.
- Web layout now centered with maximum width to improve readability.

### Home Screen
- Displays:
  - Total number of menu items.
  - Average price of all dishes.
- Lists all current menu items dynamically.
- Buttons:
  - Add new items
  - View Menu List
  - View Client Menu
- Optimized padding, margins, and alignment for both mobile and web.

### Add Menu Item Screen
- Dynamic form for dish name, price, and course.
- Form validation: Alerts when dish name or price is missing.
- Refresh button clears inputs quickly.
- Each added item instantly updates the **shared menu state**.
- Displays total items and estimated total price in real-time.
- Web and mobile scrollable layout enhanced.

### Menu List Screen
- Shows all selected items.
- Delete button for each item.
- Display Final Menu shows **alert** summarizing items and total cost.
- Buttons adjusted for consistency and responsive design.

### Menu Screen
- Client-facing menu view (read-only).
- Shows dish name, price, and course.
- Estimated total price displayed clearly.
- Navigation buttons: Back and Exit.
- Responsive layout for web.

### App.tsx
- Centralized navigation for all screens.
- Created `AppContext` for global state of menu items.
- Added `useAppContext` hook for easy access to shared menu data.

### Bug Fixes
- Fixed layout overflow issues on web.
- Fixed incorrect padding and alignment on mobile devices.
- Fixed input clearing and form refresh issues.

---

## [v1.1] – Initial Refactored Version
- Original version with static menu items and local state per screen.
- Added basic navigation between screens.
- Added Home summary of menu items.
- AddMenuItemScreen allowed adding items but only local to the screen.
- Menu List and Menu Screens did not use shared state.

---

## [v1.0] – Initial Release
- Basic skeleton of Christophell Eats App.
- Welcome Screen with Start and Exit.
- Home Screen displaying static menu items.
- Add Menu Item Screen with input fields.
- Menu List Screen displaying added items.
- Menu Screen for client view.
- Navigation between screens implemented with local state only.


REFACTOR INFO:

1. Centralized State Management

Old approach: Each screen maintained its own local state for menu items (useState) or had static data.

Refactored: We introduced a React Context (AppContext) in App.tsx:

All screens now share the same menuItems state.

You can add, delete, or update items on any screen, and the changes reflect everywhere immediately.

This is a key refactor because it removes duplicate state and makes the app more maintainable and scalable.

2. Platform-Aware Layouts

Old approach: Fixed widths/paddings that worked mostly on mobile.

Refactored: Used Platform.OS to adjust styles:

Web screens are centered with max-width.

Mobile screens take full width.

Added ScrollView with contentContainerStyle to handle content overflow on both platforms.

3. Updated UI Components

Old approach: Standard Button components with limited styling.

Refactored: Replaced with TouchableOpacity buttons:

Fully stylable (colors, padding, radius).

Consistent UI across screens.

Added color schemes and responsive spacing for a polished look.

4. Code Cleanup & Consistency

Old approach: Some screens used inconsistent style properties, inline styles, or duplicated logic.

Refactored:

Unified MenuItem type across all screens.

Standardized naming and props for screens (Props interface with navigate).

Removed inline calculations and replaced with clear functions (showFinalMenu, removeItem, etc.).

Improved readability and maintainability.

5. Improved Navigation

Old approach: Screens navigated using local state or props only.

Refactored: App.tsx controls navigation via currentScreen and a navigate() function:

Single source of truth for which screen is active.

Easy to add new screens in the future.

6. Additional Functional Refactors

Added form validation in AddMenuItemScreen.

Added real-time totals (totalPrice) and item counts on all relevant screens.

Unified menu display logic across screens.

Made MenuListScreen and MenuScreen more maintainable and responsive.

In short:
The app was refactored to use shared state, reusable components, responsive layouts, and cleaner navigation, which improves scalability, maintainability, and UX.
