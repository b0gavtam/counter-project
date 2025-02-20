import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  const incrementByFive = () =>{
    count.value+=5;
  }
  const decrement = () =>{
    count.value--;
  }
  const decrementByFive = () => {
    count.value-=5;
  }

  return { count, increment, incrementByFive, decrement, decrementByFive }
})
