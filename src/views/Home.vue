<template>
  <div class="home">
    <AddLine/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddLine from '@/components/AddLine.vue'; // @ is an alias to /src

@Component({
  components: {
    AddLine,
  },
})
export default class Home extends Vue {}
</script>
