<template>
  <div class="content-wrapper">
    <content-home/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    const descriptionText = 'Hi, I\'m Gustavo and my job is to make sure your product will be sustainable maintainable and scalable Check here my social media and last works.'
    const image = `https://gustavo-dev.com.br/gustavo-dev.jpg`

    return {
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'Gustavo Freitas' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Gustavo Freitas' },
        { hid: 'description', name: 'description', content: descriptionText },

        { hid: 'og:description', name: 'og:description', content: descriptionText },
        { hid: 'twitter:description', name: 'twitter:description', content: descriptionText },

        { property: 'og:image:secure_url', hid: 'og:image:secure_url', content: image },
        { property: 'og:image', hid: 'og:image', content: image },
        { name: 'twitter:image', hid: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style>
@font-face {
  font-family: Inter;
  src: url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  text-decoration: none;
}

body {
  min-height: 100vh;
  min-width: 100vw;
  background: #161623;
  overflow-x: hidden;
}

.content-wrapper {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#f00, #f0f);
  clip-path: circle(20% at 80% 60%);
  z-index: -1;
}

body::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#2196f3, #e91e63);
  clip-path: circle(25% at 25% 20%);
  z-index: -1;
}
</style>