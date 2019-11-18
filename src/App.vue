<template>
  <div id="app">
    <router-view></router-view>
    <button id="btn">打印pdf</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
    /**
     * 解决 css 引入图片在 github pages 无法获取的问题
     */
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
    /*const html2pdf =  require("@/plugin/html2pdf.js-0.9.1/dist/html2pdf.bundle.js");
    var element = document.getElementById('app');*/
    /*#btn.click(){
      html2pdf(element);
    }*/
  }
}
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/reset.css";
</style>
