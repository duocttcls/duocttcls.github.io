<template>
  <div class="container-fluid movie-2">
      <div class="row">
        <div class="col-md-12 slide-start" :style="{ height: height + 'px' }">
          <div class="slide-start-1 slide-text">画面をクリックするとスライドショーを開始します<br>準黼ができましたら、画面をクリックしてスタートしてください</div>
          <div class="slide-start-2 slide-text">Wedding Sweet memories</div>
          <div class="slide-start-3 slide-text">with</div>
          <div class="slide-start-4 start-img">
            <img :src="startImg" :height="height" width="100%">
          </div>
        </div>
        <div class="col-md-3">
          <marquee direction="up" scrollamount="3" id="slide-show-marquee" :style="{ height: height + 'px' }">
            Special thanks.
            Out Special guests. 












            ☆新郎ゲスト☆
            ◯会社上司◯
            小林なつみ様
            大森友以乃様
            岩井三郎様


            本日はありがとうございました
            今後もご指導ご鞭撻のほどよろ
            しくお願いいたします


            〇会社同期〇
            有田明様
            岩田勇一様
            内野洋介様

            安井動様
            平林沙耶様
            山川豊様
            伊藤様
            松本右京様


            素敵な同期に恵まれて幸せです
            これからもよろしくね


            ◯大学友人◯
            井出郁恵様
            小西早紀様
            永野真悠子様
            松木丈雄様
            西山一樹様
            田島ちえみ様
            白石勝久様
            植田一徳様
            田所さやか様


            卒業しても定期的に集まる大切
            な仲間
            また飲もう!


            ◯高校友人◯
            小谷美月様
            河原俊二様
            竹田みあ様
            小高マサカズ様
            荻野怜奈様
            木村良介様
            百瀬瞬様
            川瀬美紀様
            小口勝久様
            白木里奈様
            羽田あさみ様
            山本光様
          </marquee>
        </div>
        <div class="col-md-9" :style="{ height: height + 'px' }">
          <div
            v-for="(url, index) in images"
            :class="`animation-image animation-image-${index}`"
            :key="index"
          >
            <div class="animation-boxshow">
              <img :src="url">
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import ApiService from "@/api/index"

  export default {
      data() {
        return {
          height: ApiService.getWindowHeight(),
          active: -1,
          slideStart: 1,
          startImg: `${process.env.BASE_URL}images/start.png`,
          images: [
            `${process.env.BASE_URL}images/1.jpg`,
            `${process.env.BASE_URL}images/2.jpg`,
            // `${process.env.BASE_URL}images/3.jpg`,
            `${process.env.BASE_URL}images/4.jpg`,
            // `${process.env.BASE_URL}images/5.jpg`,
            `${process.env.BASE_URL}images/6.jpg`,
            // `${process.env.BASE_URL}images/7.jpg`,
            `${process.env.BASE_URL}images/8.jpg`,
            `${process.env.BASE_URL}images/9.jpg`,
            `${process.env.BASE_URL}images/10.jpg`,
            `${process.env.BASE_URL}images/11.jpg`,
            // `${process.env.BASE_URL}images/12.jpg`,
            `${process.env.BASE_URL}images/13.jpg`,
            `${process.env.BASE_URL}images/14.jpg`,
            // `${process.env.BASE_URL}images/15.jpg`,
            // `${process.env.BASE_URL}images/16.jpg`,
            `${process.env.BASE_URL}images/17.jpg`,
            `${process.env.BASE_URL}images/18.jpg`,
            `${process.env.BASE_URL}images/19.jpg`,
            `${process.env.BASE_URL}images/20.jpg`,
            `${process.env.BASE_URL}images/21.jpg`,
            `${process.env.BASE_URL}images/22.jpg`,
            `${process.env.BASE_URL}images/23.jpg`,
            `${process.env.BASE_URL}images/24.jpg`,
            `${process.env.BASE_URL}images/25.jpg`,
            `${process.env.BASE_URL}images/26.jpg`,
            `${process.env.BASE_URL}images/27.jpg`,
            `${process.env.BASE_URL}images/28.jpg`,
            `${process.env.BASE_URL}images/29.jpg`,
            `${process.env.BASE_URL}images/30.jpg`
          ]
        }
      },
      mounted () {
        document.getElementById('slide-show-marquee').stop();
        setInterval(() => {
          if(this.slideStart >= 5) {
            $('.animation-image-' + this.active).animate({
              opacity: 0
            }, 1000, function() {
              $(this).css({
                opacity: 1,
                display: 'none'
              });
            });

            if (this.active >= this.images.length - 1) {
              this.active = 0;
              // $('.slide-start').show();
              // this.slideStart = 1;
              // $('.slide-start-' + this.slideStart).show();
            } else {
              this.active = this.active + 1;
            }
            $('.animation-image-' + this.active).show();
          } else {
            $('.slide-start-' + this.slideStart).animate({
              opacity: 0
            }, 2000, function() {
              $(this).css({
                opacity: 1,
                display: 'none'
              });
            });

            this.slideStart = + this.slideStart + 1;
            $('.slide-start-' + this.slideStart).show();
            if(this.slideStart >= 5) {
              $('.slide-start').hide();
              this.active = 0;
              $('.animation-image-0').show();
              document.getElementById('slide-show-marquee').start();
            }
          }
        }, 6000)
      }
  };
</script>

<style lang="scss">
  body {
    background: black;
  }
  .movie-2 {
    height: 100%;
    width: 100%;
    .slide-text {
      text-align: center;
      height: 100%;
      position: absolute;
      top: 47%;
      display: none;
      color: white;
      font-size: 36px;
      animation: fadein 4s;
      width: 100%;
    }
    .slide-start-1 {
      display: block;
      font-size: 16px;
    }
    .start-img {
      position: absolute;
      display: none;
      animation: fadein 4s;
      width: 100%;
    }
    #slide-show-marquee {
      white-space: pre;
      text-align: center;
      color: white;
      font-size: 16px;
      // letter-spacing: 2px;
    }
    .animation-image {
      position: relative;
      display: none;
      width: 100%;
      height: 100%;
      text-align: center;
      .animation-boxshow {
        width: 100%;
        height: 100%;
        -webkit-box-shadow: inset 3px 0px 50px 76px rgba(0,0,0,1);
        -moz-box-shadow: inset 3px 0px 50px 76px rgba(0,0,0,1);
        box-shadow: inset 3px 0px 50px 76px rgba(0,0,0,1);
        z-index: 3;
        img {
          width: auto;
          height: 100%;
          max-width: 100%;
          max-width: 100%;
          position: relative;
          z-index: -2;
          animation: fadein 8s;
        }
      }
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
