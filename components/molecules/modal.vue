<template>
  <transition name="fade" mode="out-in">
    <div v-show="value" class="modal-wrapper" @click="closeModal">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    closeModal() {
      this.$emit('input', false)
    }
  }
}
</script>

<style>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #0a0a0aba;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all .25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>