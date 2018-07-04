<template>
  <div class="story">
    <img class="circle" src="../assets/circle.png">
    <div class="story-container">
      <h1 class="story-header">סיפור בהתהוות</h1>
      <p v-for="line in lines">
        {{line}}
      </p>
    </div>
    <div class="link-container info-box">
      <h2><span>ספרו לנו > </span>sipur.soficoop.com</h2>
    </div>
    <div class="about info-box">
      <img class="logo" src="../assets/logo.png" alt="logo">
      <h3>
          Sofi הוא קואופרטיב תוכנה, שזה אומר חברת תוכנה למטרות רווח - במודל בעלות שיתופי ושוויוני. 
          כל אחת מעובדות הקואופרטיב, בהווה ובעתיד, מהווה בעלים ושותפה שווה, יחד עם שאר העובדות. 
      </h3>
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
          let el = this.$el.querySelector("p:last-child");
          if (el != null) el.classList.add("visible");
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
  background-size: contain;
}
.circle {
  margin-right: -60%;
  margin-top: -27%;
  width: 130%;
  position: absolute;
  -webkit-animation: spin 150s linear infinite;
  -moz-animation: spin 150s linear infinite;
  animation: spin 150s linear infinite;
  z-index: 0;
}
p:last-child {
  opacity: 0;
  transition: 1s opacity;
}
p:nth-child(odd) {
  color: rgba(62, 58, 57, 0.85)!important;
}
.visible {
  opacity: 1 !important;
}
.story-container {
  float: right;
  position: absolute;
  margin-right: 60px;
  margin-top: 60px;
  z-index: 1;
}
.story-header {
  margin-bottom: 30px;
}
.link-container {
  float: left;
  direction: rtl;
  z-index: 1;
  margin-top: 60px;
  margin-left: 60px;
}
.link-container span {
  color: #20ac70;
}
.info-box {
  font-family: "Miriam Libre", sans-serif;
  color: rgba(62, 58, 57, 0.85);
  background-color: #ededed;
  border-radius: 5px;
  padding: 40px;
}
.logo {
  width: 100%;
  padding-bottom: 40px;
}
.about {
  float: left;
  direction: rtl;
  z-index: 1;
  position: absolute;
  bottom: 60px;
  left: 60px;
  width: 400px;
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
</style>
