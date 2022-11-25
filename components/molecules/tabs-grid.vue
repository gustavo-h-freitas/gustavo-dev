<template>
  <div class="tab-holder">
    <div ref="social" :class="['content-grid tab', { active: showSocial }]">
      <info-card
        v-for="(item, index) in socialCards" :key="`info-card-${index}`"
        v-bind="item"
      />
    </div>

    <div id="hide" ref="work" :class="['content-grid tab', { active: !showSocial }]">
      <info-card
        v-for="(item, index) in workCards" :key="`info-card-${index}`"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  },

  data: () => ({
    socialCards: [
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
    ],
    workCards: [
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
      },
      {
        link: 'https://www.basketballvictoria.com.au/',
        title: 'Basketball Victoria',
        ariaLabel: 'Click to go to Basketball Victoria link',
        img: {
          url: '/work/bv.png',
          alt: 'Basketball Victoria'
        },
      },
      {
        link: 'https://www.amitystrata.com.au/',
        title: 'Amity',
        ariaLabel: 'Click to go to Amity link',
        img: {
          url: '/work/amity.png',
          alt: 'Amity'
        },
      },
      {
        link: 'https://leadbase.com.br/',
        title: 'Leadbase',
        ariaLabel: 'Click to go to Leadbase link',
        img: {
          url: '/work/lead.jpeg',
          alt: 'Leadbase'
        },
      }
    ]
  }),

  computed: {
    showSocial() {
      return this.selectedTab === 'social'
    }
  },
  
  watch: {
    selectedTab: {
      deep: true,
      handler(newValue, oldValue) {
        const newTab = this.$refs[newValue]
        newTab.id = ''

        setTimeout(() => {
          const oldTab = this.$refs[oldValue]
          oldTab.id = 'hide'
        }, 300)
      }
    }
  }
}
</script>

<style>
#hide {
  top: 0;
}

.tab-holder {
  width: 100%;
  display: flex;
  position: relative;
}

.content-grid.tab {
  position: absolute;
  transform: translate(-30%);
  transition: .35s ease;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  user-select: none;
}

.content-grid.tab.active {
  display: grid !important;
  position: static;
  transform: translateX(0);
  visibility: visible;
  opacity: 1;
  cursor: pointer;
  pointer-events: all;
}

@media (max-width: 768px) {
  .tab-holder {
    position: static;
  }
}
</style>