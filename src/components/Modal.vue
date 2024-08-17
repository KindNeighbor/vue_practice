<template>
  <div v-if="show" class="black-bg">
    <div class="white-bg">
      <img :src="product.image" class="room-img2">
      <h4>{{ product.title }}</h4>
      <p>{{ product.content }}</p>
      <p>{{ product.price }}</p>
      <button @click="$emit('close')">닫기</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  }
}

</script>

<style scoped>

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

.room-img2 {
  width: 256px;
  height: 128px;
  object-fit: cover;
}

</style>