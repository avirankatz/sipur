<template>
  <div class="story">
    <h1>היה היה</h1>
    <p v-for="line in lines">
      {{line}}
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import { setInterval } from "timers";

@Component({
  data(): any {
    return {
      lines: []
    };
  },
  mounted() {
    setInterval(
      () =>
        Axios.get("http://localhost:3010/lines").then(
          res => (this.$data.lines = res.data)
        ),
      1000
    );
  }
})
export default class Home extends Vue {}
</script>