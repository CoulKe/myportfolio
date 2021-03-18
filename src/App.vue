<template>
  <div class="themeMobileWrapper">
      <p>Choose theme: </p>
    <div class="themeMobile">
      <input
        type="checkbox"
        name="themeCheckMobile"
        id="themeCheckMobile"
        hidden
      />
      <div id="switchMobile"></div>
    </div>
  </div>
  <nav>
    <div class="theme">
      <input type="checkbox" name="themeCheck" id="themeCheck" hidden />
      <div id="switch"></div>
    </div>
    <ul>
      <li><a href="/#about">About</a></li>
      <li><a href="/#projects">Projects</a></li>
      <li><a href="/#skills">Skills</a></li>
      <li><a href="/#contacts">Contacts</a></li>
    </ul>
  </nav>

  <router-view />
  <footer>
    <p>Luteya Coulston 2020&copy; -present</p>
  </footer>
</template>

<script>
// Animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  mounted() {
    let body = document.querySelector("body");
    let theme = document.querySelector(".theme");
    let themeMobile = document.querySelector(".themeMobile");
    let themeCheck = document.querySelector("#themeCheck");
    let themeCheckMobile = document.querySelector("#themeCheckMobile");
    let themeSwitch = document.querySelector("#switch");
    let themeSwitchMobile = document.querySelector("#switchMobile");

    theme.addEventListener("click", toggleDarkMode);
    themeMobile.addEventListener("click", ()=> theme.click());
    document.addEventListener("DOMContentLoaded", () => {
      if (themeCheck.checked) {
        themeCheckMobile.checked = true;
        themeSwitch.style = "right: 0px;";
        themeSwitchMobile.style = "right: 0px;";
        body.classList.remove("light");
        body.classList.add("dark");
      } else {
        themeCheckMobile.checked = false;
        themeSwitch.style = "left: 0px;";
        themeSwitchMobile.style = "left: 0px;";
        body.classList.remove("dark");
        body.classList.add("light");
      }
    });

    function toggleDarkMode() {
      themeCheck.click();
      if (themeCheck.checked) {
        themeSwitch.style = "transform: translateX(80%);";
        themeSwitchMobile.style = "transform: translateX(80%);";
        body.classList.remove("light");
        body.classList.add("dark");
      } else {
        themeSwitch.style = "transform: translateX(10%);";
        themeSwitchMobile.style = "transform: translateX(10%);";
        body.classList.remove("dark");
        body.classList.add("light");
      }
    }
    //Initialize Animate on scroll
    AOS.init();
  },
};
</script>

<style lang='scss'>
@import "./styles/normalize.min.css";
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
//light mode
.light {
  background-color: #fefefe;
  .themeMobileWrapper {
  background-color: #fff;
}
  .theme, .themeMobile {
    border: 2px solid $darkerBlue;

    #switch, #switchMobile {
      background-color: $darkerBlue;
    }
  }
  footer {
    background-color: rgb(4, 86, 124);
    color: #fff;
  }
  nav {
    border-top: 2px solid #a8a7a7;
    background-color: #fff;
    ul {
      li {
        a {
          color: $darkerBlue;
        }
      }
    }
  }
  main {
    section {
      h1 {
        color: rgb(99, 0, 99);
      }
    }
    section::after {
      color: $darkerBlue;
    }
  }
}
//dark mode
.dark {
  background-color: $dark;
  color: $darkerWhite;
  mark {
    background-color: $darkerWhite;
    color: $dark;
  }
  .themeMobileWrapper{
    border-bottom: 2px solid $darkerWhite;
  }
  .theme, .themeMobile {
    border: 2px solid #fff;

    #switch, #switchMobile {
      background-color: #fff;
    }
  }
  img {
    filter: brightness(50%);
  }
  a {
    color: $darkerWhite;
  }
  nav {
    border-top: 2px solid #a8a7a7;
    background-color: $lightGrey;
  }
  main {
    section {
      h1 {
        color: $darkerWhite;
      }
    }
    section::after {
      color: $darkerWhite;
    }
  }
  footer {
    background-color: $lightGrey;
    color: $darkerWhite;
  }
}
//Layout
.themeMobileWrapper {
  width: 100%;
  height: 50px;
  @include flexbox;
  @include align-items(center);
  padding-right: 8px;
  @include justify-content(center);
}
.theme, .themeMobile {
  width: 60px;
  height: 40px;
  position: relative;
  border-radius: 60px;
  @include flexbox;
  @include align-items(center);
  cursor: pointer;

  #switchMobile, #switch {
    position: absolute;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    transition-duration: 500ms;
    transition-property: all;
    transition-timing-function: ease;
  }
}
body {
  position: relative;
  overflow-x: hidden;
  line-height: 1.5rem;
  font-size: 1rem;
  font-family: "Rubik", Arial, Helvetica, sans-serif;
}

nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  @include flexbox;
  @include align-items(center);
  padding: 0.5rem;
  z-index: 9999;

  ul {
    width: 100%;
    @include flexbox;
    @include justify-content(space-around);
    list-style-type: none;
    li {
      a {
        padding: 2px;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }
}
main {
  @include flexbox;
  word-break: keep-all;
  @include flex-direction(column);
  margin: 0em 1.5em 60px 1.5em;
  section::first-letter {
    font-size: larger;
  }
  section {
    h1 {
      text-align: center;
      font-size: medium;
      line-height: 24px;
      padding-top: 0.5rem;
      color: rgb(99, 0, 99);
      text-transform: uppercase;
    }
  }

  section::after {
    content: "***";
    @include flexbox;
    color: $darkerBlue;
    font-weight: 900;
    font-size: larger;
    @include justify-content(center);
    padding: 0.5rem;
  }
}
footer {
  text-align: center;
  padding: 1rem;
  margin-bottom: 50px; //for mobile devices
}
@media (max-width: 399px) {
  .theme{
    display: none;
  }
}
@media (min-width: 400px) {
  .themeMobileWrapper {
    display: none;
  }
  
  section {
    padding-top: 2rem;
  }
  nav {
    position: fixed;
    box-shadow: 0px 15px 10px -20px #111;
    top: 0;
    z-index: 3;
    ul {
      width: 60%;
      margin: auto;
    }
  }
  footer {
    margin: 0;
  }
}
</style>
