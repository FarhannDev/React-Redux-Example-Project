import Swal from "sweetalert2";

export const showToastNotification = (icon = "", title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon: `${icon}`,
    title: `${title}`,
  });
};

export const showMessageSuccess = (title, text) => {
  return Swal.fire({
    icon: `success`,
    title: `${title}`,
    text: `${text}`,
  });
};

export const showMessageError = (title, text) => {
  return Swal.fire({
    icon: `error`,
    title: `${title}`,
    text: `${text}`,
  });
};

export const messageConfirm = (icon, text, title, data) => {
  return Swal.fire({
    title: "Konfirmasi",
    text: "Apakah kamu yakin menghapus postingan ini?",
    icon: "warning",
    showCancelButton: true,
    showCloseButton: true,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Ya, hapus",
  }).then((result) => {
    if (result.isConfirmed) {
      // eslint-disable-next-line no-sequences, no-unused-expressions
      data, Swal.fire(`${title}`, `${text}`, `${icon}`);
    }
  });
};
