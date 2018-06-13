<template>
  <div class="hello">
    <el-form>
      <el-form-item>
        <el-input @keyup.enter.native="appendLine()" type="text" v-model="text"></el-input>
      </el-form-item>
      <el-button type="primary" @click="appendLine()">שלח</el-button>
    </el-form>
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
      Axios.post("http://localhost:3010/line", { line: this.$data.text }).then(
        (res) => {
          this.$data.text = '';
        },
      );
    },
  },
})
export default class AddLine extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
