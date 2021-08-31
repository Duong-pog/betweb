const components = {};

// toan bộ code html sẽ ở trong components.js này
components.registerScreen = `
<div class="register-container ">
<div class="aside-right">
  <div class="header">
    <h3>Tên trang web ở đây</h3>
  </div>

  <!-- code phan input -->
  <form id="register-form">
    <div class="input-name-wrapper">
      <div class="input-wrapper">
        <input type="text" name="firstName" placeholder="Tên họ.." />
        <div class="error" id="first-name-error"></div>
      </div>

      <div class="input-wrapper">
        <input type="text" name="lastName" placeholder="Tên thật..." />
        <div class="error" id="last-name-error"></div>
      </div>
    </div>

    <!-- code the email -->
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email..." />
      <div class="error" id="email-error"></div>
    </div>

    <div class="input-wrapper">
      <input
        type="password"
        name="password"
        placeholder="Vui lòng nhập mật khẩu..."
      />
      <div class="error" id="password-error"></div>
    </div>

    <div class="input-wrapper">
      <input
        type="password"
        name="confirmPassword"
        placeholder="Xác nhận mật khẩu..."
      />
      <div class="error" id="confirm-password-error"></div>
    </div>

    <!-- da xong cac truong input -->
    <div class="form-action">
      <span class = "cursor-pointer" id="redirect-to-login">Đã có tài khoản? Click để đăng nhập</span>

      <button class="btn" type="submit">Đăng kí</button>
    </div>
  </form>
</div>
</div>
`;

components.loginScreen = `
<div class="login-container">
      <div class="aside-right">
        <div class="header">
          <h3>Tên trang web ở đây</h3>
        </div>

        <!-- code phan input -->
        <form id="login-form">
          <!-- code the email -->
          <div class="input-wrapper">
            <input type="email" name="email" placeholder="Vui lòng nhập email..." />
            <div class="error" id="email-error"></div>
          </div>

          <div class="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Vui lòng nhập mật khẩu..."
            />
            <div class="error" id="password-error"></div>
          </div>

          <!-- da xong cac truong input -->
          <div class="form-action">
            <span class="cursor-pointer" id="redirect-to-register">
              Chưa có tài khoản? Click để đăng kí
            </span>
            <button class="btn" type="submit">Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>`;


  components.homeScreen = `
  <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <a href="#" class="nav-link">
            <span class="link-text logo-text">Tên trang web ở đây</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" id="_home" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
            <span class="link-text">Trang chủ</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" id="_play"  class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-2 5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-2 2c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-11 2v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2zm5 10c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm6 0c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm2-8c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm2-2c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1z"/></svg>
            <span class="link-text">Chơi</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" id="_leaderboard" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M10.382 15.188c-.347.26-.769.401-1.202.401-.803 0-1.207-.981-.641-1.547.307-.307.702-.505 1.133-.566.811-.117 1.167-1.122.57-1.718-.596-.597-1.601-.24-1.718.571-.062.429-.261.827-.566 1.133-.569.568-1.548.164-1.548-.642 0-.435.141-.854.4-1.202.493-.656.032-1.618-.81-1.618s-1.303.961-.811 1.618c.259.347.4.769.4 1.202 0 .805-.979 1.21-1.548.641-.308-.307-.505-.702-.566-1.133-.117-.811-1.122-1.167-1.718-.571-.597.596-.24 1.601.57 1.718.428.062.826.26 1.133.566.569.569.165 1.547-.641 1.547-.435 0-.854-.14-1.202-.401-.655-.49-1.617-.029-1.617.813 0 .841.962 1.303 1.618.812.347-.26.769-.401 1.202-.401.805 0 1.21.978.641 1.547-.307.307-.702.505-1.133.566-.811.117-1.167 1.122-.57 1.718.596.597 1.601.24 1.718-.571.062-.429.261-.827.566-1.133.569-.568 1.548-.164 1.548.642 0 .435-.141.854-.4 1.202-.492.655-.034 1.618.81 1.618.839 0 1.306-.96.811-1.62-.26-.344-.4-.764-.4-1.195 0-.807.979-1.216 1.548-.647.308.308.505.703.566 1.134.117.811 1.122 1.167 1.718.571.596-.595.242-1.603-.572-1.718-.426-.061-.822-.258-1.127-.562-.572-.571-.169-1.551.637-1.551.435 0 .854.14 1.202.401.654.489 1.617.031 1.617-.813 0-.843-.963-1.303-1.618-.812zm-5.364 2.148c-.273 0-.495-.221-.495-.495 0-.273.222-.495.495-.495s.495.222.495.495c0 .274-.222.495-.495.495zm.63-1.571c-.429 0-.775-.348-.775-.776 0-.429.347-.777.775-.777s.777.348.777.777c.001.428-.348.776-.777.776zm1.464 1.484c-.363 0-.657-.294-.657-.657s.294-.658.657-.658.657.295.657.658-.293.657-.657.657zm16.888-14.249v11.535c0 4.603-3.203 5.804-9 9.465-1.318-.833-2.496-1.535-3.539-2.183.575-.481.894-1.055 1.021-1.726.731.456 1.564.962 2.519 1.551 5.313-3.281 7-4.065 7-7.107v-9.575c-2.446-.124-4.5-.611-7-2.416-2.5 1.805-4.554 2.292-7 2.416v3.806c-.541-.484-1.244-.766-2.001-.766v-5c3.516 0 5.629-.134 9-3 3.371 2.866 5.484 3 9 3zm-4 11.535c0 1.606-.415 1.935-5 4.76v-14.353c1.827 1.105 3.474 1.6 5 1.833v7.76z"/></svg>
            <span class="link-text">Bảng xếp hạng</span>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" id="_help" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            <span class="link-text">Hỗ trợ</span>
          </a>
        </li>

        <li class="nav-item">
          <p id="logOutButton" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"/></svg>
            <span class="link-text">Đăng xuất</span>
          </p>
        </li>
      </ul>
    </nav>
    <main>
  <div class="welcome">
        <h1>WELCOME TO Tên trang web ở đây</h1>
      </div>
      <div class="introduction">
        <h3>Tên trang web ở đây là gì?</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">Mô tả bla bla</p>
        <h3>Trang web nổi tiếng như nào?</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">Mô tả về số lượng người dùng ở đây</p>
      </div>
      



      <div class="about">
        <div class="about_image">
          <img src="../img/electronics_image.png" width="600px" height="350px" alt="">
        </div>
        <div class="about_text">
          <h1>Câu khách 1</h1>
          <h3>Dụ chơi bet ở đây =))</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/electronics.html">Link1</a>
        </div>
      </div>

      <div class="about">
        <div class="about_text">
          <h1>Câu khách 2</h1>
          <h3>Làm giàu ko khó bla bla</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/softwares.html">Link2</a>
        </div>
        <div class="about_image">
          <img src="../img/software_image.png" width="600px" height="350px" alt="">
        </div>
      </div>

      <div class="introduction login">
        <h3>Hãy tham gia với chúng tôi</h3>
        <a class="special" href="#">Tạo tài khoản</a>
      </div>
      </main>
      <footer class="footer-basic-centered">
      <p class="footer-links1">
        <a href="#">Trang chủ</a>
  
        <a href="#">Bảng xếp hạng</a>

        <a href="#">Chơi game</a>
  
        <a href="#">Hỗ trợ khách hàng</a>
      </p>
  
      <p class="footer-links">
          <a href="#">Điều khoản</a>
          ·
          <a href="#">Chính sách</a>
          
      </p>
  
      <p class="footer-company-name">Copyright &copy; Snakeon 2020</p>
  
  </footer>
  `
  components.playScreen = `
  <style>
        html,body{
            height: 100%;
            margin: 0
        }
        body{
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("");
        }
        div#app{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        canvas{
            border: 1px solid white
        }
    </style>
    <p id="score" style="color: white; font-size: 30px;">Haha lười nên chơi tạm game rắn nhé :))</p>
    <p id="highestscore" style="color: white; font-size: 30px;">Dùng các phím mũi tên và chúc may mắn nhé ;) </p>
    <canvas width = "400" height = "400" id="game"></canvas>
    <button id = "return" class = "btn">Trở lại</button>
  `  

components.leaderBoard = `
<nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <a href="#" class="nav-link">
            <span class="link-text logo-text">Tên trang web ở đây</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" id="_home" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
            <span class="link-text">Home</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" id="_play"  class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-2 5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-2 2c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-11 2v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2zm5 10c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm6 0c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm2-8c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm2-2c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1z"/></svg>
            <span class="link-text">Play</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" id="_leaderboard" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M10.382 15.188c-.347.26-.769.401-1.202.401-.803 0-1.207-.981-.641-1.547.307-.307.702-.505 1.133-.566.811-.117 1.167-1.122.57-1.718-.596-.597-1.601-.24-1.718.571-.062.429-.261.827-.566 1.133-.569.568-1.548.164-1.548-.642 0-.435.141-.854.4-1.202.493-.656.032-1.618-.81-1.618s-1.303.961-.811 1.618c.259.347.4.769.4 1.202 0 .805-.979 1.21-1.548.641-.308-.307-.505-.702-.566-1.133-.117-.811-1.122-1.167-1.718-.571-.597.596-.24 1.601.57 1.718.428.062.826.26 1.133.566.569.569.165 1.547-.641 1.547-.435 0-.854-.14-1.202-.401-.655-.49-1.617-.029-1.617.813 0 .841.962 1.303 1.618.812.347-.26.769-.401 1.202-.401.805 0 1.21.978.641 1.547-.307.307-.702.505-1.133.566-.811.117-1.167 1.122-.57 1.718.596.597 1.601.24 1.718-.571.062-.429.261-.827.566-1.133.569-.568 1.548-.164 1.548.642 0 .435-.141.854-.4 1.202-.492.655-.034 1.618.81 1.618.839 0 1.306-.96.811-1.62-.26-.344-.4-.764-.4-1.195 0-.807.979-1.216 1.548-.647.308.308.505.703.566 1.134.117.811 1.122 1.167 1.718.571.596-.595.242-1.603-.572-1.718-.426-.061-.822-.258-1.127-.562-.572-.571-.169-1.551.637-1.551.435 0 .854.14 1.202.401.654.489 1.617.031 1.617-.813 0-.843-.963-1.303-1.618-.812zm-5.364 2.148c-.273 0-.495-.221-.495-.495 0-.273.222-.495.495-.495s.495.222.495.495c0 .274-.222.495-.495.495zm.63-1.571c-.429 0-.775-.348-.775-.776 0-.429.347-.777.775-.777s.777.348.777.777c.001.428-.348.776-.777.776zm1.464 1.484c-.363 0-.657-.294-.657-.657s.294-.658.657-.658.657.295.657.658-.293.657-.657.657zm16.888-14.249v11.535c0 4.603-3.203 5.804-9 9.465-1.318-.833-2.496-1.535-3.539-2.183.575-.481.894-1.055 1.021-1.726.731.456 1.564.962 2.519 1.551 5.313-3.281 7-4.065 7-7.107v-9.575c-2.446-.124-4.5-.611-7-2.416-2.5 1.805-4.554 2.292-7 2.416v3.806c-.541-.484-1.244-.766-2.001-.766v-5c3.516 0 5.629-.134 9-3 3.371 2.866 5.484 3 9 3zm-4 11.535c0 1.606-.415 1.935-5 4.76v-14.353c1.827 1.105 3.474 1.6 5 1.833v7.76z"/></svg>
            <span class="link-text">Leaderboard</span>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" id="_help" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            <span class="link-text">Help</span>
          </a>
        </li>

        <li class="nav-item">
          <p id="logOutButton" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"/></svg>
            <span class="link-text">Log out</span>
          </p>
        </li>
      </ul>
    </nav>
    <main>
    <div class="wrapper">
      <div class="lboard_section">
        <div class="lboard_tabs">
          <div class="tabs">
            <ul>
              
              <li class="active" data-li="month">Greatest scores of all time</li>
              
            </ul>
          </div>
        </div>
    
        <div class="lboard_wrap">
          <div class="lboard_item month" style="display: block;">
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>1.</span> Dương</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 95%"></div>
                </div>
              </div>
              <div class="points">
                1195 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>2.</span>Johnson</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 85%"></div>
                </div>
              </div>
              <div class="points">
                1185 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>3.</span>Charles John</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 75%"></div>
                </div>
              </div>
              <div class="points">
                1160 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>4.</span>Scarlett Angela</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 65%"></div>
                </div>
              </div>
              <div class="points">
                1130 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>5.</span>Rosey</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 55%"></div>
                </div>
              </div>
              <div class="points">
                1110 points
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </main>
`  

components.helpScreen = `
<nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <a href="#" class="nav-link">
            <span class="link-text logo-text">Tên trang web ở đây</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" id="_home" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
            <span class="link-text">Home</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" id="_play"  class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-2 5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-2 2c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-11 2v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2zm5 10c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm6 0c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm2-8c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm2-2c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1z"/></svg>
            <span class="link-text">Play</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" id="_leaderboard" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M10.382 15.188c-.347.26-.769.401-1.202.401-.803 0-1.207-.981-.641-1.547.307-.307.702-.505 1.133-.566.811-.117 1.167-1.122.57-1.718-.596-.597-1.601-.24-1.718.571-.062.429-.261.827-.566 1.133-.569.568-1.548.164-1.548-.642 0-.435.141-.854.4-1.202.493-.656.032-1.618-.81-1.618s-1.303.961-.811 1.618c.259.347.4.769.4 1.202 0 .805-.979 1.21-1.548.641-.308-.307-.505-.702-.566-1.133-.117-.811-1.122-1.167-1.718-.571-.597.596-.24 1.601.57 1.718.428.062.826.26 1.133.566.569.569.165 1.547-.641 1.547-.435 0-.854-.14-1.202-.401-.655-.49-1.617-.029-1.617.813 0 .841.962 1.303 1.618.812.347-.26.769-.401 1.202-.401.805 0 1.21.978.641 1.547-.307.307-.702.505-1.133.566-.811.117-1.167 1.122-.57 1.718.596.597 1.601.24 1.718-.571.062-.429.261-.827.566-1.133.569-.568 1.548-.164 1.548.642 0 .435-.141.854-.4 1.202-.492.655-.034 1.618.81 1.618.839 0 1.306-.96.811-1.62-.26-.344-.4-.764-.4-1.195 0-.807.979-1.216 1.548-.647.308.308.505.703.566 1.134.117.811 1.122 1.167 1.718.571.596-.595.242-1.603-.572-1.718-.426-.061-.822-.258-1.127-.562-.572-.571-.169-1.551.637-1.551.435 0 .854.14 1.202.401.654.489 1.617.031 1.617-.813 0-.843-.963-1.303-1.618-.812zm-5.364 2.148c-.273 0-.495-.221-.495-.495 0-.273.222-.495.495-.495s.495.222.495.495c0 .274-.222.495-.495.495zm.63-1.571c-.429 0-.775-.348-.775-.776 0-.429.347-.777.775-.777s.777.348.777.777c.001.428-.348.776-.777.776zm1.464 1.484c-.363 0-.657-.294-.657-.657s.294-.658.657-.658.657.295.657.658-.293.657-.657.657zm16.888-14.249v11.535c0 4.603-3.203 5.804-9 9.465-1.318-.833-2.496-1.535-3.539-2.183.575-.481.894-1.055 1.021-1.726.731.456 1.564.962 2.519 1.551 5.313-3.281 7-4.065 7-7.107v-9.575c-2.446-.124-4.5-.611-7-2.416-2.5 1.805-4.554 2.292-7 2.416v3.806c-.541-.484-1.244-.766-2.001-.766v-5c3.516 0 5.629-.134 9-3 3.371 2.866 5.484 3 9 3zm-4 11.535c0 1.606-.415 1.935-5 4.76v-14.353c1.827 1.105 3.474 1.6 5 1.833v7.76z"/></svg>
            <span class="link-text">Leaderboard</span>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" id="_help" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            <span class="link-text">Help</span>
          </a>
        </li>

        <li class="nav-item">
          <p id="logOutButton" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"/></svg>
            <span class="link-text">Log out</span>
          </p>
        </li>
      </ul>
    </nav>
    <main>
    <form class="help _form" action="">
      <h3>Contact Information</h3>
      <input class="input-field" type="text" placeholder="First Name">
      <input class="input-field" type="text" placeholder="Email Address">
      <p class="label">If you are under 13 years old, please provide your parent's email address</p>
      <input class="input-field" type="text" placeholder="Confirm Email Address">
      <input class="input-field" type="text" placeholder="Username">
      <h3>Issue Details</h3>
      <label for="">What device are you having the problem on?</label>
      <select class="device-select" name="" id="">
        <option class="hidden" value selected="selected">Please Select...</option>
        <option label="PC" value="string:Pc">PC</option>
        <option label="Mac" value="string:Mac">Mac</option>
        <option label="Chromebook" value="string:Chromebook">Chromebook</option>
        <option label="iPhone" value="string:Iphone">iPhone</option>
        <option label="iPad" value="string:Ipad">iPad</option>
        <option label="Android Phone" value="string:AndroidPhone">Android Phone</option>
        <option label="Android Tablet" value="string:AndroidTablet">Android Tablet</option>
        <option label="Amazon Device" value="string:AmazonDevice">Amazon Device</option>
        <option label="Xbox" value="string:Xbox">Xbox</option>
      </select>
      <label for="">Type of help category</label>
      <select class="device-select" name="" id="">
        <option class="hidden" value selected="selected">Please Select...</option>
        <option label="Account Hacked or Can't Log in" value="object:30">Account Hacked or Can't Log in</option>
        <option label="Billing &amp; Payments" value="object:31">Billing &amp; Payments</option>
        <option label="Bug Report" value="object:32">Bug Report</option>
        <option label="DMCA" value="object:35">DMCA</option>
        <option label="Gift Card" value="object:37">Gift Card</option>
        <option label="How To" value="object:38">How To</option>
        <option label="Ideas &amp; Suggestions" value="object:39">Ideas &amp; Suggestions</option>
        <option label="Moderation" value="object:40">Moderation</option>
        <option label="User Safety Concern" value="object:43">User Safety Concern</option>
        <option label="Contests &amp; Events" value="object:44">Contests &amp; Events</option>
        <option label="Technical Support" value="object:45">Technical Support</option>
      </select>
      <label for="">Description of issue</label>
      <textarea name="message" id="" placeholder="Please describe the issue that you are facing. Include any relevant information like where the issue is occurring or the error message." rows="6"></textarea>
    </form>
    <div style="text-align: center;">
      <button>Submit</button>
    </div>
    </main>
`  