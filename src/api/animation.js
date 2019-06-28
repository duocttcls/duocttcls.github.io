export const Animation = {
  scaleImage($element, config, leftPosition) {
    $element
        .css({
          top: '25%',
          left: '25%'
        })
        .animate({
          top: config.top,
          left: config.left,
          width: config.width,
          height: config.height,
          textIndent: config.textIndent
        },
        {
          duration: config.timeScale,
          step: function(now) {
            $element.css({
              'transform': `rotate(${now}deg)`
            })
          }
        }, config.timeScale, 'linear')

    this.swingImage($element, config.top, leftPosition, config.timeSlide)
  },
  swingImage($element, top, leftPosition, timeSlide) {
    let infinityAnimate = () => {
            $element
              .animate({
                left: leftPosition,
              }, timeSlide, 'linear', () => {
                $element.css({
                  top: top,
                  right: '0',
                  left: 'auto'
                })
                .animate({
                  left: leftPosition
                }, timeSlide, 'linear')

                infinityAnimate()
              })
        }

    infinityAnimate()
  }
}

export default Animation
