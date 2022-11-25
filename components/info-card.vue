<template>
  <content-card class="card-item" :to="link" :aria-label="ariaLabel">
    <div class="data-wrapper">
      <img :src="img.url" :alt="img.alt" :class="imgClass">
    </div>

    <div class="title-holder">
      <p>{{ title }}</p>
    </div>
  </content-card>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      required: true
    },
    img: {
      type: Object,
      required: true
    },
    imgClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

.card-item {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .3s ease;
  position: relative;
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

.title-holder {
  display: none;
}

@media (max-width: 768px) {
  .card-item {
    height: 58px;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  .card-item img {
    width: 32px;
    height: auto;
  }

  img.signorino {
    width: 74px;
  }

  .data-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  .title-holder {
    color: #fcfcfc;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.15rem;
    left: 0;
    top: 0;
    height: 100%;
    font-weight: 500;
  }
}
</style>