<template>
  <div class="content">
    <div class="content-title">
      <h1>Hi, I'm Gustavo and my job is to make sure your product will be sustainable maintainable and scalable.</h1>
      <h1>Check here my social media and last works.</h1>
    </div>

    <div class="content-grid">
      <content-card class="card-item" :to="email" aria-label="Click to send an email">
        <img src="/social-media/mail.webp" alt="Email">
      </content-card>

      <content-card class="card-item" :to="linkedinProfile" aria-label="Click to go to my Linkedin Profile">
        <img src="/social-media/linkedin.png" alt="Linkedin">
      </content-card>

      <content-card class="card-item" :to="whatsapp" aria-label="Click to send me a message on Whatsapp">
        <img src="/social-media/whatsapp.png" alt="Whatsapp">
      </content-card>

      <content-card class="card-item" :to="nbl" aria-label="Click to go to NBL link">
        <img src="/work/nbl.png" alt="NBL">
      </content-card>

      <content-card class="card-item" :to="sabido" aria-label="Click to go to Sabido link">
        <img src="/work/sabido.png" alt="Sabido">
      </content-card>

      <content-card class="card-item" :to="signorino" aria-label="Click to go to Signorino link">
        <img src="/work/signorino.jpg" alt="Signorino" class="signorino">
      </content-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    linkedinProfile: 'https://www.linkedin.com/in/gustavo-henrique-freitas/',
    email: 'mailto:business.gustavo.freitas@gmail.com',
    whatsapp: 'https://wa.me/+5561984004710',
    nbl: 'https://nbl.com.au/',
    signorino: 'https://www.signorino.com.au/',
    sabido: 'https://sabido.com/'
  })
}
</script>

<style>
.content-title {
  color: #fcfcfc;
  text-align: center;
  justify-content: center;
  padding: 2rem 5rem;
}

.content {
  max-width: 1100px;
  width: 100%;
  padding: 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 1rem;
}

.card-item {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .3s ease;
}

.card-item img {
  max-width: 100px;
  max-height: 100px;
}

img.signorino {
  max-width: 200px;
  height: auto;
}

.card-item:hover {
  transform: scale(1.03);
  transition: .3s ease;
}

@media (max-width: 768px) {
  .content {
    padding: 1rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .content-title {
    padding: 1rem 0;
  }

  .card-item {
    height: 200px;
  }

  .card-item img {
    width: 100px;
    height: auto;
  }

  img.signorino {
    width: 150px;
  }
}
</style>
