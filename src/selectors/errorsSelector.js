export const error = (state) => {
  return state.venues.error || state.clients.error;
};

export const errorMessage = (state) => {
  return state.venues.errorMessage || state.clients.errorMessage;
};
