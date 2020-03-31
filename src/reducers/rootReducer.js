import { ADD_LOCATION, REMOVE_LOCATION } from "../actions/types";

const initialState = {
  selectedLocation: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        selectedLocation: [...state.selectedLocation, action.payload]
      };
    case REMOVE_LOCATION:
      const locations = state.selectedLocation.filter((location)=> location !== action.payload);
      return {
        ...state,
        selectedLocation: locations
      };
    default:
      return state;
  }
};

export default rootReducer;