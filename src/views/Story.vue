<template>
  <div class="story">
    <img class="circle" src="../assets/circle.png">
    <div class="story-container">
      <h1 class="story-header">סיפור בהתהוות</h1>
      <p v-for="line in lines">
        {{line}}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import { setInterval, setTimeout } from "timers";

@Component({
  data(): any {
    return {
      lines: []
    };
  },
  mounted() {
    setInterval(
      () =>
        Axios.get(
          window.location.port == "8080"
            ? "http://localhost:3030/lines"
            : "/lines"
        ).then(res => {
          this.$data.lines = res.data;
        }),
      1000
    );
  }
})
export default class Home extends Vue {
  appendLine(line: string, currentChar: number) {
    this.$data.lines[this.$data.lines.length - 1] += line.charAt(currentChar++);
    if (currentChar < line.length)
      setTimeout(() => this.appendLine(line, currentChar), 500);
  }
}
</script>
<style scoped>
.story {
  background-image: url("../assets/bg.png");
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.circle {
  margin-right: -60%;
  margin-top: -27%;
  width: 130%;
  position: absolute;
  -webkit-animation: spin 100s linear infinite;
  -moz-animation: spin 100s linear infinite;
  animation: spin 100s linear infinite;
  z-index: 0;
  display: table;
}
p:last-child {
  animation: blink-caret 0.75s step-end infinite, typing 3.5s steps(40, end);
  border-left: 0.15em solid orange;
  /* display: inline-block; */
  overflow: hidden;
}
p:nth-child(odd) {
  color: rgba(62, 58, 57, 0.85);
}
.story-container {
  float: right;
  position: absolute;
  margin-right: 60px;
  z-index: 1;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
