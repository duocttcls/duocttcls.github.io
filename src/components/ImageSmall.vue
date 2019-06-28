<template>
  <div :class="`animation-image ${classData}`">
    <img :src="data.image" :alt=classData>
  </div>
</template>

<script>
import ApiService from "@/api/index"
import Animation from "@/api/animation"

export default {
  name: 'ImageSmall',
  props: ['data', 'classData'],
  mounted() {
    setTimeout(() => {
      this.animateImage()
    }, 3000);
  },
  methods: {
    animateImage() {
      let $element = $(`.${this.classData}`),
          elementWidth = $element.width(),
          elementHeight = $element.height(),
          config = ApiService.ramdomConfig(),
          leftPosition = config.left - elementWidth * 3

      config.width = elementWidth * 0.2
      config.height = elementHeight * 0.2

      Animation.scaleImage($element, config, leftPosition)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    z-index: 2;
  }

  .animation-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    text-align: center;
    animation: fadein 1s;
    transform: translate(-50%, -50%);

    img {
      width: auto;
      height: 100%;
      border: 5px solid #fff;
    }
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
</style>
