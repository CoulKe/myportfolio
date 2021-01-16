<template>
  <div id="error">
      <h1>404 | That page does not exist</h1>
      <p>Go back <router-link to="/">Home</router-link></p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
#error{
    text-align: center;
    font-weight: bold;
    @include flexbox;
    @include flex-direction(column);
    @include justify-content(center);
    @include align-content(center);
    padding: 1rem;
    font-size: 0.5rem;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    p{
        font-size: 1rem;
        a{
            color: purple;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
@media (min-width: 600px) {
    #error{
        font-size: 1rem;
    }
}
</style>