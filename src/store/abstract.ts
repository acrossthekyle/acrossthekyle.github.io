export const getActions = (state) => state.actions;
export const getData = (state) => state.data;
export const getHasError = (state) => !state.isLoading && state.didFail;
export const getIsEmpty = (state) => !state.isLoading && !state.didFail;
export const getIsLoading = (state) => state.isLoading;
export const getIsReady = (state) => !state.isLoading && !state.didFail;
