<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <SideBar/>
  <div class="p-4 sm:ml-64">
     <div class="p-4  mt-14">         
        <RouterView/>
     </div>
  </div>
</template>

<style scoped>

</style>
