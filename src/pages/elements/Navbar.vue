<template>
    <div class="Navmain">
        <button class="Contact" v-on:click="navToggle(); $router.push('/Contact')">CONTACT</button>
        <div class="logo" v-on:click="navToggle(); $router.push('/')"></div>
        <button class="Donate" v-on:click="navToggle(); $router.push('/Donate')">DONATE</button>
      </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      toggled: false,
      isToggled: false,
      first: true
    }
  },
  methods: {
    navToggle: function () {
      // Nav button functionality
      if (window.innerWidth < 700) {
        if (this.toggled === false) {
          this.toggled = true
          this.isToggled = true
          this.first = false
        } else if (this.toggled === true) {
          this.toggled = false
          this.isToggled = false
        }
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.Navmain {
  width: 100%;
  height: 100px;
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 10;
  margin-top: 20px;
}

.logo {
  background-image: url('../../assets/codingsaves.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 80%;
  margin-top: 10px;
  grid-column: 2;
  color: white;
  font-size: 1.5em;
  text-align: center;
}
button {
  border: none;
  background-color: transparent;
  height: 100px;
  color: white;
  text-shadow: 0px 2px 5px black;
  font-weight: 400;
  font-size: 1.2em;
  -webkit-animation-duration: .25s;
  animation-duration: .25s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
button:hover {
  animation-name: bounce;
  -moz-animation-name: bounce;
}
.Contact {
  grid-column: 1;
  text-align: right;
}
.Donate {
  grid-column: 3;
  text-align: left;
}

@keyframes bounce {
  0%, 100% {
      -webkit-transform: translateY(0);
      -ms-transform:     translateY(0);
      transform:         translateY(0)
    }

    100% {
      -webkit-transform: translateY(-5px);
      -ms-transform:     translateY(-5px);
      transform:         translateY(-5px)
    }
  }
  @media only screen and (min-width:1000px) {
    button {
      font-size: 1.5em;
    }
    h1 {
      font-size: 2em;
    }
  }
</style>
