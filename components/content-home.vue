<template>
  <div class="content">
    <div class="content-title">
      <h1>Hi, I'm Gustavo and my job is to make sure your product will be sustainable, maintainable and scalable.</h1>
      <h1>Check here my social media and last works.</h1>
    </div>

    <div class="content-grid">
      <info-card
        v-for="(item, index) in contentCards" :key="`info-card-${index}`"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    contentCards: [
      {
        link: 'mailto:business.gustavo.freitas@gmail.com',
        title: 'E-mail',
        ariaLabel: 'Click to send an email',
        img: {
          url: '/social-media/mail.png',
          alt: 'Email'
        }
      },
      {
        link: 'https://www.linkedin.com/in/gustavo-henrique-freitas/?locale=en_US',
        title: 'Linkedin',
        ariaLabel: 'Click to go to my Linkedin Profile',
        img: {
          url: '/social-media/linkedin.png',
          alt: 'Linkedin'
        }
      },
      {
        link: 'https://wa.me/+5561984004710',
        title: 'Whatsapp',
        ariaLabel: 'Click to send me a message on Whatsapp',
        img: {
          url: '/social-media/whatsapp.png',
          alt: 'Whatsapp'
        }
      },
      {
        link: 'https://nbl.com.au/',
        title: 'NBL',
        ariaLabel: 'Click to go to NBL link',
        img: {
          url: '/work/nbl.png',
          alt: 'NBL'
        }
      },
      {
        link: 'https://sabido.com/',
        title: 'Sabido',
        ariaLabel: 'Click to go to Sabido link',
        img: {
          url: '/work/sabido.png',
          alt: 'Sabido'
        }
      },
      {
        link: 'https://www.signorino.com.au/',
        title: 'Signorino',
        ariaLabel: 'Click to go to Signorino link',
        img: {
          url: '/work/signorino.jpg',
          alt: 'Sinorino'
        },
        imgClass: 'signorino'
      }
    ]
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

@media (max-width: 768px) {
  .content {
    padding: 1.25rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .content-title {
    padding: 0 0 1rem;
    text-align: left;
  }

  .content-title h1 {
    font-size: 1.85rem;
  }
}
</style>
