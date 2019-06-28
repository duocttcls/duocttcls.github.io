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
          config = ApiService.ramdomConfig(),
          elementWidth = $element.width(),
          leftPosition = config.left - elementWidth * 3

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
    width: 50%;
    height: 50%;
    padding: 20px;
    text-indent: inherit;
    animation: fadein 1s;
    transform: translate(-50%, -50%);

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
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
