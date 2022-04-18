<template>
  <div class="auth-form">
    <div class="auth-form__heading">
      <h1 class="mp-heading mp-heading--2 mp-heading--alt-color">
        Вход в систему
      </h1>
    </div>

    <form class="auth-form__form" novalidate @submit.prevent="submit">
      <base-input v-model="login" label="Логин" placeholder="Логин" />
      <passworded-input
        v-model="password"
        :error="error"
        label="Пароль"
        placeholder="Пароль"
      />
      <base-button
        title="Войти"
        type="submit"
        wide
        :disabled="!isFilled"
        class="auth-form__submit"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthForm",

  props: {
    error: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      login: "",
      password: "",
    };
  },

  watch: {
    loginPassword: function () {
      this.$emit("update:error", null);
    },
  },

  computed: {
    loginPassword() {
      return `${this.login}_${this.password}`;
    },
    isFilled() {
      return !!this.login && !!this.password;
    },
  },

  methods: {
    submit() {
      this.$emit("submit", { login: this.login, password: this.password });
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';

.auth-form {
  min-width: 256px;
  padding: 30px 20px;
  border-radius: $border-radius-base;
  box-shadow: $box-shadow-base;
  background-color: $color-light.base;
  flexy(flex-start, center, wrap, column);

  &__heading {
    margin-bottom: 30px;
  }

  &__form {
    width: 100%;
  }

  &__submit {
    margin-top: 10px;
  }
}
</style>
