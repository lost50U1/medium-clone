import { useContext } from "react";

import { ModalsContext } from "@/context/modalsContext/modalsContext";
import {
  openModal,
  closeModal,
  toggleModal,
} from "@/context/modalsContext/modalsActions";

export const useModals = () => {
  const { state, dispatch } = useContext(ModalsContext);

  return {
    state,
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: (modal) => dispatch(closeModal(modal)),
    toggleModal: (modal) => dispatch(toggleModal(modal)),
    dispatch,
  };
};
