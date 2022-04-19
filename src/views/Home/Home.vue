<template>
  <div class="home">
    <base-table :fields="$options.fields" :items="$options.items">
      <template #newData="{ newData }">
        <number
          :num="newData.label"
          :disabled="newData.label == 0"
          class="home__number-item"
        />
      </template>

      <template #primaryActual="{ primaryActual }">
        <number
          :num="primaryActual.label"
          :disabled="primaryActual.label == 0"
          class="home__number-item"
        />
      </template>

      <template #primaryOld="{ primaryOld }">
        <number
          :num="primaryOld.label"
          :disabled="primaryOld.label == 0"
          class="home__number-item"
        />
      </template>

      <template #periodicActual="{ periodicActual }">
        <number
          :num="periodicActual.label"
          :disabled="periodicActual.label == 0"
          class="home__number-item"
        />
      </template>

      <template #periodicOld="{ periodicOld }">
        <number
          :num="periodicOld.label"
          :disabled="periodicOld.label == 0"
          class="home__number-item"
        />
      </template>

      <template #incomplete="{ incomplete }">
        <number
          :num="incomplete.label"
          :disabled="incomplete.label == 0"
          class="home__number-item"
        />
      </template>

      <template #closed="{ closed }">
        <span class="mp-heading mp-heading--6">{{ closed.label }}</span>
      </template>
    </base-table>
  </div>
</template>

<script>
export default {
  name: "Home",

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
}
</style>
