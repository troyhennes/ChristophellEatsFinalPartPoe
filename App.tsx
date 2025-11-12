import React, { useState, createContext, useContext } from 'react';
import { View, StatusBar } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import MenuListScreen from './screens/MenuListScreen';
import MenuScreen from './screens/MenuScreen';
import AddMenuItemScreen from './screens/AddMenuItemScreen';

// Define screen type
type ScreenType = 'Welcome' | 'Home' | 'AddMenuItem' | 'MenuList' | 'Menu';

// Shared state interface
interface MenuItem {
  id: string;
  name: string;
  price: number;
  course: string;
}

// Context for menu items
interface AppContextType {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const AppContext = createContext<AppContextType | null>(null);
export const useAppContext = () => useContext(AppContext)!;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('Welcome');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const navigate = (screen: ScreenType) => setCurrentScreen(screen);

  const contextValue: AppContextType = { menuItems, setMenuItems };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Welcome':
        return <WelcomeScreen navigate={navigate} />;
      case 'Home':
        return <HomeScreen navigate={navigate} />;
      case 'MenuList':
        return <MenuListScreen navigate={navigate} />;
      case 'Menu':
        return <MenuScreen navigate={navigate} />;
      case 'AddMenuItem':
        return <AddMenuItemScreen navigate={navigate} />;
      default:
        return <WelcomeScreen navigate={navigate} />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>{renderScreen()}</View>
    </AppContext.Provider>
  );
}