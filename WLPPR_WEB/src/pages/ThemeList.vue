<template>
  <div class="theme-list">
    <theme v-for="item in themes" :key="item.theme.id"
      v-bind:theme="item.theme"
      >
    </theme>
  </div>
</template>

<script>
import Theme from '../components/Theme.vue'

export default {
  name: 'theme-list',
  components: { Theme },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      themes: []
    }
  },
  mounted: function () {
    console.log('theme list mounted')
    this.$http.get('http://localhost:3000/themes').then(response => {
      // get body data
      this.themes = response.body.themes
    }, response => {
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
