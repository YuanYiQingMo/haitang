<template>
  <div style="width: 100vw;height: 100vh;">
    <!-- <img id="background" src="../assets/s.png"/> -->
    <div id="content">
      <img id="pad" src="../assets/draw/pad.png" ref="canvasHW"/>
      <div id="text">
        <img src="../assets/text/Draw.png" class="canvas_text">
        <!-- <div class="font1">随心画海棠花<span></span></div>
        <div class="font1">抽限定明信片<span></span></div> -->
      </div>
    </div>
    <canvas ref="canvasF" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="{top: top+'px'}"></canvas>
  </div>
</template>
<script>
  import 'vuex';
  export default {
    data() {
      return {
        stageInfo:'',
        imgUrl:'',
        client: {},
        points: [],
        canvasTxt: null,
        startX: 0,
        startY: 0,
        moveY: 0,
        moveX: 0,
        endY: 0,
        endX: 0,
        w: null,
        h: null,
        isDown: false,
        isViewAutograph: this.$route.query.isViews > 0,
        contractSuccess: this.$route.query.contractSuccess,
        top:'',
        jumping: false,
        Id:['1','2','3','4','5','6','7','8']
      }
    },
    mounted() {
      let canvas = this.$refs.canvasF
      canvas.height = this.$refs.canvasHW.offsetHeight*0.68
      canvas.width = this.$refs.canvasHW.offsetWidth*0.71
      this.top = this.$refs.canvasHW.offsetHeight*0.30
      this.canvasTxt = canvas.getContext('2d')
      this.stageInfo = canvas.getBoundingClientRect()
    },
    methods: {
      //mobile
      touchStart(ev) {
        if(!this.jumping){
          ev = ev || event
          ev.preventDefault()
          if (ev.touches.length == 1) {
            let obj = {
              x: ev.targetTouches[0].clienX,
              y: ev.targetTouches[0].clientY,
            }
            this.startX = obj.x
            this.startY = obj.y
            this.canvasTxt.beginPath()
            this.canvasTxt.moveTo(this.startX, this.startY)
            this.canvasTxt.lineTo(obj.x, obj.y)
            this.canvasTxt.stroke()
            this.canvasTxt.closePath()
            this.points.push(obj)
          }
        }
      },
      touchMove(ev) {
        if(!this.jumping){
          ev = ev || event
          ev.preventDefault()
          if (ev.touches.length == 1) {
            let obj = {
              x: ev.targetTouches[0].clientX - this.stageInfo.left,
              y: ev.targetTouches[0].clientY - this.stageInfo.top
            }
            this.canvasTxt.lineWidth = 8;
            this.canvasTxt.strokeStyle = "#b1898d";
            this.moveY = obj.y
            this.moveX = obj.x
            this.canvasTxt.beginPath()
            this.canvasTxt.moveTo(this.startX, this.startY)
            this.canvasTxt.lineTo(obj.x, obj.y)
            this.canvasTxt.stroke()
            this.canvasTxt.closePath()
            this.startY = obj.y
            this.startX = obj.x
            this.points.push(obj)
          }
        }
      },
      randomCard(){
        var numdsf = Math.floor(Math.random()*(1 - 100) + 100);
        if(numdsf>=1&&numdsf<=5){
            return 1;
        }else if(numdsf>=6&&numdsf<=10){
            return 2;
        }else if(numdsf>=11&&numdsf<=25){
            return 3;
        }else if(numdsf>=26&&numdsf<=40){
            return 4;
        }else if(numdsf>=41&&numdsf<=55){
            return 5;
        }else if(numdsf>=56&&numdsf<=70){
            return 6;
        }else if(numdsf>=71&&numdsf<=85){
            return 7;
        }else if(numdsf>=86&&numdsf<=100){
            return 8;
        }
      },
      touchEnd() {
        //返回随机卡片序号
        let that = this
        if(!that.jumping){
          var cardId = this.randomCard();
          var xhr = new XMLHttpRequest();
          xhr.open('POST','http://202.113.13.171/api/v1/card/user'+'?token='+this.$store.state.token+'&cardId='+this.Id[cardId-1]);
          xhr.send(null);
          that.jumping = true
          setTimeout(function(){
            that.$router.push({path: '/end',query:{card: cardId}})
          },1500)
        }

      },

  }
}
</script>
<style>
  div{
    overflow: hidden;
  }
  #background{
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  #content{
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  #pad{
    width: 100vw;
    height: 162vw;
  }
  #text{
    margin-top: 1vh;
    width: 100vw;
    height: 20vw;
    background: url("../assets/draw/text.png");
    background-size: 100% 100%;
    padding: 2vw 20vw 2vw 20vw;
    box-sizing: border-box;
  }
  /* .font1{
    font-size: 5vw;
    text-align: justify;
    height: 7vw;
    color: #b1898d;
  }
  .font1>span{
    display: inline-block;
    padding-left: 100%;
  } */
  .canvas_text{
    margin-top: 2.5%;
    margin-left: 7.5%;
    height: auto;
    width: 85%;
  }
  canvas{
    position: absolute;
    top:28vh;
    left:15vw;
  }
</style>