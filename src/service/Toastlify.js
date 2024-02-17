import { toast } from "react-toastify";

const toastConfig = {
  position: "top-right",
  autoClose: 10000,

  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const errortoast = (message) => {
  toast.error(message, toastConfig);
};
export const successtoast = (message) => {
  toast.success(message, toastConfig);
};
export const warningtoast = (message) => {
  toast.warning(message, toastConfig);
};
export const infotoast = (message) => {
  toast.info(message, toastConfig);
};
