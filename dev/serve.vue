<script>
import Vue from 'vue';
import SmylenSlideout from '@/SmylenSlideout.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    SmylenSlideout
  },
  data() {
    return {
      showA: false,
      showB: false,
    }
  }
});
</script>

<template>
  <div id="app">
    <a @click.prevent="showA = !showA">Show sample A</a>
    <SmylenSlideout :show-close="true" :show-slideout="showA" :on-close="() => { showA = !showA } ">
      Contents
    </SmylenSlideout>
    <a @click.prevent="showB = !showB">Show sample B</a>
    <SmylenSlideout :show-close="false" :show-slideout="showB" :on-close="() => { showB = !showB } ">
      Contents
    </SmylenSlideout>
  </div>
</template>
