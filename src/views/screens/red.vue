<template>
  <div class="red">
    <timer :counter="counter" />
  </div>
</template>

<script>
import timer from "@/components/timer";
import { timeSettings } from "@/main.js";
export default {
  components: {
    timer,
  },
  data: () => ({
    counter: timeSettings.Red,
  }),
  mounted() {
    this.startTheCount();
  },
  methods: {
    startTheCount() {
      setInterval(() => {
        --this.counter;
        if (!this.counter) {
          this.$router.push("/yellow");
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