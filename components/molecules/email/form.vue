<template>
  <div class="modal-content" @click.stop>
    <h2>Get in touch with me!</h2>

    <button class="close-button" @click="$emit('closeModal')">X</button>
    
    <form class="email-form" @submit.prevent="handleEmailSubmit">
      <div>
        <input
          ref="nameInput"
          v-model="emailForm.name"
          type="text"
          required="true"
          name="from_name"
          placeholder="Name"
          aria-label="Name"
        />

        <input
          v-model="emailForm.email"
          type="email"
          required="true"
          name="from_email"
          placeholder="E-mail"
          aria-label="E-mail"
        />
      </div>

      <textarea v-model="emailForm.message" name="message" cols="30" rows="10" required="true" placeholder="Leave a message..."/>

      <input type="submit" value="Submit">
    </form>

    <p v-if="success" class="success-message">Message sent successfully! I'll reply ASAP.</p>
    <p v-if="error" class="error-message">Something went wrong trying to send your message. :(</p>
  </div>
</template>

<script>
import { includeMetaTag } from '~/utils/index.js'

export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    emailForm: {
      email: '',
      name: '',
      message: ''
    },
    emailJs: null,
    success: false,
    error: false
  }),

  watch: {
    isModalOpen: {
      handler(newValue) {
        if (newValue) {
          this.$refs.nameInput.focus()
        }
      }
    }
  },

  methods: {
    async handleEmailSubmit(event) {
      await this.initEmailJs(event.srcElement)

      try {
        this.emailJs.sendForm(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, event.srcElement)
        this.success = true
        this.error = false
      } catch {
        this.success = false
        this.error = true
      }
    },

    async initEmailJs() {
      try {
        await includeMetaTag('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js', 'emailjs')
        this.emailJs = window.emailjs
        this.emailJs.init(process.env.EMAIL_PUBLIC_KEY)
        this.resetForm()
      } catch (err) {
        this.success = false
        this.error = true
      }
    },

    resetForm() {
      this.emailForm.email = ''
      this.emailForm.name = ''
      this.emailForm.message = ''
    }
  }
}
</script>

<style>
textarea {
  resize: none;
}

input:focus, textarea:focus {
  outline: none;
}

.email-form > div > input[type="text"], input[type="email"], textarea {
  flex: 1;
  padding: .625rem;
  border-radius: 6px;
  border: 2px solid #2196f3;
  transition: all .5s ease-in-out;
  font-size: 1rem;
}

.email-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 3rem;
}

.email-form > div {
  display: flex;
  width: 100%;
  gap: 1.25rem;
}

.email-form > div > input:focus, textarea:focus {
  border: 2px solid #e91e63;
}

.modal-content {
  max-width: 600px;
  border-radius: 6px;
  width: 100%;
  background: #fefefe;
  padding: 1rem;
  box-shadow: -2px 2px 4px rgba(255, 255, 255, 10%);
  position: relative;
}

.modal-content h2 {
  text-align: center;
  font-size: 2rem;
  color: #222;
}

.email-form input[type="submit"] {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  background: #2196f3;
  color: #fefefe;
  border: none;
  border-radius: 6px;
  width: min-content;
  cursor: pointer;
}

.success-message {
  color: #599744;
  margin: 2rem 0;
  font-weight: 600;
}

.error-message {
  color: #b10c2a;
  margin: 2rem 0;
  font-weight: 600;
}

.close-button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  right: 1rem;
  top: 1rem;
  width: 1.675rem;
  height: 1.675rem;
  border-radius: 100%;
  line-height: 1;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: #2a2a2a;
  background: #b10c2a;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .25);
}

@media (max-width: 660px) {
  .email-form > div {
    flex-direction: column;
  }
}
</style>