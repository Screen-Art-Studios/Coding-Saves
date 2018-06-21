<template>
  <div class="main">
    <div class="slidebox">
    <transition name="slide"><div class="slide1" v-if="show === 0">Bringing Real Applicable Tech Education to Schools Across the Valley.</div></transition>
    <transition name="slide"><div class="slide2" v-if="show === 1">Aiming to Inspire Students of All Ages to be the Technological Innovators of Tomorrow.</div></transition>
    <transition name="slide"><div class="slide3" v-if="show === 2">Working with Educators to Help Less Fortunate Students Learn Life Changing Skills.</div></transition>
  </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
    let vue = this
    function toggleShow () {
      if (vue.show === 0) {
        vue.show = 1
      } else if (vue.show === 1) {
        vue.show = 2
      } else if (vue.show === 2) {
        vue.show = 0
      }
    }
    setInterval(toggleShow, 7000)
  },
  data () {
    return {
      show: 0
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: fixed;
}
.slidebox {
  position: fixed;
  width: 70%;
  height: 400px;
  background-color: black;
}
.slide-enter-active, .slide-leave-active {
  transition: all .30s ease;
}

.slide-enter {
  transform: translateX(2000px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-2000px);
  opacity: 0;
}
.slide1 {
  position: absolute;
  background-image: url("../assets/kids.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: 5;
  margin: 0;
  padding: 0;
  top: 0;
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
  padding-top: 300px;
  padding-left: 5%;
  padding-right: 10%;
  color: #fff;
  text-shadow: 1px 2px 5px black;
}
.slide2 {
  position: absolute;
  background-image: url("../assets/teens.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: 5;
  margin: 0;
  padding: 0;
  top: 0;
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
  padding-top: 300px;
  padding-left: 5%;
  padding-right: 10%;
  color: #fff;
  text-shadow: 1px 2px 5px black;
}
.slide3 {
  position: absolute;
  background-image: url("../assets/teacher.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: 5;
  margin: 0;
  padding: 0;
  top: 0;
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
  padding-top: 300px;
  padding-left: 5%;
  padding-right: 10%;
  color: #fff;
  text-shadow: 1px 2px 5px black;
}
@media (min-width: 700px) {
  .slide1, .slide2, .slide3 {
    font-size: 2.5em;
    padding-top: 200px;
  }
  .main {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    box-shadow: 0px 5px 8px black;
  }
}
@media (min-width: 1000px) {
  .slide1, .slide2, .slide3 {
    font-size: 2.8em;
    padding-top: 230px;
  }
}
</style>
