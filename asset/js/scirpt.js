function getData() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let massage = document.getElementById("massage").value;

  if (nama == "") {
    return alert("Please type your nama");
  } else if (email == "") {
    return alert("Please type your email");
  } else if (phone == "") {
    return alert("Please type your phone");
  } else if (subject == "") {
    return alert("Please type your subject");
  } else if (massage == "") {
    return alert("Please type your message");
  }

  const emailDestination = "ikhsanp34@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${emailDestination}?subject=${subject}&body= Halo bang nama saya, ${nama}, saya ingin ${massage}. bisakah anda menghubungi saya ${phone}`;
  a.click();

  const data = {
    nama,
    email,
    phone,
    subject,
    massage,
  };

  console.log(data);
}
