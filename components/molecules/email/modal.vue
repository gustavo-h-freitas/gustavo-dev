<template>
  <div class="contact-absolute">
    <p @click="toggleModal(true)">Contact me</p>

    <modal v-model="showModal">
      <email-form :is-modal-open="showModal" @closeModal="toggleModal(false)"/>
    </modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    showModal: false
  }),

  mounted() {
    document.addEventListener('keyup', this.quitOnEscKey)
  },

  beforeDestroy() {
    document.removeEventListener('keyup', this.quitOnEscKey)
  },

  methods: {
    toggleModal(showModal = true) {
      this.showModal = showModal
    },

    quitOnEscKey({ key }) {
      if (key === 'Escape') {
        this.toggleModal(false)
      }
    }
  }
}
</script>

<style>
.contact-absolute {
  position: absolute;
  color: #2a2a2a;
  bottom: 20px;
  right: 20px;
  background: #eaeaea;
  border-radius: 6px;
}

.contact-absolute > p {
  cursor: pointer;
  font-weight: 700;
  padding: .75rem 1.5rem;
}
</style>