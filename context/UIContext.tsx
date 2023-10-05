import { NavigationProp } from '@react-navigation/native';
import { createContext } from 'react';

export interface UIContextProps {
    activeScreen: string;
    onSetActiveScreen: (activeScreen: string) => void;
    navigation: any;
}

export const UIContext = createContext({} as UIContextProps);