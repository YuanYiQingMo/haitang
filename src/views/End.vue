<template>
    <div id="save">
        <div id="background"></div>
        <div id="content">
            <div class="collection" @click="goCollection">我 的 集 卡</div>
            <div class="picture"></div>
            <div class="saveButton" @click="tosave">保 存 图 片</div>
            <div class="saved" v-show=savedimg>已保存至图库</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            savedimg:false,
        }
    },
    beforeCreate(){
        let card = this.$route.query.card
        console.log(card)
    },
    methods: {
        tosave:function(){
            let that = this;
            this.savedimg=true
            setTimeout(function () {
                that.savedimg=false
            }, 2000)
        },
        goCollection(){
            this.$router.push({path: '/collection'})
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
    flex: 0 0 45px;
    line-height:45px;
    width: 150px;
    font-size: 22px;
    text-align:center;
    background: url("../assets/card/collection.png") no-repeat center center ;
    align-self:flex-end;
    border-radius: 10px;
    color:#b1898d;
}
.picture{
    flex: 1;
    width: 100%;
    margin:7% 2% 7% 2%;
    border-radius: 5px;
    margin:5% 0;
    border-radius: 15px;
    background: url("../assets/card/background.png");
    opacity: 0.7;
}
.saveButton{
    flex:0 0 50px;
    line-height: 50px;
    width:160px;
    background: url("../assets/card/save.png") no-repeat center center;
    border-radius: 10px;
    font-size: 22px;
    text-align:center;
    color:#b1898d;
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