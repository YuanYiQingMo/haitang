<template>
    <div id="save">
        <div id="background"></div>
        <div id="content">
            <div class="collection" @click="goCollection">我 的 集 卡</div>
            <img class="picture" src="../assets/card/background.png">
            <div class="saveButton" @click="tosave">保 存 图 片</div>
            <div class="saved" v-show=savedimg>已保存至图库</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            savedimg:true,
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
                console.log(this.savedimg)
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
    height: 90%;
    margin:10% 7%;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between; 
    // align-items: center;
}
.collection{
    // height: 7%;
    width: 40%;
    text-align:center;
    background: url("../assets/card/collection.png") no-repeat center center ;
    align-self:flex-end;
    border-radius: 5px;
    padding: 3% 0;
    // font-size: 50%;
    color:#b1898d;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.picture{
    height: 80%;
    width: 100%;
    margin:7% 2px 7% 2%;
    border-radius: 5px;
    opacity: 0.7;
}
.saveButton{
    // height: 7%;
    width: 50%;
    padding: 3% 0;
    background: url("../assets/card/save.png") no-repeat center center;
    border-radius: 5px;
    // font-size: 1.25rem;
    text-align:center;
    color:#b1898d;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.saved{
    position: absolute;
    top:45%;
    height: 4%;
    width: 50%;
    padding:3% 0;
    background: url("../assets/card/saved.png") no-repeat center center;
    border-radius: 7px;
    // font-size: 38%;
    text-align:center;
    color:#b1898d;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 5px 5px 15px rgba(41, 40, 40, 0.3);
    z-index: 80;
}
</style>