import React from "react";

interface Props {
  name: string;
}

const ContactItem: React.FC<Props> = ({ name }) => {
  return (
    <>
      <div className="hover:bg-blue-800 w-full px-4 py-5 mb-2 mr-4 transition-colors duration-200 rounded-md cursor-pointer">
        <p className="text-lg font-bold text-gray-200">{name}</p>
      </div>
      <span className="block w-full h-px m-2 mx-2 bg-gray-700"></span>
    </>
  );
};

export default ContactItem;
