<template>
  <div class="home">
    <h1>J.E.B.A.C. Sanepid</h1>
    <img alt="Vue logo" src="../assets/logo.png">
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
  }
</style>
