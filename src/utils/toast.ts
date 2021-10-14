import { toast } from "react-toastify";

export const showSuccessToast = (message: string) => {
  return toast.success(`${message}`, {
    position: "top-right",
    autoClose: 5000,
    className: "bg-green-900 text-white",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showErrorToast = (message: string) => {
  return toast.error(`${message}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    className: "bg-red-900 text-white",
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
