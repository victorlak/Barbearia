import Swal from "sweetalert2";
export async function  Alert(title, text, icon ){
    await Swal.fire({
        title: title,
        text: text,
        icon: icon
  });

}