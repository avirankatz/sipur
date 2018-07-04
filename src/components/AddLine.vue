<template>
  <div class="add-line">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <div class="container">
      <textarea  @keyup.enter.native="appendLine()" type="textarea" v-model="text"></textarea>
      <v-btn class="submit" @click="appendLine()" >שליחה</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import Axios from "axios";

@Component({
  data(): any {
    return {
      lines: [],
      text: ""
    };
  },
  methods: {
    appendLine() {
      Axios.post(
        window.location.port == "8080" ? "http://localhost:3030/line" : "/line",
        { line: this.$data.text }
      ).then(res => {
        this.$data.text = "";
      });
    }
  }
})
export default class AddLine extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-line {
  background-image: url("../assets/circle.png");
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: -120px 200px;
  background-color: #fafafa;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  padding-top: 40px;
}
img.logo {
  text-align: center;
  object-fit: contain;
  width: 100%;
  padding: 20px 90px;
}
.submit {
  width: calc(100% - 50px);
  margin: 15px 25px;
  font-family: "Varela Round", sans-serif;
  font-weight: 500;
  bottom: 25px;
  color: #555555;
  font-size: large;
  background-color: #fafafa;
}
textarea {
  margin: 50px 25px;
  width: calc(100% - 50px);
  height: 200px;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  color: #555555;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
}
textarea:focus {
  background: none repeat scroll 0 0 rgba(255, 255, 255, 0.6);
  outline-width: 0;
}
div.container {
  position: absolute;
  bottom: 0;
  padding: 0;
}
</style>
