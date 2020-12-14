<template>
  <div class="green">
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
    counter: timeSettings.Green,
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
.green {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #4e8d7c;
}
</style>