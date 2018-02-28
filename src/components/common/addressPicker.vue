<!-- addresss -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .address-pricker {
    @include wh(100%, 40%);
    @include flexbox(center, center, row, nowrap);
  }

  .picker {
    width: 100%;
  }

  .bar {
    @include flexbox(space-between, center, row, nowrap);
  }

</style>
<style lang="scss">
  .picker-toolbar {
    padding: 0 20px;
  }

</style>

<template>
  <div>
    <mt-popup :closeOnClickModal="false" :value="Visible" position="bottom" class="address-pricker">
      <mt-picker :showToolbar="true" :slots="slots" @change="onValuesChange">
        <div class="bar">
          <span @click="$emit('closePicker')">取消</span>
          <span @click="$emit('closePicker')">确定</span>
        </div>
      </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
  import {
    Picker,
    Popup
  } from 'mint-ui'
  import REGION_DATA from 'china-area-data'
  export default {
    data() {
      return {
        slots: [{
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'right',
          defaultIndex: 0
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot4'
        }, {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'left'
        }]
      };
    },
    props: {
      current: {
        type: Object,
        default: () => {
          return {
            province: '',
            city: '',
            area: ''
          }
        },
        required: false
      },
      Visible: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    watch: {},

    components: {

    },

    computed: {},

    methods: {
      changerCity(picker,province) {
        let city = [];
        for (let key in REGION_DATA[86]) {
          if (REGION_DATA[86][key] === province) {
            for (let subkey in REGION_DATA[key]) {
              city.push(REGION_DATA[key][subkey])
            }
          }
        };
        picker.setSlotValues(1, city);
        return city;
      },
      changerArea(picker, address) {
        let area = [];
        for (let key in REGION_DATA[86]) {
          if (REGION_DATA[86][key] === address[0]) {
            for (let subkey in REGION_DATA[key]) {
              if (REGION_DATA[key][subkey] == address[1]) {
                for (let areaKey in REGION_DATA[subkey]) {
                  area.push(REGION_DATA[subkey][areaKey])
                }
              }
            }
          }
        };
        picker.setSlotValues(2, area);
        return area;
      },
      onValuesChange(picker, values) {
        if (this.current.province === values[0] && values[0]) {
          if (this.current.city === values[1]) {
            if (this.current.area === values[2]) {
              return false;
            } else {

            }
          } else {
            picker.setSlotValues(2, this.changerArea(picker, values));
            this.current.province = values[0];
            this.current.city = values[1];
            this.current.area = values[2];
          }
        } else {
          if (values[0] == null) {
            let provinceData = [];
            for (let key in REGION_DATA[86]) {
              provinceData.push(REGION_DATA[86][key])
            }
            if (this.current.province != '' && this.current.province != null) {
              setTimeout(() => {
                picker.setSlotValues(0, provinceData);
                provinceData.map((i, index, array) => {
                  if (i === this.current.province) {
                    this.slots[0].defaultIndex = index * 1;
                  }
                })
              }, 80);
            } else {
              setTimeout(() => {
                picker.setSlotValues(0, provinceData);
              }, 80);
            }
          } else {
            picker.setSlotValues(1, this.changerCity(picker,values[0]));
            this.current.province = values[0];
            this.current.city = values[1];
            this.current.area = values[2];
          }
        }
      }
    },

    mounted: function () {}
  }

</script>
<style lang="scss" scoped>


</style>
