<template>
  <div class="red">
    <timer :counter="counter" />
  </div>
</template>

<script>
import timer from "@/components/timer";
import { timeSettings, colors } from "@/main.js";
export default {
  components: {
    timer,
  },
  data: () => ({
    counter: timeSettings.Red,
    isBlinking: false,
  }),
  mounted() {
    this.startTheCount();
  },
  methods: {
    startTheCount() {
      setInterval(() => {
        --this.counter;
        if (this.counter === 3) {
          this.$emit("screenBlinking");
        }
        if (!this.counter) {
          this.$router.push(colors[1]);
        }
      }, 1000);
    },
  },
};
</script>

<style>
.red {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #ec524b;
}
</style>