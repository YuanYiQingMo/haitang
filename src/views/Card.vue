<template>
  <div id="save">
      <div id="background"></div>
      <div id="content">
          <div class="twoButton">
              <div class="collection" @click="goCollection">
                  <img src="../assets/text/Collection.png" class="topButtonText">
              </div>
          </div>
          <div class="picture">
              <img class="pic" :src="this.arr[this.card-1].url" />
          </div>
          <div class="saveButton">
              <img src="../assets/text/Save.png">
          </div>
          <!-- <div class="saved" v-show=savedimg>已保存至图库</div> -->
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          card:0,
          savedimg:false,
          arr:[
              {"url":require("../assets/cards/1.png")},
              {"url":require("../assets/cards/2.png")},
              {"url":require("../assets/cards/3.png")},
              {"url":require("../assets/cards/4.png")},
              {"url":require("../assets/cards/5.png")},
              {"url":require("../assets/cards/6.png")},
              {"url":require("../assets/cards/7.png")},
              {"url":require("../assets/cards/8.png")},
          ]    
      }
  },
  beforeMount(){
      this.card = this.$route.query.card
  },
  // beforeMount(){
  //     for(var i=0;i<8;i++){
  //         if(this.arr[i].id==card){
              
  //         }
  //     }
  // },
  methods: {
      // tosave:function(){
      //     let that = this;
      //     this.savedimg=true
      //     setTimeout(function () {
      //         that.savedimg=false
      //     }, 2000)
      // },
      goCollection(){
          this.$router.push({path: '/collection'})
      },
      goBack(){
        this.$router.push({path: '/',query:{page: 3,newToken:this.$store.state.token}})
      }
  }
}
</script>

<style lang="scss" scoped>
#save{
  width: 100vw;
  height: 100vh;
  font-size: 5vw;
}
#background {
  width: 100%;
  height: 100%;
  background: url("../assets/background.png") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}
#content{
  position: absolute;
  width: 84%;
  height: 88%;
  margin:7% 7% 0% 7%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
}
.collection{
  height: 35px;
  width: 100px;
  font-size: 22px;
  text-align:center;
  background: url("../assets/card/collection.png") no-repeat center center ;
  border-radius: 10px;
  color:#b1898d;
}
.twoButton{
  flex: 0 0 40px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  align-items: center;
}
.topButtonText{
    margin: 10% 15%;
    width: 70%;
    height: 45%;
    display: block;
}
.picture{
  flex: 1;
  width: 95%;
  border-radius: 5px;
  margin:4% 0;
  border-radius: 15px;
  background: url("../assets/card/background.png");
  /* opacity: 0.7; */
}
.pic{
  height: 100%;
  width: 100%;
}
.saveButton{
  margin-top: 1vh;
  flex:0 0 40px;
  line-height: 50px;
  width:95%;
  background-color: rgb(245, 233, 240);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.saveButton>img{
  width: 50%;
}
.saved{
  position: absolute;
  top:45%;
  height: 50px;
  width: 200px;
  line-height: 50px;
  background: url("../assets/card/saved.png") no-repeat center center;
  border-radius: 15px;
  font-size: 25px;
  text-align:center;
  color:#b1898d;
  box-shadow: 5px 5px 15px rgba(41, 40, 40, 0.3);
  z-index: 80;
}
</style>