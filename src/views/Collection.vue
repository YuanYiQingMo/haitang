<template>
  <div id="homePage">
    <div class="collection1" @click="back">
      <img src="../assets/text/DrawCard.png" class="BackText"/>
    </div>
    <div id="main" ref="scroll_div" @touchend='touchEnd'>
      <div id="pictures">
        <div v-for="item in pictures" :key="item.id" class="picture">
          <img v-if="item.collected" :src="item.url" class="card"/>
          <div v-if="!item.collected" class="unattained"><div class="font"></div></div>
        </div>
      </div>
    </div>
    <div id="twoCircles">
      <div :class="{'circle1': currentPage, 'circle2': !currentPage}" @click="go0"></div>
      <div :class="{'circle1': !currentPage, 'circle2': currentPage}" @click="go1"></div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios';
export default {
  data() {
    return {
      currentPage: 0,
      pictures:[{"id":1,"url":require("../assets/collectionCard.png"),"collected":false},
                {"id":2,"url":require("../assets/collectionCard.png"),"collected":false},
                {"id":5,"url":require("../assets/collectionCard.png"),"collected":false},
                {"id":6,"url":require("../assets/collectionCard.png"),"collected":false},
                {"id":3,"url":require("../assets/collectionCard.png"),"collected":false},
                {"id":4,"url":require("../assets/collectionCard.png"),"collected":false},
                {"id":7,"url":require("../assets/collectionCard.png"),"collected":false},
                {"id":8,"url":require("../assets/collectionCard.png"),"collected":false},],
      startX:0,
      result:{},
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
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  methods: {
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
}
.collection1{
  height: 45px;
  line-height:45px;
  width: 150px;
  font-size: 22px;
  text-align:center;
  background: url("../assets/card/collection.png") no-repeat center center ;
  border-radius: 10px;
  color:#b1898d;
  position: absolute;
  top: 3.6vh;
  right: 9vw;
}
#main{
  position: absolute;
  top: 10vh;
  left: 5vw;
  width: 90vw;
  height: 75vh;
  overflow-x: scroll;
  }
#twoCircles{
  position: absolute;
  top: 85vh;
  width: 100vw;
  height: 30px;
  display: flex;
  justify-content: center;
  }
  ::-webkit-scrollbar{display: none;}
.circle1{
  width: 40px;
  height: 40px;
  background-size: cover;
  background:url('../assets/collection/circle1.svg');
  }
.circle2{
  width: 40px;
  height: 40px;
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
  width: 35vw;
  height: 38%;
  margin: 3% 5vw;
  background-color: #f5e9f0;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
}
.unattained{
  margin-top: 80%;
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
  background-size: 80% 80%;
  margin-left: 35%;
  margin-top: 4%;
  height:50px;
  line-height: 50px;
  width: 50%;
  font-size: 25px;
  color: #d3a5a7;
}
.card{
  width: 90%;
  height: 90%;
  margin: 8% 5%;
  background-size: 100% 100%;
  z-index: 11;
}

</style>