<template>
  <div class="home">
    <base-table
      v-if="!loading && table"
      :fields="table.headers"
      :items="table.rows"
    >
      <template
        v-for="(item, i) in table.strategies"
        v-slot:[item.forField]="data"
      >
        <component
          :is="item.strategyName"
          :src="data[item.forField]"
          :label="data[item.forField]"
          :text="data[item.forField]"
          :key="i"
          class="home__td-item"
        />
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
  &__td-item {
    margin: 0px auto;
  }

  &__loader {
    font-size: 60px;
  }
}
</style>
