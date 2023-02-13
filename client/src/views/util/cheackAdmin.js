import swal from "sweetalert";
import { currentUser } from "./currentUser";
export async function cheackAdmin()
{
  const result = currentUser?.role;
  if (!currentUser?.role=="admin") {
    await swal({
      title: "Login Required",
      text: "Please login to continue",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    window.location.href = '/login'
  }
}

export default cheackAdmin