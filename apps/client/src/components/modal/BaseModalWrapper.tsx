import Modal from "./Modal";

type BaseModalWrapperPropsType = {
  isVisible: boolean;
  onBackdropClick: () => void;
};

// Le envía al modal el contenido de acuerdo a si es login de usuario o de admin
// revisar si es necesario este componente y su función

const BaseModalWrapper = ({
  isVisible,
  onBackdropClick,
}: BaseModalWrapperPropsType) => {
  return isVisible ? <Modal onBackdropClick={onBackdropClick} /> : null;
};

export default BaseModalWrapper;
