<template>
  <h3>{{ info }}</h3>
  <p>{{ someInfo }}</p>

  <button type="button" @click="userDate()">Отправить</button>
</template>

<style>
h3 {
  font-weight: lighter;
}

p {
  color: rgb(204, 43, 43);
}
</style>

<script>
export default {
  data() {
    return {
      info: "Titel!",
      someInfo: "Anons of message",
    };
  },
  methods: {
    userDate() {
      this.someInfo = "Some new"; // исправлена ошибка в названии переменной
    },
  },
};
</script>
