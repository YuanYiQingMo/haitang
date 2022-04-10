<template>
    <div @click="play" style="height:100vh;width:100vw">
        <div id="main-btn"></div>
    </div>
</template>

<script>
export default {
    methods:{
        play(){
            // this.$emit('nextPage');
            this.$parent.Page3();
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
    background-image: url("../assets/click/buttons.png");
    background-size: 100% 100%;
    position: absolute;
    left: 25vw;
    top: 25vh;
    width: 50vw;
    height: 50vw;
    animation:changeRight 15s linear infinite;
    transform: scale(1.0);
    transform: all 2s;
    border-radius: 25vw;
    outline:none;
}
#main-btn:focus{outline:0;}

#main-btn:hover{
    transform: scale(1.2);
}
</style>