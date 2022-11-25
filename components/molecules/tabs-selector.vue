<template>
  <div class="tab-selector-wrapper">
    <content-card 
      card-tag="div"
      :class="['tabs-card', { active: isSocialActive }]" 
      @click.native="handleTabSelection('social')"
    >
      <h3>Social Media</h3>
    </content-card>

    <content-card 
      card-tag="div"
      :class="['tabs-card', { active: !isSocialActive }]" 
      @click.native="handleTabSelection('work')"
    >
      <h3>Last works</h3>
    </content-card>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },

  computed: {
    isSocialActive() {
      return this.value === 'social'
    }
  },

  methods: {
    handleTabSelection(value) {
      if (value !== this.value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style>
.tab-selector-wrapper {
  display: flex;
  padding-bottom: 2rem;
}

.tab-selector-wrapper h3 {
  color: #fcfcfc;
  font-size: 1.48rem;
  user-select: none;
}

.tabs-card {
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 50%);
}

.tabs-card:nth-of-type(1) {
  border-radius: 0.75rem 0 0 0.75rem;
  border-right: none;
}

.tabs-card.active {
  background: #2195f36f;
  font-weight: bolder;
}

.tabs-card:nth-of-type(2) {
  border-radius: 0 0.75rem 0.75rem 0;
}

@media (max-width: 768px) {
  .tab-selector-wrapper {
    padding-bottom: 1rem;
    width: 100%;
  }

  .tabs-card {
    flex: 1;
    text-align: center;
    white-space: nowrap;
  }

  .tab-selector-wrapper h3 {
    font-size: 1.25rem;
  }
}
</style>
