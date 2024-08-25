export const handlePending = (state) => {
  state.isLoading = true;
  state.isError = false;
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
};

export const handleRejected = (state, action) => {
  state.isError = action.payload;
  state.isLoading = false;
};
