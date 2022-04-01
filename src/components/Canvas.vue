<template>
  <div style="width: 100vw;height: 100vh;">
    <img id="background" src="../assets/background.png"/>
    <div id="content">
      <img id="pad" src="../assets/draw/pad.png" ref="canvasHW"/>
      <div id="text">
        <div class="font">随心画海棠符<span></span></div>
        <div class="font">抽限定明信片<span></span></div>
      </div>
    </div>
    <canvas ref="canvasF" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="{top: top+'px'}"></canvas>
  </div>
</template>
<script>
  import 'vuex';
  import axios from 'axios'
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
      },
      touchMove(ev) {
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
      },
      randomCard(){
        var numdsf = Math.floor(Math.random()*(1 - 100) + 100);
        if(numdsf>=1&&numdsf<=10){
            return 1;
        }else if(numdsf>=11&&numdsf<=20){
            return 2;
        }else if(numdsf>=21&&numdsf<=40){
            return 3;
        }else if(numdsf>=41&&numdsf<=60){
            return 4;
        }else if(numdsf>=61&&numdsf<=70){
            return 5;
        }else if(numdsf>=71&&numdsf<=80){
            return 6;
        }else if(numdsf>=81&&numdsf<=90){
            return 7;
        }else if(numdsf>=91&&numdsf<=100){
            return 8;
        }
      },
      touchEnd() {
        //返回随机卡片序号
        let cardId = this.randomCard();
        this.$router.push({path: '/end',query:{card: cardId}})
        axios.defaults.baseURL = 'http://120.48.17.78:1000'
        axios.post('/api/v1/card/user'+'?token'+this.$store.state.token, {
            "cardId": cardId,
        }).then(response => {
            console.log('/api/v1/card/user', response.data)
        }, error => {
            console.log('错误', error.message)
        })
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
    margin-top: 5px;
    width: 100vw;
    height: 20vw;
    background: url("../assets/draw/text.png");
    background-size: 100% 100%;
    padding: 2.5vw 25vw 2vw 25vw;
    box-sizing: border-box;
  }
  .font{
    font-size: 5vw;
    text-align: justify;
    height: 7vw;
    color: #b1898d;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .font>span{
    display: inline-block;
    padding-left: 100%;
  }
  canvas{
    position: absolute;
    top:28vh;
    left:15vw;
  }
</style>