<template>
  <div class="JebacSanepidChart">
     <line-chart :data="chartData"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import LineChart from "@/components/LineChart.vue";
  import {groupBy, take, mapValues, map, fromPairs} from 'lodash';
  import {getSanepidData} from "@/requests";
  import {SanepidEntryRaw, SanepidResponse} from "@/types";
  import {buildMultiLineChartData} from "@/helpers";

  function allSicknesses(data: SanepidEntryRaw[]) {
    const allSicknesses: {[key: string]: number} = {};
    for (const entry of data) {
      allSicknesses[entry.name] = 0;
    }
    return allSicknesses;
  }

  @Component({
    components: {
      LineChart,
    },
  })
  export default class JebacSanepidChart extends Vue {
    private show = false;
    private data: SanepidEntryRaw[] = getSanepidData();
    private allSicknesses = allSicknesses(this.data);
    private get chartData() {
      const byDate = groupBy(this.data, 'measured');
      const data = mapValues(byDate, (entries: SanepidEntryRaw[]) => ({...this.allSicknesses,...fromPairs(map(entries, (e) => [e.name, e.per_30_days]))}));
      return buildMultiLineChartData(data as any);
    }
  }
</script>

<style scoped lang="scss">
  .JebacSanepidChart {

  }
</style>
