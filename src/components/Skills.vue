<template>
  <section id="skills" data-aos="zoom-in">
    <h1>Skills</h1>
    <div class="skills_wrapper">
      <div class="skill">
        <img src="../assets/svg/icons/https.svg" alt="Web development" />
        <h1>Web development</h1>
      </div>
      <div class="skill">
        <img
          src="../assets/svg/icons/software-development.svg"
          alt="Desktop development"
        />
        <h1>Desktop development</h1>
      </div>
      <div class="skill">
        <img src="../assets/svg/icons/seo.svg" alt="SEO icon" />
        <h1>Search Engine Optimization</h1>
      </div>
      <div class="skill">
        <img src="../assets/svg/icons/website-ui-ux.svg" alt="UI/UX icon" />
        <h1>UI/UX design</h1>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.light{
  h1{
    color: #282828;
  }
}
.dark{
  h1{
    color: $darkerWhite;
  }
  img{
    background-color: $darkerWhite;
  }
}
#skills {
  width: 100%;
}
.skills_wrapper {
  @include flexbox;
  @include flex-wrap(wrap);
  @include align-items(center);
  @include justify-content(center);
  text-align: center;
  .skill{
    flex: 40%;
  }
  h1{
    margin: 0px;
    padding: 0px;
    font-weight: 700;
    font-size: small;
  }
  img{
    width: 50px;
    height: 50px;
  }
}
@media(min-width: 700px){
  .skills_wrapper{
    @include flex-direction(row);
    @include flex-wrap(nowrap);
  }
}
</style>