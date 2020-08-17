<template>
  <div class="SmylenSlideout">
    <div class="slideout-backdrop" @click.prevent="onBackdropClick" v-if="showSlideout"></div>
    <div class="slideout" v-if="showSlideout">
      <a href="#" @click.prevent="onCloseClick" class="slideout__closeBtn">Close</a>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmylenSlideout',
  props: {
    showSlideout: {
      type: Boolean,
      default: false,
      required: false,
    },
    onClose: {
      type: Function,
      default: () => {},
      required: false,
    }
  },
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {
    onBackdropClick() {
      this.onClose();
    },
    onCloseClick() {
      this.onClose();
    }
  },
};
</script>

<style scoped>
  .SmylenSlideout {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .SmylenSlideout p {
    margin: 0 0 1em;
  }
</style>
