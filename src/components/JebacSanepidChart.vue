<template>
  <div class="JebacSanepidChart">
     <line-chart v-if="show" :data="chartData"/>
    <input
        class="input"
        type="text"
        v-model="search"
        aria-label="Nazwa choroby (minimum 5 znaków)"
        placeholder="Nazwa choroby (minimum 5 znaków)"
    >
    <button @click="blink()">odśwież</button>
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
    private search = '';
    private _show: boolean = true;
    private get show(): boolean { return (this.search.length > 5); }
    private data = sanepidBySicknessByDate;
    private sicknessNames: string[] = keys(first(values(this.data)));
    private get filteredKeys() { return filter(this.sicknessNames, (k: string) => includes(k, this.search)) }
    private get chartData() {
      const keys = this.filteredKeys;
      return buildMultiLineChartData(mapValues(this.data, (sicknesses) => pick(sicknesses, keys)) as any);
    }
    private blink() {
      this._show = false;
      setTimeout(() => this._show = true, 10);
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
