export const CLOSE_ALL_MODALS = () => ({
  type: 'CLOSE_ALL_MODALS',
});

export const OPEN_MODAL = (type) => ({
  type: 'OPEN_MODAL',
  payload: type,
});
