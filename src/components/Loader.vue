<template>
  <div id="loader">
      <img src="../assets/svg/Spinner-0.6s-200px.svg" alt="Loading animation">
      <p>Loading ...</p>
  </div>
</template>

<style lang='scss' scoped>
#loader{
    text-align: center;
    font-weight: bold;
    @include flexbox;
    @include flex-direction(column);
    @include justify-content(center);
    @include align-content(center);
    position: absolute;
    z-index: 99999;
    left: 0;
    top: 0;
    bottom: 0;
    right:0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
}
</style>