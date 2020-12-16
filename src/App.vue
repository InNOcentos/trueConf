<template>
  <div id="app">
    <router-view
      ref="red"
      v-bind:class="{ blinking: isBlinking }"
      v-on:screenBlinking="blinking"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    count: null,
    isBlinking: false,
  }),
  methods: {
    blinking() {
      this.isBlinking = true;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3eac2;
  font-size: 40px;
}
body {
  margin: 0;
}

.blinking {
  width: 50px;
  height: 50px;
  -webkit-animation: blink 1s; /* Safari 4+ */
  -moz-animation: blink 1s; /* Fx 5+ */
  -o-animation: blink 1s; /* Opera 12+ */
  animation: blink 1s; /* IE 10+, Fx 29+ */
  animation-duration: 3s;
}

@-webkit-keyframes blink {
  0%,
  49% {
    background-color: #fff;
  }
  50%,
  100% {
    background-color: #000;
  }
}
</style>
