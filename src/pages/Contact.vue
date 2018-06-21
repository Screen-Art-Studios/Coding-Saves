<template>
  <div class="main">
    <div class="colorback"></div>
    <h1>Send Us A Message</h1>
    <input v-model ="name" class="name" placeholder="Name" required>
    <input v-model ="email" class="email" placeholder="Email" required>
    <input v-model ="phone" class="phone" placeholder="Phone">
    <textarea v-model ="message" class="message" placeholder="Message" required></textarea>
    <button class="send" v-on:click="submitMessage">SEND</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'contact',
  data: function () {
    return {
      success: false,
      error: false,
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    submitMessage () {
      let vue = this
      axios.post('http://52.53.126.148:81/email', {
        name: vue.name.toLowerCase(),
        phone: vue.phone,
        email: vue.email,
        message: vue.message
      })
        .then(function (message) {
          vue.success = true
          console.log(message)
        })
        .catch(function (error) {
          console.log(error)
          vue.error = true
        })
    }
  }
}
</script>

<style scoped>

.main {
  position: fixed;
  width: 100%;
  height: 100%;
}

.colorback {
  width: 100%;
  height: 140px;
  background-image: url('../assets/noise.png');
}

input {
  border: 1px solid black;
  width: 90%;
  height: 30px;
  margin-left: 5%;
  margin-bottom: 2%;
  padding-left: 2%;
}

textarea {
  border: 1px solid black;
  width: 90%;
  height: 100px;
  margin-left: 5%;
  padding-left: 2%;
}

button {
  height:50px;
  color: white;
  border: none;
  box-shadow: 0px 2px 5px black ;
  background-color: #077E48;
  text-align: center;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 2.5em;
}

h1 {
  text-align: center;
  font-size: 2em;
  font-weight: 400;
  color: #077E48;
}
@media (min-width: 1000px) {
  .main {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    box-shadow: 0px 5px 8px black;
  }
}
</style>
