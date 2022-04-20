<template>
  <table class="base-table">
    <thead>
      <tr>
        <th
          v-for="(item, i) in headers"
          :key="i"
          :rowspan="item.rowspan"
          :colspan="item.colspan"
        >
          {{ item.label }}
        </th>
      </tr>

      <tr>
        <td v-for="(item, i) in subheaders" :key="i">{{ item.label }}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in flattenItems" :key="i">
        <td v-for="(item, i) in flattenHeaders" :key="i">
          <slot :name="item.value" :[item.value]="row[item.value]">
            {{ row[item.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BaseTable",

  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    headers() {
      return this.fields.map((item) => ({
        ...item,
        rowspan: item.childs ? 1 : 2,
        colspan: item.childs?.length || 1,
      }));
    },
    subheaders() {
      return this.fields.reduce(
        (acc, curr) => [...acc, ...(curr.childs || [])],
        []
      );
    },
    flattenHeaders() {
      return this.fields.reduce((acc, curr) => {
        if (curr.childs) {
          return [...acc, ...curr.childs];
        } else {
          return [...acc, curr];
        }
      }, []);
    },
    flattenItems() {
      return this.items.map((row) =>
        Object.entries(row).reduce((acc, [key, value]) => {
          if (value?.childs) {
            return { ...acc, ...value.childs };
          } else {
            return { ...acc, [key]: value };
          }
        }, {})
      );
    },
  },
};
</script>

<style lang="stylus" scoped>

.base-table {
  width: 100%;

  & td, th {
    text-align: center;
    padding: 5px;
  }

  & th {
    vertical-align: top;
  }
}
</style>
