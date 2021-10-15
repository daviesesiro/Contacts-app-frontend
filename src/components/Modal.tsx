import ReactModal from "react-modal";
import { RoundedButton } from "./CustomButton";

interface Props {
  closeModal: () => void;
  isOpen: boolean;
  title: string;
  contentLabel?: string;
}

const Modal: React.FC<Props> = ({
  closeModal,
  contentLabel,
  title,
  isOpen,
  children,
}) => (
  <ReactModal
    shouldCloseOnEsc={true}
    shouldCloseOnOverlayClick={true}
    onRequestClose={closeModal}
    isOpen={isOpen}
    style={{
      content: {
        maxWidth: "40rem",
        minWidth: "20rem",
        margin: "auto",
        background: "#182238",
        height: "max-content",
        borderRadius: "14px",
      },
      overlay: { background: "rgba(0,0,0,.3)" },
    }}
    contentLabel={contentLabel}
  >
    <div className="flex justify-between mb-4">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <RoundedButton
        onClick={closeModal}
        className="text-lg font-bold text-red-300"
      >
        x
      </RoundedButton>
    </div>
    {children}
  </ReactModal>
);

export default Modal;
