<template>
  <div class="about">
    <div class="table legend">
      <span class="position">Position</span>
      <span class="crest">Crest</span>
      <span class="name">Team</span>
      <span class="points">Points</span>
      <span class="wdl">W - D - L</span>
      <span class="goals">GF - GA</span>
    </div>
    <div class="table team" v-for="pos in standings" :key="pos.position">
      <span class="position">{{ pos.position }}</span>
      <span class="crest"><img :src="pos.team.crest" alt="" /></span>
      <span class="name"> {{ pos.team.shortName }}</span>
      <span class="points">{{ pos.points }}</span>
      <span class="wdl">{{ pos.won }} - {{ pos.draw }} - {{ pos.lost }}</span>
      <span class="goals">{{ pos.goalsFor }} - {{ pos.goalsAgainst }}</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "StandingsView",
  props: {
    standings: Array,
  },
  created() {
    document.title = 'Standings - Football Info';
  }
});
</script>

<style lang="scss" scoped>
.about {
  margin: 0 15%;

  .team:nth-child(odd) {
    background-color: #222;
  }
  .table {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 15px;

    & > * {
      min-width: 100px;
    }

    &.legend {
      font-weight: bold;
      font-size: 20px;
    }

    .position,
    .points,
    .goals {
      min-width: 150px;
    }

    .name {
      flex: 1;
    }

    img {
      $imgSize: 50px;

      width: $imgSize;
      height: $imgSize;
    }
  }
}
</style>
