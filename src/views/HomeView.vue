
<template>
<div class="container">
  <div class="col">
    <button @click="counterStore.decrement()">-</button>
    <button @click="counterStore.decrementByFive()">-</button>
  </div>
  <div class="counter">
    <p>Counter Value:</p>
    <p>{{ counterStore.count }}</p>
  </div>
  <div class="col">
    <button @click="counterStore.increment()">+</button>
     <button @click="counterStore.incrementByFive()">+</button>
   </div> 
</div>
</template>

<script setup>
  import { useCounterStore } from '@/stores/counter';
  const counterStore = useCounterStore();
</script>

<style scoped>
.container{
  height: 100vh;
  width: 100vw;
  background-color: lavender;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.col{
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.counter{
  text-align: center;
}
button{
  background-color: plum;
  border: none;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
</style>