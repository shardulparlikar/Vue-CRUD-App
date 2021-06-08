<template>
 <div class="container-fluid ">
    <AdduserData></AdduserData>
  <ViewData></ViewData>
 </div>
</template>

<script>
import AdduserData from "./components/AdduserData.vue"
import ViewData from './components/ViewData.vue'
export default {
  components : { 
      AdduserData,
      ViewData   

  }
}
</script>

<style>
.container-fluid{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
