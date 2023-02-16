<template>
  <div class="modal-content" @click.stop>
    <h2>Get in touch with me!</h2>

  <form class="email-form" @submit.prevent="submitEmail">
    <div>
      <input
        v-model="name"
        type="text"
        required="true"
        placeholder="Name"
        aria-label="Name"
      />

      <input
        v-model="email"
        type="email"
        required="true"
        placeholder="E-mail"
        aria-label="E-mail"
      />
    </div>

    <textarea v-model="message" cols="30" rows="10" required="true" placeholder="Leave a message..."/>

    <input type="submit" value="Submit">
  </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    message: ''
  }),

  methods: {
    submitEmail(event) {
      console.log(event);
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
  background: #222222;
  color: #fefefe;
  border: none;
  border-radius: 6px;
  width: min-content;
  cursor: pointer;
}

@media (max-width: 660px) {
  .email-form > div {
    flex-direction: column;
  }
}
</style>