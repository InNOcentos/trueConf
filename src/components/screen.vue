<template>
  <div class="screen" :class="colors[this.colorIdx]">
    <timer :counter="counter" />
  </div>
</template>

<script>
import timer from "@/components/timer";
import { colors } from "@/main.js";
export default {
  components: {
    timer,
  },
  props: {
    colorIdx: Number,
    counterTime: Number,
    prevRoute: Object,
  },
  data: function () {
    return {
      colors,
      counter: this.counterTime,
    };
  },
  mounted() {
    this.startTheCount();
  },
  methods: {
    startTheCount() {
      setInterval(() => {
        --this.counter;
        if (this.counter <= 3) {
          this.$emit("screenBlinking");
        }
        if (!this.counter) {
          this.prevRoute && this.prevRoute.path === `/${this.colors[2]}`
            ? this.$router.push(this.colors[this.colorIdx - 1])
            : this.colorIdx !== 2
            ? this.$router.push(this.colors[this.colorIdx + 1])
            : this.$router.push(this.colors[this.colorIdx - 1]);
        }
      }, 1000);
    },
  },
};
</script>

<style>
.screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.green {
  background-color: #4e8d7c;
}
.red {
  background-color: #ec524b;
}
.yellow {
  background-color: #f5b461;
}
</style>