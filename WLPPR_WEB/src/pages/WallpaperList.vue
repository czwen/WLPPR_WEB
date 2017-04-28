<template>
  <div class="wallpaper-list">
    <wallpaper v-for="item in wallpapers" :key="item.wallpaper.id"
      v-bind:wallpaper="item.wallpaper"
      >
    </wallpaper>
  </div>
</template>

<script>
import Wallpaper from '../components/Wallpaper.vue'

export default {
  name: 'wallpaper-list',
  components: { Wallpaper },
  props: ['themeId'],
  data () {
    return {
      wallpapers: []
    }
  },
  mounted: function () {
    this.$http.get('http://localhost:3000/wallpapers?theme_id=' + this.$route.params.themeId).then(response => {
      // get body data
      console.log(response.body)
      this.wallpapers = response.body.wallpapers
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
