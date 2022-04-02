<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss">
.fade-enter-active, .fade-leave-active{
    transition: all 0.5s ease
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
#app {
    width: 100vw;
    height: 100vh;
    background: url('assets/background.png') no-repeat center center ;
    background-size: cover;
    /* background: rgb(255, 169, 169); */
}
</style>
