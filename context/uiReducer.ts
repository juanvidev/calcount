import { UIState } from "./UIProvider";

type UIAction = | { type: '[UI] - Set Active Screen', payload: string }

const uiReducer = (uiState:UIState, {type,payload}:UIAction):UIState => {

  switch (type) {
    case '[UI] - Set Active Screen':
      return {
        ...uiState,
        activeScreen: payload
      };

    default:
      return uiState;
  }
};

export default uiReducer;