<template>
  <div class="auth-page">
    <div class="auth-page__content">
      <auth-form :error.sync="error" @submit="submit" />
    </div>
  </div>
</template>

<script>
import AuthForm from "./modules/AuthForm.vue";

export default {
  name: "Auth",

  components: { AuthForm },

  data() {
    return {
      error: null,
    };
  },

  methods: {
    submit(data) {
      if (data.login == "admin" && data.password == "admin") {
        this.$router.push({ name: "home" });
      } else {
        this.error = "Authorization error!";
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.auth-page {
  width: 100%;
  height: 100vh;
  background: url('~@/assets/images/auth_bg.png') center no-repeat;
  background-size: 90%;

  padding-top: 70px;
  flexy(center, flex-start);

  &__content {

  }
}
</style>
