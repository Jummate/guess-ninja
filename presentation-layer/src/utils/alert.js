import swal from "sweetalert";

export const showAlert = () => {
  // const { title, text, icon, confirmButtonText } = config;
  const title = "Title";
  const text = "Text";
  swal({
    title: `${title}`,
    text: `${text}`,
    // icon: `${icon}`,
    // confirmButtonText: `${confirmButtonText}`,
    position: "center",
    timer: 2000,
  });
};
