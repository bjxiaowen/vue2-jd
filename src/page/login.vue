<template>
  <div>
    <mt-field label="用户名" placeholder="请输入用户名或手机号码" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button size="large" type="primary" @click="Login">登录</mt-button>
    <BackHead/>
    <FooterView/>
  </div>
</template>
<script>
  import Http from '@/utils/axios';
  import BackHead from 'common/backHead';
  import {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage
  } from '@/utils/mixin';
  import FooterView from 'component/footer/footerView';
  import {
    Field,
    Button,
    Toast
  } from 'mint-ui';

  export default {
    data() {
      return {
        username: '13650928419',
        password: '123456',
      }
    },
    components: {
      BackHead,
      FooterView
    },
    methods: {
      Login() {
        new Http().require({
          api: '/api/member/Login',
          param: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          setSessionStorage('MemberToken', res.Data);
          Toast({
            message: res.Message
          });
          this.$router.go(-1);
        })
      }
    },
    mounted: function () {}
  }

</script>

<style lang="scss" scoped>
  // @import '~assets/common/css/mixin.scss';
  // @include flexbox()

</style>
