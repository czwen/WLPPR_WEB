<template>
  <router-link :to="{ name: 'WallpaperList', params: { themeId: theme.id }}" push>
    <div class="theme" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
    <transition name="fade">
      <div v-if="active" class="description">
          <div class="theme-name">{{ theme.name }}</div>
          <span class="theme-description">{{ theme.description }}</span>
          <div class="counter">
            {{ theme.counters.total}} Wallpapers
          </div>
      </div>
    </transition>
    <img v-bind:src="theme.cover.iPhone6Plus">
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'theme',
  props: ['theme'],
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
.theme{
  width: 20vw;
  height: 20vw;
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

.theme-name{
  display: block;
  width: 100%;
  color: #fff;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 2px;
}

.theme-description{
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
}

.counter{
  width: 136px;
  height: 28px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: rgb(255, 204, 0);
  border-radius: 40px;
  border-width: 0px;
  border-color: rgb(0, 0, 0);
  font-family: Calibri;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  color: rgb(102, 76, 14);
  font-size: 13px;
  letter-spacing: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
