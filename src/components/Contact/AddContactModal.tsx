import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "../Modal";
import { useQueryClient } from "react-query";
import { useAddContact } from "../../utils/hooks/contact";
import { showSuccessToast } from "../../utils/toast";
import { PrimaryButton } from "../CustomButton";

import { FormGroup } from "../Form";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const AddContactModal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const queryClient = useQueryClient();

  const [dials, setDials] = useState([
    { kind: "mobile", dial: "" },
    { kind: "home", dial: "" },
  ]);

  const addContactMutation = useAddContact({
    onMutate: async (contact) => {
      // perform optimistic update
      await queryClient.cancelQueries(["contacts", ""]);
      const previousContacts = queryClient.getQueryData(["contact", ""]);
      queryClient.setQueryData(["contacts", ""], (old: any) => [
        ...old,
        contact,
      ]);
      return { previousContacts };
    },
    onError: (_err: any, _newContact, context: any) => {
      // rollback to previous state
      queryClient.setQueryData(
        ["contacts", ""],
        (context as any).previousTodos
      );
    },
    onSettled: () => {
      // refresh
      queryClient.invalidateQueries(["contacts", ""]);
    },
    onSuccess: (result: any) => {
      setForm({ email: "", name: "" });
      setDials([
        { kind: "home", dial: "" },
        { kind: "mobile", dial: "" },
      ]);
      showSuccessToast("Contact Added");
      closeModal();
    },
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  };

  const handleDialChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDials((old) => {
      const obj = old.find((dial) => dial.kind === name)!;
      obj.dial = value.replace(/\D+/gi, ""); // remove none numbers
      return [...old];
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addContactMutation.mutate({ ...form, dials });
  };
  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      contentLabel="Add new contact"
      title="Add new contact"
    >
      <form onSubmit={handleSubmit}>
        <FormGroup
          label="Name"
          placeholder="Contact name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleFormChange}
          className="mb-4"
          required
        />
        <FormGroup
          label="Email"
          placeholder="Contact email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleFormChange}
          required
        />

        <span className="block h-px mt-6 mb-4 bg-gray-600" />

        <div className="mb-6">
          {dials.map((obj, idx) => (
            <FormGroup
              key={"modal-" + idx}
              label={obj.kind}
              placeholder="09090909090"
              name={obj.kind}
              type="tel"
              className="mb-4"
              value={obj.dial}
              onChange={handleDialChange}
              required={obj.kind === "mobile"}
            />
          ))}
        </div>

        <PrimaryButton isLoading={addContactMutation.isLoading}>
          Add new contact
        </PrimaryButton>
      </form>
    </Modal>
  );
};

export default AddContactModal;
