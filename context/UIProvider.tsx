import { FC, useReducer, useEffect, useContext } from 'react';
import { UIContext } from './UIContext';
import uiReducer from './uiReducer';
import { NavigationContext } from '@react-navigation/native';


interface Props {
    children: JSX.Element | JSX.Element[];
}

export interface UIState {
    activeScreen: string;
}

const INITIAL_STATE: UIState = {
    activeScreen: '',
};

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);
    const navigation = useContext(NavigationContext);

    const onSetActiveScreen = (activeScreen: string) => {
        dispatch({ type: '[UI] - Set Active Screen', payload: activeScreen });
    }

    return (
        <UIContext.Provider value={{
            ...state,
            onSetActiveScreen,
            navigation,
        }}>
            {children}
        </UIContext.Provider>
    );
};