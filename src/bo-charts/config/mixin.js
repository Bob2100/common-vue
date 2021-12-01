import utils from '../utils';
import { vConfig } from './index'
export default {
  props: {
    tooltip: Object,
    series: Array
  },
  data() {
    return {
      tipParams: [{ vConfig }]
    };
  },
  computed: {
    vConfig() {
      const item = this.series.find(item => !!item.vConfig);
      return item && item.vConfig;
    }
  },
  watch: {
    series() {
      this.wrapSeries();
    },
    tooltip() {
      this.wrapTooltip();
    }
  },
  methods: {
    format(val, config = {}) {
      return `${utils.number.format(val, { ...config, unit: this.vConfig.unit })}${this.vConfig.unitLabel}`;
    },
    wrapSeries() {
      if (!this.series) {
        return;
      }
    },
    wrapTooltip() {
      if (!this.tooltip) {
        return;
      }
      if (!this.vConfig) {
        return;
      }
    }
  }
}