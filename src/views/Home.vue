<template>
  <Banner />
  <main class="container">
    <About />
    <Projects />
    <Skills />
    <Contacts />
  </main>
</template>

<script>
//components
import About from "../components/About";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
export default {
  components: {
    About,
    Banner,
    Contacts,
    Projects,
    Skills,
  },
};
</script>