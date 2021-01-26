<template>
  <nav>
    <ul>
      <li><a href="/#about">About</a></li>
      <li><a href="/#projects">Projects</a></li>
      <li><a href="/#skills">Skills</a></li>
      <li><a href="/#contacts">Contacts</a></li>
    </ul>
  </nav>

  <router-view />
  <footer>
    <p>Luteya Coulston 2020&copy; - present</p>
  </footer>
</template>

<script>
// Animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  mounted() {
    //Initialize Animate on scroll
    AOS.init();
  },
};
</script>

<style lang='scss'>
@import "./styles/normalize.min.css";
@import "./styles/_variables.scss";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
body {
  position: relative;
  overflow-x: hidden;
  background-color: #fefefe;
  line-height: 1.5rem;
  font-size: 1rem;
  font-family: "Rubik", Arial, Helvetica, sans-serif;
}

nav {
  position: fixed;
  bottom: 0;
  border-top: 2px solid #a8a7a7;
  width: 100%;
  height: 50px;
  background-color: #fff;
  @include flexbox;
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
        color: $darkerBlue;
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
  background-color: rgb(4, 86, 124);
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-bottom: 50px; //for mobile devices
}
@media (min-width: 400px) {
  section {
    padding-top: 2rem;
  }
  nav {
    position: fixed;
    box-shadow: 0px 15px 10px -20px #111;
    top: 0;
    z-index: 3;
    ul{
      width: 60%;
      margin: auto;
    }
  }
  footer {
    margin: 0;
  }
}
</style>
