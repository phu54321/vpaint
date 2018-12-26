<template lang='pug'>
#app
  v-paint.main-paint(v-model='url')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VPaint from './components/VPaint.vue'

@Component({
  components: {
    VPaint
  }
})
export default class App extends Vue {
  url = require('@/assets/test.png')
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .main-paint {
    width: 800px;
    height: 600px;
  }
}
</style>
