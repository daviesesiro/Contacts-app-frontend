import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { useAuthContext } from "../Context.ts/AuthContext";
import AddContactModal from "./Contact/AddContactModal";
import { RounedButton } from "./CustomButton";

const Index: React.FC<{}> = () => {
  const { logout } = useAuthContext();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="p-3 py-4 bg-gray-800">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto text-xl font-bold text-white">
          <h1>
            <Link to="/"> Contacts </Link>
          </h1>
          <div className="flex">
            <Route exact path="/">
              <RounedButton onClick={openModal} className="">
                +
              </RounedButton>
              <button
                onClick={() => logout!()}
                className="hover:text-gray-300 ml-4 text-base"
              >
                Logout
              </button>
            </Route>
          </div>
        </div>
      </div>
      <AddContactModal closeModal={closeModal} isOpen={modalIsOpen} />
    </>
  );
};

export default Index;
