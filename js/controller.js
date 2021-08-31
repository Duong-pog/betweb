const controller = {};
controller.register = (data) => {

  if (data.firstName.trim() === "") {
    document.getElementById("first-name-error").innerText =
      "*Tên họ không được bỏ trống...";
  } else {
    document.getElementById("first-name-error").innerText = ""; // div rỗng => height == 0
  }

  if (data.lastName.trim() === "") {
    document.getElementById("last-name-error").innerText =
      "*Tên thật không được bỏ trống...";
  } else {
    document.getElementById("last-name-error").innerText = "";
  }

  if (data.email.trim() === "") {
    document.getElementById("email-error").innerText =
      "*Email không được bỏ trống...";
  } else {
    document.getElementById("email-error").innerText = "";
  }

  if (data.password.trim() === "") {
    document.getElementById("password-error").innerText =
      "*Mật khẩu không được bỏ trống...";
  } else {
    document.getElementById("password-error").innerText = "";
  }
  if (data.confirmPassword.trim() === "") {
    document.getElementById("confirm-password-error").innerText =
      "*Vui lòng xác thực lại mật khẩu..";
  } else if (data.confirmPassword.trim() !== data.password.trim()) {
    document.getElementById("confirm-password-error").innerText =
      "*Mật khẩu không khớp...";
  } else {
    document.getElementById("confirm-password-error").innerText = "";
  }

  ///  Hiểu là các bước trên chỉ là để in ra lỗi
  // view.setActiveScreen('loginScreen');



  /// đây là bước kiểm tra điều kiện đăng ký
  if (data.firstName !== "" &&
    data.lastName !== "" &&
    data.email !== "" &&
    data.password !== "" &&
    data.confirmPassword !== "" &&
    data.password === data.confirmPassword) {
    model.register(data); // gọi tới firebase để tạo một người dùng mới
  }
};

///////////////////////
//////// thao tác trong login 
controller.login = (dataLogin) => {
  if (dataLogin.email.trim() === "") {
      document.getElementById("email-error").
          innerText = `*Vui lòng không bỏ trống email..`
  }
  else {
      document.getElementById("email-error").
          innerText = '';
  }
  if (dataLogin.password === "") {
      document.getElementById("password-error").
          innerText = `*Vui lòng không bỏ trống mật khẩu...`
  }
  else {
      document.getElementById("password-error").
          innerText = '';
  }

  /// Phần kiểm tra email và pass != "". 
  // Nếu khác rỗng thì mình đi vào phần model.login(dataLogin)
  if (dataLogin.email !== "" &&
      dataLogin.password !== "") {
      model.login(dataLogin);
  }

};