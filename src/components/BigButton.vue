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
    top: 25vh;
    width: 50vw;
    height: 50vw;
    animation:changeRight 15s linear infinite;
    transform: scale(1.0);
    cursor: pointer;
    transform: all 2s;
}

#main-btn:hover{
    transform: scale(1.2);
}
</style>