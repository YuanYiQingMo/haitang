<template>
  <div id="homePage">
    <div class="collection1" @click="back">
      <img src="../assets/text/DrawCard.png" class="BackText"/>
    </div>
    <div id="main" ref="scroll_div" @touchend='touchEnd'>
      <div id="pictures">
        <div v-for="(item,index) in pictures" :key="item.id" class="picture">
          <img v-if="item.collected" :src="item.url" class="card" @click="cardMsg(index)" />
          <img src="../assets/cards/XiYou.png" class="xiyou" v-if="(index===1||index===0)&&!item.collected">
          <div v-if="!item.collected" class="unattained"><div class="font"></div></div>
        </div>
      </div>
    </div>
    <div id="twoCircles">
      <div :class="{'circle1': !currentPage, 'circle2': currentPage}" @click="go0"></div>
      <div :class="{'circle1': currentPage, 'circle2': !currentPage}" @click="go1"></div>
    </div>
    <div id="buttons">
      <div id="bigButton" @click="exchange">
        <div id="bigButton_font1">兑换皮肤</div>
        <div id="bigButton_font2">集卡{{cardNumber}}/5</div>
      </div>
      <div id="question" @click="displayIllustrate"></div>
    </div>

    <!-- 提示框 -->
    <!-- 说明 -->
    <transition name="plus">
      <div id="alert_illustrate" v-if="display.illustrate">
        <img class="x" src="../assets/alert/x.png" @click="closeIllustrate"/>
        <img class="illustrate_text" src="../assets/alert/2020.png"/>
      </div>
    </transition>
    <transition name="plus">
      <div id="alert_success" v-if="display.success">
        <img class='success' src="../assets/alert/success.png">
        <img class="set" src="../assets/alert/setPiFu.png">
      </div>
    </transition>
    <transition name="plus">
      <div id="alert_fail" v-if="display.fail">
        <img class='fail' src="../assets/alert/already.png">
      </div>
    </transition>
    <transition name="plus">
      <div id="alert_sorry" v-if="display.sorry">
        <img class='sorry' src="../assets/alert/sorry.png">
      </div>
    </transition>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  data() {
    return {
      currentPage: 0,
      pictures:[{"id":1,"url":require("../assets/cards/11.png"),"collected":false},
                {"id":2,"url":require("../assets/cards/22.png"),"collected":false},
                {"id":3,"url":require("../assets/cards/3.png"),"collected":false},
                {"id":4,"url":require("../assets/cards/4.png"),"collected":false},
                {"id":5,"url":require("../assets/cards/5.png"),"collected":false},
                {"id":6,"url":require("../assets/cards/6.png"),"collected":false},
                {"id":7,"url":require("../assets/cards/7.png"),"collected":false},
                {"id":8,"url":require("../assets/cards/8.png"),"collected":false},],
      startX:0,
      result:{},
      cardNumber:0,
      display:{'illustrate':false,'success':false,'fail':false,'sorry':false},
    };
  },
  beforeCreate(){
    let that = this
    axios.get('http://120.48.17.78:1000/api/v1/card/user'+'?token='+this.$store.state.token,{
      params:{}
      }).then(function(response){
        for(let i=0 ; i<response.data.result.length;i++){
          if(response.data.result[i]){
            let cardName = response.data.result[i].cardName
            that.pictures[parseInt(cardName)-1].collected = true
          }
        }
        for(let i=0;i<that.pictures.length;i++){
          if(that.pictures[i].collected){
          that.cardNumber++
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  methods: {
    cardMsg(index){
      this.$router.push({path: '/card',query:{card: index+1}})
    },
    back(){
      this.$router.push({path: '/',query:{page: 3}})
    },
    srcollGoTo(x){
      let that = this
      let now = this.$refs.scroll_div.scrollLeft;
      let step = (x-now)/50;
      var timer = setInterval(function() {
        that.$refs.scroll_div.scrollLeft = that.$refs.scroll_div.scrollLeft + step;
      }, 2);
      setTimeout(function() {
        clearInterval(timer);
      }, 500);
    },
    go0(){
      this.currentPage=0
      this.srcollGoTo(0)
    },
    go1(){
      let that = this
      this.currentPage=1
      this.srcollGoTo(that.$refs.scroll_div.scrollWidth/2)
    },
    touchEnd() {
      let that = this
      let x 
      let stop = false
      var timer = setInterval(function() {
        if(that.$refs.scroll_div.scrollLeft === x ){
          clearInterval(timer);
          stop = true
        }
        else{
          x = that.$refs.scroll_div.scrollLeft
        }
        if(stop){
          if(that.$refs.scroll_div.scrollLeft<that.$refs.scroll_div.scrollWidth/4){
            that.go0()
          }else if(that.$refs.scroll_div.scrollLeft>that.$refs.scroll_div.scrollWidth/4){
            that.go1()
          }
        }
      }, 100);

    },
    exchange(){
      let that = this
      if(that.cardNumber>=5){
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://120.48.17.78:1000//api/v1/skin/user'+'?token='+that.$store.state.token+'&skinId='+'-1040093182');
        xhr.send(null);
        xhr.onload = function(e){
          var json = JSON.parse(e.target.response)
          if(json.result.code===1){ //不知道返回值，条件待补全
            setTimeout(function(){
              that.display.success = true
            },500)
            setTimeout(function(){
              that.display.success = false
            },2000)
          }else if(json.result.code===0){
            setTimeout(function(){
              that.display.fail = true
            },500)
            setTimeout(function(){
              that.display.fail = false
            },2000)
          }
        }
      }else{
        setTimeout(function(){
              that.display.sorry = true
            },500)
            setTimeout(function(){
              that.display.sorry = false
            },2000)
      }
    },
    displayIllustrate(){
      this.display.illustrate=true
    },
    closeIllustrate(){
      this.display.illustrate=false
}
  },
};
</script>
<style>
#homePage {
  width: 100%;
  height: 100%;
  background: url("../assets/background.png") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  position: absolute;
}
.collection1{
  height: 40px;
  line-height:45px;
  margin-right: 5px;
  width: 120px;
  font-size: 22px;
  text-align:center;
  background: url("../assets/card/collection.png") no-repeat center center ;
  border-radius: 10px;
  color:#b1898d;
  position: absolute;
  top: 4vh;
  right: 9vw;
}
#main{
  position: absolute;
  top: 10vh;
  left: 5vw;
  width: 90vw;
  height: 70vh;
  overflow-x: scroll;
  }
#twoCircles{
  position: absolute;
  top: 78vh;
  width: 100vw;
  height: 30px;
  display: flex;
  justify-content: center;
  }
  ::-webkit-scrollbar{display: none;}
.circle1{
  width: 30px;
  height: 30px;
  background-size: cover;
  background:url('../assets/collection/circle1.svg');
  }
.circle2{
  width: 30px;
  height: 30px;
  background-size: cover;
  background:url('../assets/collection/circle2.svg');
}
#pictures{
  width:180vw;
  height:100%;
  display: flex;
  flex-wrap: wrap;
}
.picture{
  position: relative;
  width: 35vw;
  height: 42%;
  margin: 2% 5vw;
  background-color: #f5e9f0;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
}
.xiyou{
  position: absolute;
  left: 22vw;
  width: 10vw;
  height: 9vh;
}
.unattained{
  margin-top: 74%;
  height: 25%;
  width: 200%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
  background-color: #f5e9f0;
  transform: rotate(20deg) translate(-30%, 20%);
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.BackText{
  margin-left: 15%;
  margin-top: 8%;
  width: 70%;
  height: auto;
  display: block;
}
.font{
  background: url('../assets/text/Unattained.png') no-repeat;
  background-size: 70% 75%;
  margin-left: 37%;
  margin-top: 5%;
  height:50px;
  width: 50%;
}
.card{
  width: 90%;
  height: 90%;
  margin: 8% 5%;
  background-size: 100% 100%;
  z-index: 11;
}
#buttons{
  position: absolute;
  top: 81vh;
  width: 100vw;
  height: 14vh;
  display: flex;
  align-items: center;
  justify-content: center;
  }
#bigButton{
  margin-left: 6vh;
  width: 40vw;
  height: 9vh;
  border-radius: 15px;
  background-color: #f5e9f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #b1898d;
  font-size: 20px;
}
#bigButton_font1{
  font-size: 20px;
}
#bigButton_font2{
  font-size: 15px;
}
#question{
  margin-left: 1vh;
  height: 5vh;
  width: 5vh;
  background:url('../assets/alert/question.png');
  background-size: 100% 100%;
}
/* 提示框 */
.plus-enter-active{
    transition: opacity .5s;
  }
.plus-enter{
  opacity: 0;
}
.plus-leave-active{
  transition: opacity .5s;
}
.plus-leave-to{
  opacity: 0;
}

#alert_illustrate{
  position: absolute;
  top: 25vh;
  left: 0vw;
  width: 100%;
  height: 45%;
  background-image: url('../assets/alert/alert.png');
  background-size: 100% 100%;
}
#alert_illustrate .x{
  position: absolute;
  left: 84vw;
  top: 5vh;
  height: 5vw;
  width: 5vw;
}
#alert_illustrate .illustrate_text{
  position: absolute;
  left: 10vw;
  top: 10vh;
  height: auto;
  width: 82vw;
}
#alert_success{
  background-image: url('../assets/alert/alert.png');
  background-size: 100% 100%;
  position: absolute;
  top: 35vh;
  left: 20%;
  width: 60%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#alert_success .success{
  margin-top: 6vh;
  height: auto;
  width: 30vw;
}
#alert_success .set{
  margin-top: 2vh;
  height: auto;
  width: 35vw;
}

#alert_fail{
  background-image: url('../assets/alert/alert.png');
  background-size: 100% 100%;
  position: absolute;
  top: 35vh;
  left: 20%;
  width: 60%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#alert_fail .fail{
  margin-top: 4.5vh;
  height: auto;
  width: 35vw;
}

#alert_sorry{
  background-image: url('../assets/alert/sorry-div.png');
  background-size: 100% 100%;
  position: absolute;
  top: 42vh;
  left: 5%;
  width: 90%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#alert_sorry .sorry{
  margin-top: 1.5vh;
  height: auto;
  width: 80vw;
}


</style>