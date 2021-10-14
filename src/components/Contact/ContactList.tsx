import ContactItem from "./ContactItem";

interface Props {
  contacts: any[];
}

const ContactList: React.FC<Props> = ({ contacts }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactItem key={contact._id} {...contact} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center mt-24">
          <h1 className="text-xl font-bold text-white">No contacts yet</h1>
          <button className="hover:text-gray-300 mt-2 text-gray-400 underline">
            Add new
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
