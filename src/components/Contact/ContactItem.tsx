import React, { useState } from "react";
import Modal from "react-modal";
interface Props {
  name: string;
}

const ContactItem: React.FC<Props> = ({ name }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);
  return (
    <>
      <button onClick={openModal}>
        <div className="hover:bg-blue-800 w-full px-4 py-5 mb-2 mr-4 transition-colors duration-200 rounded-md cursor-pointer">
          <p className="text-lg font-bold text-gray-200">{name}</p>
        </div>
      </button>
      <span className="block w-full h-px m-2 mx-2 bg-gray-700"></span>
      <Modal isOpen={modalIsOpen} style={{}} contentLabel="Example Modal">
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
};

export default ContactItem;
