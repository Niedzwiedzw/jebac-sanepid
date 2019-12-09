<template>
  <div class="JebacSanepidChart">
    <div class="refresh-box" v-if="showAll">
       <line-chart :data="chartData"/>
    </div>
    <input
        class="input"
        type="text"
        v-model="search"
        aria-label="Nazwa choroby"
        placeholder="Nazwa choroby"
    >
    <button @click="blink">Szukaj</button>
  </div>
</template>

<script lang="ts">
  import {groupBy, take, mapValues, map, fromPairs, pick, keys, first, values, includes, filter} from 'lodash';

  import { Component, Vue, Prop } from 'vue-property-decorator';
  import LineChart from "@/components/LineChart.vue";
  import {SanepidEntryRaw, SanepidResponse} from "@/types";
  import {buildMultiLineChartData} from "@/helpers";
  import sanepidBySicknessByDate from '../grouped-response.json';

  @Component({
    components: {
      LineChart,
    },
  })
  export default class JebacSanepidChart extends Vue {
    private showAll: boolean = false;
    private search = '';
    private data = sanepidBySicknessByDate;
    private sicknessNames: string[] = keys(first(values(this.data)));
    private get filteredKeys() { return filter(this.sicknessNames, (k: string) => includes(k, this.search)) }
    private get chartData() {
      const keys = this.filteredKeys;
      return buildMultiLineChartData(mapValues(this.data, (sicknesses) => pick(sicknesses, keys)) as any);
    }
    private blink() {
      this.showAll = false;
      setTimeout(() => this.showAll = true, 10);
    }
  }
</script>

<style scoped lang="scss">
  .JebacSanepidChart {
    .input {
      width: 50vw;
    }

  }
</style>
