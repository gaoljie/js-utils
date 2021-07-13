import { ContextState, RawContextState } from "./type";
import { Action, Types } from "./action";

export type ReducerProps = (
  state: RawContextState,
  action: Action
) => ContextState;

const reducer: ReducerProps = (state, action) => {
  const updatedState = (() => {
    switch (action.type) {
      case Types.UPDATE_COUNT:
        return {
          ...state,
          count: action.payload.count,
        };

      default:
        return { ...state };
    }
  })();

  return calculateState(updatedState);
};

export function calculateState(state: RawContextState): ContextState {
  const { count } = state;

  return {
    ...state,
    doubleCount: count * 2,
  };
}

export default reducer;
