import { ADD_LOCATION, REMOVE_LOCATION } from "./types";

export const addLocation = location => ({
  type: ADD_LOCATION,
  payload: location
});

export const removeLocation = location => ({
  type: REMOVE_LOCATION,
  payload: location
});