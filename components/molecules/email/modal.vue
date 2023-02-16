<template>
  <div class="contact-absolute">
    <p @click="openModal()">Contact me</p>

    <modal v-model="showModal">
      <email-form />
    </modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    showModal: false
  }),

  methods: {
    openModal() {
      this.showModal = true
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

.contact-absolute p {
  cursor: pointer;
  font-weight: 700;
  padding: .75rem 1.5rem;
}
</style>