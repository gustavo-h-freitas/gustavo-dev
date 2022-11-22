<template>
  <abstract-link class="card" :to="to">
    <slot/>
  </abstract-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.card {
  position: relative;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 50%);
  border-radius: .75rem;
  background: rgba(255, 255, 255, 10%);
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 50%);
  border-left: 1px solid rgba(255, 255, 255, 50%);
  backdrop-filter: blur(5px);
}
</style>
