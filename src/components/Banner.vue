<template>
  <header id="particles-js" class="banner">
    <div id="intro">
      <h3>I code and <span id="design-white">design</span></h3>
      <p id="introMessage">
        Contact me for responsive, trendy and beautiful websites and web apps
      </p>

      <div class="intro-links">
        <a href="/#projects" id="projectsButton">See projects</a>
        <a href="/#contactForm" id="messageButton"
          >Leave a message <i class="fas fa-envelope"></i
        ></a>
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
//light theme
.light {
  header {
    color: #fff;
    background: linear-gradient(to right, $lighterBlue, $darkerBlue);
    #intro {
      h3,
      p {
        text-shadow: 1px 2px #111;
      }
      #design-white {
        background-color: #fff;
        color: $darkerBlue;
        text-shadow: none;
        padding: 8px;
        display: inline-block;
        animation: design-white;
        animation-duration: 1000ms;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
      }
      @keyframes design-white {
        0% {
          color: #fff;
          text-shadow: 1px 2px #111;
          background-color: transparent;
        }
        50% {
          color: #fff;
          text-shadow: 1px 2px #111;
          background-color: transparent;
        }
      }
    }
  }
  .intro-links {
    #projectsButton {
      background-color: #fff;
    }

    #messageButton {
      border: 2px solid white;
      color: white;
    }
    #messageButton:hover,
    #messageButton:focus {
      background-color: #fff;
      color: $darkerBlue;
    }
    #projectsButton:hover,
    #projectsButton:focus {
      background-color: inherit;
      color: #fff;
      border: 1px solid #fff;
    }
  }
}
//dark theme
.dark {
  header {
    color: $darkerWhite;
    background: $dark;
    #intro {
      #design-white {
        background-color: $lightGrey;
        color: $darkerWhite;
      }
    }
  }
  #intro {
    .intro-links {
      #projectsButton {
        background-color: $darkerWhite;
        color: $dark;
        font-weight: 600;
      }

      #messageButton {
        border: 2px solid $darkerWhite;
        color: $darkerWhite;
        font-weight: 500;
      }
      #messageButton:hover,
      #messageButton:focus {
        background-color: $darkerWhite;
        color: $dark;
      }
      #projectsButton:hover,
      #projectsButton:focus {
        background-color: inherit;
        color: $darkerWhite;
        border: 1px solid $darkerWhite;
      }
    }
  }
}
//layout
header {
  height: calc(100vh - 90px);
  @include flexbox;
  @include align-items(center);
  @include justify-content(center);

  #intro {
    padding: 1.5rem;
    line-height: 2.5rem;

    h3 {
      font-size: 40px;
    }
    p {
      line-height: 2rem;
      font-size: 20px;
    }

    .intro-links {
      @include flexbox;
      @include flex-direction(column);
      #messageButton,
      #projectsButton {
        height: fit-content;
        width: fit-content;
        outline: none;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 4px;
        padding: 0.2rem;
        margin-top: 6px;
      }

      #projectsButton:hover,
      #projectsButton:focus {
        background-color: inherit;
        font-weight: 400;
        margin-top: 4px;
      }
    }
  }
}

@media (min-width: 400px) {
  header {
    text-align: center;
    height: calc(100vh - 50px);
    #intro {
      #introMessage {
        margin-top: 8px;
      }
      .intro-links {
        @include flexbox;
        @include flex-direction(row);
        @include align-content(center);
        @include justify-content(space-around);
        margin-top: 2rem;
        padding: 1rem;
      }
    }
  }
}
</style>