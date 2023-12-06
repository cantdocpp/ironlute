<template>
  <div class="form">
    <label for="username">Username: </label>
    <input type="text" id="username" v-model="form.username" />
    <br />
    <label for="password">Passsword: </label>
    <input type="password" id="password" v-model="form.password" />
    <br />
    <button @click="handleSubmit">Submit</button>
    <div v-if="status === 'loading'">loading...</div>
    <div v-if="status === 'fail'">Username or password wrong !</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import router from "../../router";

type LoginStatus = "idle" | "loading" | "success" | "fail";

const status = ref<LoginStatus>("idle");
const form = reactive({
  username: "",
  password: "",
});

function handleSubmit() {
  if (form.username !== "admin" && form.password !== "ironluteadmin") {
    status.value = "fail";
    return;
  }

  status.value = "loading";
  window.localStorage.setItem("auth", "true");

  router.push("/upload");
}
</script>
