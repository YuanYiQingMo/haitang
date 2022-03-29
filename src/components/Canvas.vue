<template>
  <div style="width: 100vw;height: 100vh;">
    <img id="background" src="../assets/background.png"/>
    <div id="content">
      <img id="pad" src="../assets/draw/pad.png"/>
      <div id="text">
        <div class="font">随心画海棠符<span></span></div>
        <div class="font">抽限定明信片<span></span></div>
      </div>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
  export default {
      methods:{

      }
  };
</script>
<style>
  #background{
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  #content{
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  #pad{
    width: 100%;
    height: auto;
  }
  #text{
    margin-top: 5px;
    width: 100vw;
    height: 20vw;
    background: url("../assets/draw/text.png");
    background-size: 100% 100%;
    padding: 2.5vw 25vw 2vw 25vw;
    box-sizing: border-box;
  }
  .font{
    font-size: 5vw;
    text-align: justify;
    height: 7vw;
    color: #b1898d;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /*随便选的字体，还没改*/
  }
  .font>span{
    display: inline-block;
    padding-left: 100%;
  }
  #canvas{
    position: absolute;
    border: 5px dashed #cccccc;
    width: 70vh;
    top:28vh
  }
</style>