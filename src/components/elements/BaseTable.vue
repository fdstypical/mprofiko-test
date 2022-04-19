<template>
  <table class="base-table">
    <thead>
      <tr>
        <th
          v-for="(item, i) in fields"
          :key="i"
          :rowspan="item.childs ? 1 : 2"
          :colspan="item.childs ? item.childs.length : 1"
        >
          {{ item.label }}
        </th>
      </tr>

      <tr>
        <td v-for="(item, i) in subheaders" :key="i">{{ item.label }}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in items" :key="i">
        <td v-for="(item, i) in getItemInRow(row)" :key="i">
          <slot :name="item.value" :[item.value]="item">{{ item.label }}</slot>
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
    subheaders() {
      return this.fields.reduce(
        (acc, curr) => [...acc, ...(curr.childs || [])],
        []
      );
    },
  },

  methods: {
    getItemInRow(row) {
      return Object.entries(row).reduce((acc, [key, value]) => {
        if (typeof value === "object" && value !== null && value.childs) {
          return [...acc, ...this.getItemInRow(value.childs)];
        } else {
          return [...acc, { label: value, value: key }];
        }
      }, []);
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
