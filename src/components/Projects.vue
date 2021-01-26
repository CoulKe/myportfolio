<template>
  <section id="projects">
    <h1>Projects</h1>
    <p>
      The following are part of the projects I have done, more to be added
      later. Check my <a href="https://github.com/CoulKe">Github</a> for more
      still in development.
    </p>
    <p>
      <strong data-aos="zoom-in-left"
        >TIP: Click the project to see details</strong
      >
    </p>
    <div id="projects_view">
      <div class="project" data-aos="fade-up">
        <img
          
          src="../assets/images/portolio.jpg"
          alt="Portfolio website screenshot"
        />
        <div class="project-description">
          <h1 class="summary">Portfolio website</h1>
          <div class="full-description">
            <p>
              Full source code and demo on
              <a href="https://github.com/CoulKe/myportfolio">My portfolio</a>
            </p>
            <p>
              A fully responsive site made with <mark>HTML</mark>,
              <mark>JavaScript</mark>, <mark>particles.js</mark> and
              <mark>Sass</mark>/<mark>Css</mark>.
            </p>
          </div>
        </div>
      </div>

      <div class="project" data-aos="fade-up" id="wish">
        <img
          
          src="../assets/images/wish.jpg"
          alt="Wish website screenshot"
        />

        <div class="project-description">
          <h1 class="summary">Wishing website</h1>
          <div class="full-description">
            <p>
              Live version on
              <a href="http://letswish.netlify.app/">Let's wish</a>
            </p>
            <p>
              Full source code and demo on
              <a href="https://github.com/CoulKe/wish">Wish</a>
            </p>
            <p>
              A platform for sending digital wishes made with
              <mark>Vue</mark> and <mark>css</mark>.
            </p>
          </div>
        </div>
      </div>
      <div class="project" data-aos="fade-up" id="typingGame">
        <img
          
          src="../assets/images/speedykey.png"
          alt="typing game screenshot"
        />

        <div class="project-description">
          <h1 class="summary">Speed typing game</h1>
          <div class="full-description">
            <p>
              Live version on
              <a href="https://speedykey.netlify.app/">speedy key</a>
            </p>
            <p>
              Full source code and demo on
              <a href="https://github.com/CoulKe/typing_game">Typing game</a>
            </p>
            <p>
              A speed typing app made with <mark>Vue</mark> and
              <mark>Sass</mark>.
            </p>
            <p>
              <strong><em>NOTE:</em></strong> This project is intentionally made for desktop, on
              mobile is not responsive and may or may not work. If you are a
              developer and would like to make a pull request or fork the
              project to add more features, the follow the code link below.
            </p>
          </div>
        </div>
      </div>
      <div class="project" data-aos="fade-up" id="laravelJobs">
        <img
          
          src="../assets/images/jobs.jpg"
          alt="laravel jobs website screenshot"
        />

        <div class="project-description">
          <h1 class="summary">Jobs searching website</h1>
          <div class="full-description">
            <p>
              Full source code and demo on
              <a href="https://github.com/CoulKe/laravel_jobs_website"
                >Laravel jobs search website</a
              >
            </p>
            <p>
              This project was made with <mark>Laravel 8</mark> (A php
              framework), <mark>JavaScript</mark>,
              <mark>Bootstrap</mark>
              and <mark>Sass</mark> / <mark>Css</mark>
            </p>
            <p>
              It contains dummy data but emulates the functions of a production
              website.
            </p>
            <p>Features:</p>
            <ul>
              <li>Authentication (Login system)</li>
              <li>Secure (Protected against sql injections)</li>
              <li>Pretty urls (No file extensions used)</li>
              <li>CRUD operations including File upload</li>
              <li>Pagination</li>
            </ul>
            <p>
              Currently there's no live version but you can clone it and run it
              locally or host it, link for source code is below. Instructions
              are provided in the README but you can contact for assistance in
              case stuck.
            </p>
          </div>
        </div>
      </div>

      <div class="project" data-aos="fade-up">
        <img
          
          src="../assets/images/imdb.jpg"
          alt="movie info app screenshot"
        />

        <div class="project-description">
          <h1 class="summary">Movie Info Software</h1>
          <div class="full-description">
            <p>
              Full source code and demo on
              <a href="https://github.com/CoulKe/imdb"
                >Movie Info software</a
              >
            </p>
            <p>
              A desktop software made with <mark>Electron</mark> and <mark>Css</mark>.
            </p>
          </div>
        </div>
      </div>
      <div class="project" data-aos="fade-up">
        <img
          
          src="../assets/images/photoedit.jpg"
          alt="photoeditor screenshot"
        />

        <div class="project-description">
          <h1 class="summary">Photo editor</h1>
          <div class="full-description">
            <p>
              Live version on
              <a href="https://photoedit.netlify.app/">Photo editor</a>
            </p>
            <p>
              Full source code and demo on
              <a href="https://github.com/CoulKe/photo-editor"
                >React photo editor</a
              >
            </p>
            <p>
              A Photo editor app made with <mark>React</mark>,
              <mark>Sass</mark>/<mark>Css</mark>.
            </p>
          </div>
        </div>
      </div>
    </div>
    <review
      v-if="displayDesc"
      :showReview="displayDesc"
      :desc="description"
      @update-show-review="toggleDesc"
    ></review>
  </section>
</template>

<script>
import Review from "../components/Review.vue";
export default {
  components: {
    Review,
  },
  data() {
    return {
      /**
       * for description
       */
      displayDesc: false,
      description: ""
    };
  },
  methods: {
    toggleDesc ($event) {
      this.displayDesc = !this.displayDesc
      if (this.displayDesc) {
        this.description = $event.target.parentNode.lastChild.innerHTML
      }
    },
  },
  mounted() {
    let _self = this;
    this.$nextTick(function () {
      const projects = document.querySelectorAll(".project");

      projects.forEach(function (p) {
        p.addEventListener("click", function ($event) {
          _self.toggleDesc($event);
        });
      });
    });
  },
};
</script>

<style lang='scss'>
#projects {
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
  .summary {
    color: #fff;
    background-color: rgb(4, 86, 124);
    margin-top: 0;
    text-align: center;
    cursor: pointer;
  }
  .full-description {
    display: none;
    ul {
      margin-left: 3rem;
      list-style-position: outside;
    }
  }
}
@media (min-width: 700px) {
  #projects_view {
    @include flexbox;
    @include flex-wrap(wrap);
    @include justify-content(space-around);
    padding: 1rem;
    max-width: 1400px;
    margin: auto;
    .project {
      flex: 40%;
      margin: 12px;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }
  }
}
</style>