<template>
  <nuxt-link v-if="!isExternalLink(to) && !isMailToLink(to)" :to="to" >
    <slot/>
  </nuxt-link>

  <a v-else :href="to" target="blank">
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    isMailToLink (link = '') {
      return link.includes('mailto:')
    },

    isExternalLink (link = '') {
      const regex = /^(http|https):/
      return regex.test(link)
    }
  }
}
</script>
