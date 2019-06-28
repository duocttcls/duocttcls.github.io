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
        "image": "http://dummyimage.com/157x140.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/155x167.jpg/cc0000/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/157x110.jpg/dddddd/000000",
        "show": false
      }, {
        "image": "http://dummyimage.com/212x179.jpg/dddddd/000000",
        "show": false
      }, {
        "image": "http://dummyimage.com/164x184.jpg/dddddd/000000",
        "show": false
      }, {
        "image": "http://dummyimage.com/190x154.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/222x126.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/173x135.jpg/cc0000/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/166x147.jpg/dddddd/000000",
        "show": false
      }, {
        "image": "http://dummyimage.com/207x167.jpg/dddddd/000000",
        "show": false
      }, {
        "image": "http://dummyimage.com/168x197.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/219x190.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/240x137.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/204x136.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/192x186.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/178x138.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/165x167.jpg/dddddd/000000",
        "show": false
      }, {
        "image": "http://dummyimage.com/232x123.jpg/cc0000/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/186x151.jpg/cc0000/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/217x164.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/185x117.jpg/cc0000/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/193x154.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/234x176.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/212x155.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/166x153.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/224x136.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/212x126.jpg/ff4444/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/238x124.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/187x129.jpg/5fa2dd/ffffff",
        "show": false
      }, {
        "image": "http://dummyimage.com/155x196.jpg/cc0000/ffffff",
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
      let delay = 3500 * index
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
    background: url(http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg) center center/cover no-repeat fixed
  }
</style>

