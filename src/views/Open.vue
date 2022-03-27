<template>
    <div id="homepage">
        <div v-show="currentPage == 1" id="background" @click="nextPage"></div>
        <div v-show="currentPage == 2" id="normal">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentPage:1,
        }
    },
    methods:{
        nextPage(){
            this.currentPage = 2;
        }
    }
};
</script>

<style lang="scss">
#homepage{
    width: 100%;
    height: 100%;
}

#background {
    width: 100%;
    height: 100%;
    background: url("../assets/homePage.png") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
}

#normal {
    width: 100%;
    height: 100%;
    background: url("../assets/background.png") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
}
</style>