import Vue from 'vue'

export function sleep (duration = 0) {
  return new Promise(resolve => {
    if (duration === 0) {
      Vue.nextTick(resolve)
    } else {
      setTimeout(resolve, duration)
    }
  })
}
