<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle" class="filter">
        <!--内容-->
      </div>
      <video :style="fixStyle" autoplay class="fillWidth" loop muted @canplay="canplay">
        <source src="../videos/background_scene.mp4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div v-if="!videoCanPlay" class="poster hidden">
        <img :style="fixStyle" alt="" src="../components/pic/bg.jpg">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'tryV',
  data() {
    return {
      videoCanPlay: false,
      fixStyle: ''
    }
  },
  methods: {
    canplay() {
      this.videoCanPlay = true
    }
  },
  mounted: function () {   //屏幕自适应
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  }
}
</script>

<style scoped>
.homepage-hero-module,
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
}

.fillWidth {
  width: 100%;
}
</style>


