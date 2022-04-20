<template>
  <div class="home">
    <base-table
      v-if="!loading"
      :fields="$options.fields"
      :items="$options.items"
    >
      <template #newData="{ newData }">
        <number
          :num="newData"
          :disabled="newData == 0"
          class="home__number-item"
        />
      </template>

      <template #primaryActual="{ primaryActual }">
        <number
          :num="primaryActual"
          :disabled="primaryActual == 0"
          class="home__number-item"
        />
      </template>

      <template #primaryOld="{ primaryOld }">
        <number
          :num="primaryOld"
          :disabled="primaryOld == 0"
          class="home__number-item"
        />
      </template>

      <template #periodicActual="{ periodicActual }">
        <number
          :num="periodicActual"
          :disabled="periodicActual == 0"
          class="home__number-item"
        />
      </template>

      <template #periodicOld="{ periodicOld }">
        <number
          :num="periodicOld"
          :disabled="periodicOld == 0"
          class="home__number-item"
        />
      </template>

      <template #incomplete="{ incomplete }">
        <number
          :num="incomplete"
          :disabled="incomplete == 0"
          class="home__number-item"
        />
      </template>

      <template #closed="{ closed }">
        <span class="mp-heading mp-heading--6">{{ closed }}</span>
      </template>
    </base-table>
    <base-loader v-else class="home__loader" />
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "Home",

  data() {
    return {
      loading: false,
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.loading = true;

      api.xmlController
        .get()
        .then((xml) => console.log(xml))
        .finally((this.loading = false));
    },
  },

  fields: [
    {
      label: null,
      value: "logo",
    },
    {
      label: "Новые заявки",
      value: "newData",
    },
    {
      label: "Предварительные",
      value: "primary",
      childs: [
        { label: "Актуальные", value: "primaryActual" },
        { label: "Просроченные", value: "primaryOld" },
      ],
    },
    {
      label: "Периодические",
      value: "periodic",
      childs: [
        { label: "Актуальные", value: "periodicActual" },
        { label: "Просроченные", value: "periodicOld" },
      ],
    },
    {
      label: "Вакцинация",
      value: "vaccination",
      childs: [{ label: "Незавершенные", value: "incomplete" }],
    },
    {
      label: "Завершенные",
      value: "closed",
    },
  ],

  items: [
    {
      logo: "logohere",
      newData: 1,
      primary: {
        childs: { primaryActual: 8, primaryOld: 10 },
      },
      periodic: {
        childs: {
          periodicActual: 12,
          periodicOld: 1,
        },
      },
      vaccination: {
        childs: { incomplete: 1 },
      },
      closed: 3100,
    },
    {
      logo: "logohere2",
      newData: 8,
      primary: {
        childs: { primaryActual: 5, primaryOld: 0 },
      },
      periodic: {
        childs: {
          periodicActual: 0,
          periodicOld: 0,
        },
      },
      vaccination: {
        childs: { incomplete: 0 },
      },
      closed: 880,
    },
  ],
};
</script>

<style lang="stylus" scoped>
.home {
  &__number-item {
    margin: 0px auto;
  }

  &__loader {
    font-size: 60px;
  }
}
</style>
