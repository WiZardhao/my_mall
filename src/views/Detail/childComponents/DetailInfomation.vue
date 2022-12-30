<template>
  <div class="infomations">
    <div class="info-rules">
      <table class="rule-table">
        <tr v-for="item in informations.rule">
          <td
            v-for="tritem in item"
            :style="{ width: (1 / item.length) * 100 + '%' }"
          >
            {{ tritem }}
          </td>
        </tr>
      </table>
    </div>
    <div class="info-sets">
      <table class="set-table">
        <tr v-for="item in informations.set">
          <td class="itemKey">{{ item.key }}</td>
          <td class="itemValue">{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInformation",
  props: {
    informations: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.info-rules {
  margin-top: 30px;
  padding: 0 5%;
}
.info-sets {
  padding: 0 5%;
  box-shadow: 0 2px 2px rgb(224, 217, 217);
  padding-bottom: 20px;
}
table {
  width: 100%;
  font-size: 14px;
}
tr {
  border-bottom: 0.5px solid rgb(245, 238, 238);
}
td {
  padding: 5px 0;
}
.itemKey {
  width: 30%;
}
.itemValue {
  width: 70%;
  color: rgb(237, 101, 147);
}
</style>
