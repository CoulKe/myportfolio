<template>
  <div id="review_wrapper" @click.self="closeReview">
    <div id="project_review">
      <button @click="closeReview">Go back</button>
      <div v-html="desc"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: {
    desc: {
      type: String,
      required: true,
    },
    showReview: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeReview() {
      let showReview = "";
      showReview = !this.showReview;
      this.$emit("update-show-review", showReview);
    },
  },
};
</script>
<style lang='scss'>
.light {
  #review_wrapper {
    background-color: #5c5c5c;
    @supports (backdrop-filter: blur(90px)) {
      background-color: transparent;
      backdrop-filter: contrast(0.7) blur(90px);
    }
    #project_review {
      background-color: #fff;
    }
    button {
      color: #fff;
      background-color: $darkerBlue;
    }
  }
}
.dark {
  #review_wrapper {
    background-color: $darkGrey;
    @supports (backdrop-filter: blur(90px)) {
      background-color: transparent;
      backdrop-filter: contrast(0.7) blur(90px);
    }
    #project_review {
      background-color: $lightGrey;
    }
    button {
      color: $dark;
      background-color: $darkerWhite;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
//layout
#review_wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  @include flexbox;
  @include flex-direction(column);
  @include justify-content(center);

  #project_review {
    overflow-y: scroll;
    max-width: 800px;
    margin: auto;
    position: relative;
    .full-description {
      display: block;
      padding: 1rem;
    }
  }
  button {
    font-weight: bold;
    font-size: 1rem;
    position: static;
    outline: none;
    padding: 4px;
    border: none;
    border-radius: 5px;
    margin: 4px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
