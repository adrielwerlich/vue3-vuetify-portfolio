<template>
  <div id="arrowAnim" style="margin: 0 20px 0 0">
    <div class="arrowSliding">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay1">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay2">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay3">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<style>
#arrowAnim {
  width: 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 15px;
  height: 15px;
  border: 3px solid;
  border-color: black transparent transparent black;
  transform: rotate(127deg);
}

.arrowSliding {
  position: absolute;
  -webkit-animation: slide 4s linear infinite;
  animation: slide 4s linear infinite;
}

.delay1 {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.delay2 {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.delay3 {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

@-webkit-keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(-16px);
  }

  20% {
    opacity: 1;
    transform: translateX(-12px);
  }

  80% {
    opacity: 1;
    transform: translateX(12px);
  }

  100% {
    opacity: 0;
    transform: translateX(16px);
  }
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(-16px);
  }

  20% {
    opacity: 1;
    transform: translateX(-12px);
  }

  80% {
    opacity: 1;
    transform: translateX(12px);
  }

  100% {
    opacity: 0;
    transform: translateX(16px);
  }
}
</style>
