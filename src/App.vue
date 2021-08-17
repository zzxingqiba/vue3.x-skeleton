<template>
  <span>{{ data.person.name }}</span>
  <button @click="onChangeName">点我</button>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { reactive, ref } from 'vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  setup() {
    const data = ref({
      person: {
        name: '哈哈哈',
      },
    });
    console.log(data);

    const person = reactive({
      student: {
        name: '小明',
      },
    });
    console.log(person);

    function onChangeName() {
      this.data.person.name = '呵呵呵';
    }

    return {
      data,
      onChangeName,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
