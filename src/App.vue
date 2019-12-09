<template>
  <div id="app">
    <p class="patreon-note">Projekt ufundowany z współpracy <a href="https://www.facebook.com/JanuszPrestigeTravel/">Głuszak
      Microindustries</a> oraz <a href="https://www.youtube.com/user/BloodyWojtas/videos">Niedźwiedź - Oprogramowanie
      komputerowe dla ciebie i dla rodziny</a>, bez użycia środków Unii Europejskiej ani Państwa Polskiego.</p>

    <router-view/>
     <div class="counter">
       <img src="https://www.freevisitorcounters.com/ctrimg/counter-id-612337.png" alt="counter">
     </div>
  </div>
</template>

<style lang="scss">
  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*}*/

  /*#nav {*/
  /*  padding: 30px;*/

  /*  a {*/
  /*    font-weight: bold;*/
  /*    color: #2c3e50;*/

  /*    &.router-link-exact-active {*/
  /*      color: #42b983;*/
  /*    }*/
  /*  }*/
  /*}*/

  .counter {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .patreon-note {
    color: gray;
    font-size: 60%;
    text-align: center;
  }
</style>
