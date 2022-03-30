<template>
    <img @click="play" id="main-btn" src="../assets/click/buttons.svg" />
</template>

<script>
export default {
    methods:{
        play(){
            // this.$emit('nextPage');
            this.$parent.nextPage();
        }
    }
};
</script>

<style lang="scss">
@keyframes changeRight {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
#main-btn {
    position: absolute;
    // margin: 50%;
    top: 20vh;
    width: 70vw;
    height: 70vw;
    animation:changeRight 15s linear infinite;
    // background-color: aqua;
    // background: url("../assets/click/button.png") no-repeat center center;
    // background-size: cover;
    // background-attachment: fixed;
    // border-radius: 999px;
    transform: scale(1.0);
    cursor: pointer;
    transform: all 2s;
}

#main-btn:hover{
    transform: scale(1.2);
}
</style>