<template>
    <div id="homepage">
        <transition >
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
import BigButton from '../components/BigButton.vue';
import Canvas from '../components/Canvas.vue';
export default {
    components: { BigButton, Canvas },
    data(){
        return{
            currentPage:1,
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
// 动画
// .v-enter,.v-leave-to {
//     opacity: 0;
//     transform: translateX(50Px);
// }
// .v-enter-to, .v-leave {
//     opacity: 0.4;
//     transform: translateX(0);
// }
// .v-enter-active, .v-leave-active {
//     transform: all 8s ease;
// }

#homepage{
    width: 100%;
    height: 100%;
}

#arrows{
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vw;
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
            top:60vh;
        }
        100% {
            top:62vh;
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