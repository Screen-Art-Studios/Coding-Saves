<template>
  <div class="main">
    <div class="colorback"></div>
    <h1>Non-profit corporation registration 501( c)3 (Pending)</h1>
  </div>
</template>

<script>
export default {
  name: 'donate'
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
