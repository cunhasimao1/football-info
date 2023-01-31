<template>
  <div id="app">
    <nav>
      <h1>Football Info</h1>
      <router-link to="/">Games</router-link>
      <router-link to="/standings">Standings</router-link>
    </nav>
    <router-view :matches="matches" :standings="standings" />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "app",
  data() {
    return {
      matches: {},
      standings: [],
    };
  },
  async created() {
    let { data: m } = await axios("/api/matches");
    this.matches = m.matches.filter((m) => m.area.id == 2187);

    let { data: s } = await axios("/api/competitions/2017/standings");
    this.standings = s.standings[0].table;
  },
});
</script>

<style lang="scss">
:root {
  color-scheme: light dark;
}
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

nav {
  padding: 10px 30px;
  margin-bottom: 30px;

  a {
    font-weight: bold;
    padding: 0 50px;
    text-decoration: none;

    &:visited {
      color: #fff;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
