import swal from 'sweetalert'

import { currentUser } from './currentUser.js'

export async function cheackAdmin() {
  if (currentUser?.role != "admin") {
    await swal({
      title: "Error",
      text: "This page is only for Admin",
      icon: "warning",
    })
    window.location.href = '/profile'
  }
}