<template>
  <div class="home">
    <MatchList :matches="matches" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MatchList from "@/components/MatchList.vue";

export default Vue.extend({
  name: "GamesView",
  components: {
    MatchList,
  },
  props: {
    matches: Object,
  },
  created() {
    document.title = 'Games - Football Info';
  }
});
</script>

