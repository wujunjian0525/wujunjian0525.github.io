(() => {
  var navEl = document.getElementById("theme-nav");
  navEl.addEventListener("click", (e) => {
    if (window.innerWidth <= 600) {
      if (navEl.classList.contains("open")) {
        navEl.style.height = "";
      } else {
        navEl.style.height = 48 + document.querySelector("#theme-nav .nav-items").clientHeight + "px";
      }
      navEl.classList.toggle("open");
    } else {
      if (navEl.classList.contains("open")) {
        navEl.style.height = "";
        navEl.classList.remove("open");
      }
    }
  });
  
  window.addEventListener("resize", (e) => {
    if (navEl.classList.contains("open")) {
      navEl.style.height = 48 + document.querySelector("#theme-nav .nav-items").clientHeight + "px";
    }
    if (window.innerWidth > 600) {
      if (navEl.classList.contains("open")) {
        navEl.style.height = "";
        navEl.classList.remove("open");
      }
    }
  });


  // 切换亮暗模式
  if (document.getElementById("nav-item-light-dark")) {
    let bodyEl = document.body;
    let lightDarkEl = document.getElementById("nav-item-light-dark");

    if (Cookies.get('color-scheme')) {
      bodyEl.setAttribute('data-color-scheme', Cookies.get('color-scheme'))
  }

    lightDarkEl.addEventListener("click", (ev) => {
      const value = bodyEl.getAttribute("data-color-scheme");
      console.log(value);
      if (value === 'auto') {
        // 判断系统默认是否暗黑
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          bodyEl.setAttribute("data-color-scheme", 'light');
          Cookies.set("color-scheme", 'light');
        } else {
          bodyEl.setAttribute("data-color-scheme", 'dark');
          Cookies.set("color-scheme", 'dark');
        }
      }
      else if (value == 'dark') {
        bodyEl.setAttribute("data-color-scheme", 'light');
        Cookies.set("color-scheme", 'light');
      } else if (value == 'light') {
        bodyEl.setAttribute("data-color-scheme", 'dark');
        Cookies.set("color-scheme", 'dark');
      }
    });
  }
})();
