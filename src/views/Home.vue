<template>
  <div class="home">
    <svg-icon name="close" stroked />

    <base-button title="Войти" />

    <div style="width: 500px; padding: 10px">
      <base-input
        v-model="input"
        label="Label"
        placeholder="Placeholder"
        :type="show ? 'text' : 'password'"
      >
        <template #end>
          <base-button
            icon="close"
            theme="plain"
            size="small"
            color="dark"
            plain
            :icon-settings="{ stroked: true }"
            @click="show = !show"
          />
        </template>
      </base-input>
    </div>
    {{ input }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  data() {
    return {
      input: "",
      show: false,
    };
  },
});
</script>
