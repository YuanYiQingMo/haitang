<template>
    <div id="homepage">
        <transition name="fade" mode="out-in">
            <div v-if="currentPage == 1" id="background" @click="nextPage" key="first-page"></div>
            <div v-if="currentPage == 2" id="normal" class="normal" key="second-page">
                <big-button></big-button>
                <img src="../assets/click/arrows.svg" id="arrows"/>
            </div>
            <div v-if="currentPage == 3" id="canvas" class="normal" key="third-page">
                <Canvas></Canvas>
            </div>
        </transition>
    </div>
</template>

<script>
import 'vuex';
import BigButton from '../components/BigButton.vue';
import Canvas from '../components/Canvas.vue';
// import axios from 'axios';
export default {
    components: { BigButton, Canvas },
    data(){
        return{
            currentPage:1,
        }
    },
    beforeCreate(){
        let that = this
        let token = this.$route.query.token
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://120.48.17.78:1000/api/v1/auth/client?token='+token);
        xhr.send(null);
        xhr.onload = function(e){
        var json = JSON.parse(e.target.response)
        that.$store.commit('setToken', json.result)
        }


        // var xhr = new XMLHttpRequest();
        // xhr.open('POST','http://120.48.17.78:1000/api/v1/auth/wechat?password=111&userNumber=302');
        // xhr.send(null);
        // xhr.onload = function(e){
        //     var json = JSON.parse(e.target.response)
        //     that.$store.commit('setToken', json.result)
        // }
    },
    mounted(){
        if(this.$route.query.page){
        this.currentPage = this.$route.query.page
        }
    },
    methods:{
        nextPage(){
            this.currentPage++;
        }
    }
};
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active{
    transition: all 0.5s ease
}
.fade-enter, .fade-leave-active {
    opacity: 0
}

img#background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

#homepage{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#arrows{
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    height: 25vw;
    animation-name: beat;
    /*动画名称*/
    animation-duration: 1s;
    /*设置秒数*/
    animation-timing-function: linear;
    /*速度曲线*/
    animation-iteration-count: infinite;
    /*播放次数*/
    animation-direction: alternate;
    /*逆向播放*/
    animation-play-state: running;
    /*正在运行*/
}

@keyframes beat {
        0% {
            top:55vh;
        }
        100% {
            top:57vh;
        }
    }


#background {
    width: 100%;
    height: 100%;
    background: url("../assets/homePage.png") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
}

.normal {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url("../assets/background.png") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
}
</style>