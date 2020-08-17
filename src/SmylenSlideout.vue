<template>
  <div class="smylenSlideout" :class="showSlideout ? 'smylenSlideout--opened' : 'smylenSlideout--closed'">
    <div class="smylenSlideout__backdrop" @click.prevent="onBackdropClick" v-if="showSlideout"></div>
    <div class="smylenSlideout__slideout" v-if="showSlideout">
      <a href="#" @click.prevent="onCloseClick" class="smylenSlideout__closeBtn">Close</a>

      <div class="smylenSlideout__mainContainer">
        <slot></slot>
      </div>
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
  .smylenSlideout__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: black;
    opacity: .7;
    z-index: 99990;
  }
  .smylenSlideout__slideout {
    position: fixed;
    right: 0;
    width: 50%;
    z-index: 99999;
    background: white;
    top: 0;
    height: 100%;
    padding: 20px;
  }
  .smylenSlideout__closeBtn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
