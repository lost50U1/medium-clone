export const modalsActions = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_MODAL: "TOGGLE_MODAL",
};
export const openModal = (modal) => ({
  type: modalsActions.OPEN_MODAL,
  payload: modal,
});
export const closeModal = (modal) => ({
  type: modalsActions.CLOSE_MODAL,
  payload: modal,
});
export const toggleModal = (modal) => ({
  type: modalsActions.TOGGLE_MODAL,
  payload: modal,
});
