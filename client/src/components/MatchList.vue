<template>
  <div class="matches">
    <MatchComponent v-for="match in matches" :match="match" :key="match.id"/>
  </div>
</template>

<script>
import Vue from "vue";
import moment from "moment";
import MatchComponent from "@/components/MatchComponent.vue";

export default Vue.extend({
  name: "MatchList",
  components: {
    MatchComponent
  },
  props: {
    matches: Object,
  },
  methods: {
    getTime(date) {
      return moment(date).format("HH:mm");
    },
  },
});
</script>

