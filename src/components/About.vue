<template>
  <section id="about" data-aos="fade-in">
    <h1>About</h1>
    <div class="about_wrapper">
      <img src="../assets/svg/icons/developer.svg" alt="Man with computer icon" />
      <div id="about_description">
        <p>
          Hello, my name is Coulston and I am a programmer who likes to put his
          skills into practice.
        </p>
        <p>
          Development first caught my attention back in college while I built a
          Visual Basic school management software and since then I just kept
          developing and researching.
        </p>
        <p>
          Currently I'm more focused with web development and design as it's
          more than interesting to me, it's my love!
        </p>
        <p>
          <a href="#projects">Check my projects</a> to see part of my work and
          <a href="#contactForm">contact</a> me for any customized project.
        </p>
        <p>
          I'm as well a self acclaimed poet and part of my hobbies just involves
          writing. The <a href="#typingGame">typing game </a> contains some of
          my old poems.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  margin: auto;
}
.dark{
  img{
    background-color: $lightGrey;
    padding: 2px;
  }
}
.about_wrapper {
  display: flex;
  flex-direction: column;
  img {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    box-shadow: 0px 0px 4px grey;
    margin-bottom: 4px;
  }
}
@media (min-width: 700px) {
  .about_wrapper {
    display: flex;
    flex-direction: row;
    img{
      width: 100%;
      height: 100%;
      @include flex(80%);
      max-height: 200px;
      margin: 0px;
      border-radius: 0%;
      box-shadow: none;
      padding-right: 0.5rem;
    }
  }
}
@media (min-width: 400px) {
  .about_wrapper{
    img{
      width: 100%;
    border-radius: 0%;
    box-shadow: none;
  }
  }
}
</style>