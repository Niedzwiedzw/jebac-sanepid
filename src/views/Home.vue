<template>
  <div class="home">
    <h1>
      <span class="special-char">J</span>ednolita
      <span class="special-char">E</span>lektroniczna
      <span class="special-char">B</span>aza
      <span class="special-char">A</span>kronimów
      <span class="special-char">C</span>horobowych
      Sanepid
    </h1>
    <jebac-sanepid-chart/>
  </div>
</template>

<script>
// @ is an alias to /src

import JebacSanepidChart from "@/components/JebacSanepidChart";
export default {
  name: 'home',
  components: {
      JebacSanepidChart
  }
}
</script>

<style lang="scss">
  .home {
    width: 100%;
    height: 100%;
    text-align: center;

    .special-char {
      color: red;
    }
  }
</style>
