<template>
  <div class="content">
    <div class="content-title">
      <h1>Hi, I'm <b> Gustavo </b> and my job is to make sure your product will be sustainable, maintainable and scalable.</h1>
      <h1>Check here my social media and last works.</h1>
    </div>

    <tabs-selector v-model="selectedTab"/>

    <tabs-grid :selected-tab="selectedTab"/>

    <email-modal />
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedTab: 'social'
  })
}
</script>

<style>
b {
  font-weight: bolder;
}

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
  display: flex;
  flex-direction: column;
  align-items: center;
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
    font-size: 1.75rem;
  }
}
</style>
