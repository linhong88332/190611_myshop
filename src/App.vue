<template>
  <div id="app">
    <section class="content">

    </section>
    <router-view/>
    <FooterGuide v-show="$route.meta.footShow"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./components/stylus/mixins.styl"
#app
  width 100%
  height 100%
  background #ffffff
  position relative
  .content  //每个页面的内容
    >div //决定哪个页面显示
      display none
      &.on
        display block
      >section
        .header //头部公共css
          background-color #02a774
          position fixed
          z-index 100
          left 0
          top 0
          width 100%
          height 45px
          .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .iconfont
              font-size 22px
              color #fff
          .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 30%
            color #fff
            font-size 22px
            text-align center

</style>