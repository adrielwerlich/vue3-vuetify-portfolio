<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

let myName = ref(null)

let colorTransitionInterval, increaseInterval, decreaseInterval

const transitionColor = () => {
  const values = [
    'rgba(9, 5, 254, 0.984)',
    'rgba(254, 22, 5, 0.986)',
    'rgba(254, 217, 5, 0.986)',
    'rgba(254, 250, 5, 0.986)',
    'rgba(217, 254, 5, 0.986)',
    'rgba(84, 254, 5, 0.986)',
    'rgba(5, 254, 179, 0.986)',
    'rgba(5, 254, 242, 0.986)',
    'rgba(5, 175, 254, 0.986)',
    'rgba(183, 5, 254, 0.986)'
  ]

  let index = 1

  colorTransitionInterval = setInterval(() => {
    if (myName.value && myName.value.style) {
      myName.value.style.textShadow = `rgb(255, 255, 255) 0px 0px 7.6px, ${values[index]} 0px 0px 30.4px, rgb(254, 5, 225) 0px 0px 45.6px`

      index++

      if (index == 9) index = 0
    }
  }, 2000)
}

const increaseNameAnimation = () => {
  let d = -6
  increaseInterval = setInterval(() => {
    if (myName.value && myName.value.style) {
      myName.value.style.transform = `rotate(${d}deg)`
      d += 0.1
      if (d >= 7) {
        clearInterval(increaseInterval)
        decreaseNameAnimation(d)
      }
    }
  }, 50)
}

const decreaseNameAnimation = (d) => {
  decreaseInterval = setInterval(() => {
    if (myName.value && myName.value.style) {
      myName.value.style.transform = `rotate(${d}deg)`
      d -= 0.1
      if (d <= -6) {
        clearInterval(decreaseInterval)
        increaseNameAnimation()
      }
    }
  }, 50)
}

onMounted(() => {
  transitionColor()
  increaseNameAnimation()
})

onUnmounted(() => {
  clearInterval(colorTransitionInterval)
})
</script>

<template>
  <div class="greetings">
    <h1 class="green" ref="myName">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
