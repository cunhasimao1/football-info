<template>
  <div class="match">
    <span class="country"><img :src="match.area.flag" alt="" /></span>
    <span class="team homeTeam">{{ match.homeTeam.name }}</span>
    <span class="score" :class="[live?'green':'']"><img :src="match.homeTeam.crest" alt="" /> {{ match.score.fullTime.home || 0 }} - {{ match.score.fullTime.away || 0 }} <img :src="match.awayTeam.crest" alt="" /></span>
    <span class="team awayTeam">{{ match.awayTeam.name }}</span>
    <span class="time">{{ getTime(match.utcDate, match.status) }}</span>
  </div>
</template>
<script>
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  name: "MatchComponent",
  props: {
    match: Object,
  },
  data() {
    return {
      live: false,
    };
  },
  methods: {
    getTime(date, status) {
      if (status === "SCHEDULED" || status === "TIMED") return moment(date).format("HH:mm");

      if (status === "IN_PLAY" || status === "PAUSED") {
        this.live = true;
        return "LIVE";
      }

      this.live = false;
      return "FINISHED";
    },
  },
});
</script>
<style lang="scss" scoped>
img {
  $imgSize: 50px;

  width: $imgSize;
  height: $imgSize;
}
.match {
  .green {
    color: #42b983;
  }
  &:nth-child(even) {
    background-color: #222;
  }
  padding: 15px;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .team {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .score {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 25px;
  }

  .time {
    font-weight: bold;
    width: 100px;
  }
}
</style>
