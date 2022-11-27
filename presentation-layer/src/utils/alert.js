import Swal from 'sweetalert2';

export const showAlert = (config) => {
  const { title, text, icon, confirmButtonText } = config;
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    confirmButtonText: `${confirmButtonText}`,
    position: 'center',
  });
};
