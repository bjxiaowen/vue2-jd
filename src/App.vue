<template>
  <div id="app">
    <!-- <transition name="router-fade" mode="out-in"> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- </transition> -->
    <!-- <transition name="router-fade" mode="out-in"> -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- </transition> -->
    <div id="loading" v-show="false">
      <mt-spinner :size="30" type="fading-circle"></mt-spinner>
    </div>
  </div>
</template>

<script>
  import {
    Spinner
  } from 'mint-ui';
  export default {
    name: 'app',
    components: {
      Spinner
    }
  }

</script>

<style lang="scss">
  @import './assets/common/css/theme.scss';
  @import 'normalize.css';
  @import 'mint-ui/lib/style.css'; // #loading{
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   display: flex;
  //   flex: 1;
  //   justify-content: center;
  //   align-items: center;
  //   background: #f5f5f5;
  //   opacity: .9;
  //   z-index: 80000;
  // }
  // .router-fade-enter-active,
  // .router-fade-leave-active,
  // .router-fade-enter,
  // .router-fade-leave-active {
  //   will-change: transform;
  //   transition: all 200ms;
  //   height: 100%;
  //   backface-visibility: hidden;
  //   position: fixed;
  //   width: 100%;
  //   perspective: 1000;
  // }
  // .router-fade-enter-active,
  // .router-fade-leave-active {
  //   opacity: 0;
  //   transform: translate3d(100%, 0, 0);
  // }
  // .router-fade-enter,
  // .router-fade-leave-active {
  //   opacity: 0;
  //   transform: translate3d(-100%, 0, 0);
  // }

</style>
