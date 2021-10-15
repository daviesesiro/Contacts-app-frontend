import React, { useState } from "react";
import Modal from "../Modal";
interface Props {
  name: string;
  email: string;
  dials: { kind: string; dial: string }[];
  _id: string;
}

const ContactItem: React.FC<Props> = ({ name, email, _id, dials }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);
  return (
    <>
      <button
        onClick={openModal}
        className="hover:bg-blue-800 block w-full px-4 py-5 mb-2 mr-4 transition-colors duration-200 rounded-md cursor-pointer"
      >
        <p className="text-lg font-bold text-gray-200">{name}</p>
      </button>
      <span className="block w-full h-px my-2 bg-gray-700"></span>
      <Modal
        closeModal={closeModal}
        isOpen={modalIsOpen}
        contentLabel="View contact"
        title={name}
      >
        <DetailItem label="email" value={email} />
        {dials.map((dial, idx) => (
          <DetailItem
            key={`detailItem-${_id}-${idx}`}
            label={dial.kind}
            value={dial.dial}
          />
        ))}
      </Modal>
    </>
  );
};

const DetailItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className=" py-2">
    <p className="text-lg font-semibold text-gray-300 capitalize">{label}</p>
    <p className="text-xl text-white">{value}</p>
  </div>
);

export default ContactItem;
