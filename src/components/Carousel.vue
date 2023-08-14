<script setup>
  import { ref,reactive,onMounted,onBeforeUnmount, nextTick } from 'vue';
    const all_images = reactive([
      {
        title:'Image-1',
        full_image:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        title:'Image-2',
        full_image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
      },
      {
        title:'Image-3',
        full_image:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        title:'Image-4',
        full_image:'https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        title:'Image-5',
        full_image:'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
      }
    ])

    let carousel = null

    const newItem = reactive({
       title:'',
       full_image:''
    }); 

    onMounted(()=>{
        carousel = new Flickity('#carousel',{})
    });

    onBeforeUnmount(() => {
        carousel.destroy();
    });

    function addNewitem() {
    all_images.push(newItem)
    carousel.destroy()
    nextTick(function () {
        carousel = new Flickity('#carousel',{})
    })
    }


</script>
<template>
    <h1 class="text-xl text-center">Carousel Slider</h1>
     <div class="my-10">
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
            <input v-model="newItem.full_image" type="text" id="color-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Image URL">
        </div>
        <div>
            <input v-model="newItem.title" type="text" id="color-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Title">
        </div>

        <div>
            <button @click.prevent="addNewitem()" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Image</button>
        </div>        
        </div>
    </form>

  </div>

  <div class="mx-auto items" id="carousel">
    <div :style="`background-image:url(${image.full_image})`" class="item" v-for="image, index in all_images" :key="item">
      <p class="pl-12 pr-12 pt-80 text-white font-bold ">{{ image.title }}</p>
    </div>
  </div>
</template>
<style scoped>
  .items {
    width: 600px;
    height: 400px;
    }

    .item {
    width: 600px;
    height: 400px;
    background-color: #ccc;
    background-size: cover;
    }
</style>