<template>
  <div class="wallpaper" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
  <transition name="fade">
      <div v-if="active" class="description">
          <div class="wallpaper-name">{{ wallpaper.title }}</div>
          <div class="download">
            <a class="wallpaper-phone-model" target="_blank" v-for="(value, key) in wallpaper.images.original" v-if="value" v-bind:href="value">{{ key }}</a>
          </div>
      </div>
  </transition>
  <img v-bind:src="wallpaper.images.preview.iPhone6Plus">
  </div>
</template>

<script>

export default {
  name: 'wallpaper',
  props: ['wallpaper'],
  data () {
    return {
      active: false
    }
  },
  methods: {
    mouseover: function () {
      this.active = true
    },
    mouseleave: function () {
      this.active = false
    },
    click: function () {
      alert('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wallpaper{
  width: 20vw;
  height: auto;
  float: left;
  overflow: hidden;
  min-width: 200px;
  min-height: 200px;
  position: relative;
}

img{
  width: 100%;
  left: 0;
}

.description{
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,0.8);
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.wallpaper-name{
  display: block;
  width: 100%;
  color: #fff;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 2px;
}

.download{
  width: 100%;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.wallpaper-phone-model{
  padding-left: 10px;
  color: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
