<template>
    <div id="save">
        <div id="background"></div>
        <div id="content">
            <div class="twoButton">
                <div class="collection" @click="goBack">
                    <img src="../assets/text/Drawagain.png" class="topButtonText">
                </div>
                <div class="collection" @click="goCollection">
                    <img src="../assets/text/Collection.png" class="topButtonText">
                </div>
            </div>
            <div class="picture">
                <img class="pic" :src="this.arr[this.card-1].url" />
            </div>
            <div class="saveButton">&nbsp;长按图片进行保存&nbsp;<span></span></div>
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
                {"url":require("../assets/collectionCard.png")},
                {"url":require("../assets/collectionCard.png")},
                {"url":require("../assets/collectionCard.png")},
                {"url":require("../assets/collectionCard.png")},
                {"url":require("../assets/collectionCard.png")},
                {"url":require("../assets/collectionCard.png")},
                {"url":require("../assets/collectionCard.png")},
                {"url":require("../assets/collectionCard.png")},
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
            this.$router.push({path: '/',query:{page: 3}})
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
    height: 92%;
    margin:7% 7% 0% 7%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
}
.collection{
    height: 45px;
    line-height:45px;
    width: 120px;
    font-size: 22px;
    text-align:center;
    background: url("../assets/card/collection.png") no-repeat center center ;
    border-radius: 10px;
    color:#b1898d;
}
.twoButton{
    flex: 0 0 46px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}
.topButtonText{
    margin: 10%;
    width: 80%;
    height: 45%;
    display: block;
}
.picture{
    flex: 1;
    width: 100%;
    margin:7% 2% 7% 2%;
    border-radius: 5px;
    margin:5% 0;
    border-radius: 15px;
    background: url("../assets/card/background.png");
    /* opacity: 0.7; */
}
.pic{
    height: 100%;
    width: 100%;
}
.saveButton{
    flex:0 0 50px;
    line-height: 50px;
    width:100%;
    background-color: rgb(245, 233, 240);
    border-radius: 10px;
    font-size: 22px;
    text-align:center;
    color:#b1898d;
    text-align: justify;
}
.saveButton>span{
    display: inline-block;
    padding-left: 100%;
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