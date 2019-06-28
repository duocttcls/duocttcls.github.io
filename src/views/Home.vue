<template>
  <div class="background-wrapper">
    <div class="wrapper" v-for="(data, index) in images" :key="index">
      <ImageSmall :data="data" v-if="data.show" :classData="`animation-image-${index}`" />
    </div>
  </div>
</template>

<script>
import ImageSmall from "@/components/ImageSmall"

export default {
  name: "App",
  components: {
    ImageSmall
  },
  data() {
    return {
      images: [{
        "image": `${process.env.BASE_URL}images/1.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/2.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/3.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/4.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/5.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/6.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/7.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/8.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/9.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/10.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/11.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/12.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/13.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/14.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/15.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/16.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/17.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/18.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/19.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/20.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/21.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/22.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/23.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/24.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/25.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/26.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/27.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/28.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/29.jpg`,
        "show": false
      }, {
        "image": `${process.env.BASE_URL}images/30.jpg`,
        "show": false
      }]
    }
  },
  mounted () {
    this.images.forEach((data, index) => {
      this.delayedShow(data, index)
    })
  },
  methods: {
    delayedShow (data, index) {
      let delay = 5000 * index
      setTimeout(() => {
        data.show = true
      }, delay)
    }
  }
};
</script>

<style lang="scss">
  .background-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg) center center/cover no-repeat fixed;

    .wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
</style>
