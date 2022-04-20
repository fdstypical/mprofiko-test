<template>
  <div class="home">
    <base-table
      v-if="!loading && table"
      :fields="table.headers"
      :items="table.rows"
    >
      <template #logo="{ logo }">
        <img :src="logo" class="home__company-logo" />
      </template>

      <template #newData="{ newData }">
        <cheap
          :label="newData"
          :disabled="newData == 0"
          class="home__cheap-item"
        />
      </template>

      <template #primaryActual="{ primaryActual }">
        <cheap
          :label="primaryActual"
          :disabled="primaryActual == 0"
          class="home__cheap-item"
        />
      </template>

      <template #primaryOld="{ primaryOld }">
        <cheap
          :label="primaryOld"
          :disabled="primaryOld == 0"
          class="home__cheap-item"
        />
      </template>

      <template #periodicActual="{ periodicActual }">
        <cheap
          :label="periodicActual"
          :disabled="periodicActual == 0"
          class="home__cheap-item"
        />
      </template>

      <template #periodicOld="{ periodicOld }">
        <cheap
          :label="periodicOld"
          :disabled="periodicOld == 0"
          class="home__cheap-item"
        />
      </template>

      <template #incomplete="{ incomplete }">
        <cheap
          :label="incomplete"
          :disabled="incomplete == 0"
          class="home__cheap-item"
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
import XmlParser from "@/services/local/XmlParser";

export default {
  name: "Home",

  data() {
    return {
      loading: false,
      table: null,
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
        .then((xml) => {
          const parser = new XmlParser(xml);
          parser.parse();
          this.table = parser.GetTable;
        })
        .finally((this.loading = false));
    },
  },
};
</script>

<style lang="stylus" scoped>
.home {
  &__cheap-item {
    margin: 0px auto;
  }

  &__loader {
    font-size: 60px;
  }
}
</style>
