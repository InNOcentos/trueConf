<template>
  <div class="yellow">
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
    counter: timeSettings.Yellow,
    prevRoute: null,
  }),
  mounted() {
    this.startTheCount();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  methods: {
    startTheCount() {
      setInterval(() => {
        --this.counter;
        if (!this.counter) {
          this.prevRoute.fullPath === "/red"
            ? this.$router.push("/green")
            : this.$router.push("/red");
        }
      }, 1000);
    },
  },
};
</script>

<style>
.yellow {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f5b461;
}
</style>