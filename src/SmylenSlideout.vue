<template>
  <div class="smylenSlideout" :class="classMap">
    <div class="smylenSlideout__backdrop" @click.prevent="onBackdropClick" v-if="showSlideout"></div>
    <div class="smylenSlideout__slideout" v-if="showSlideout">
      <a href="#" @click.prevent="onCloseClick"
         v-if="showClose"
         class="smylenSlideout__closeBtn">Close</a>

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
    showClose: {
      type: Boolean,
      default: true,
      required: false,
    },
    onClose: {
      type: Function,
      default: () => {},
      required: false,
    },
    direction: {
      type: String,
      default: 'right',
      required: false,
    }
  },
  data() {
    return {
    };
  },
  computed: {
    classMap () {
      return {
        'smylenSlideout--opened': this.showSlideout,
        'smylenSlideout--closed': !this.showSlideout,
        'smylenSlideout--left': this.direction === 'left'
      };
    }
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

<style scoped lang="scss">
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
    left: auto;
    z-index: 99999;
    background: white;
    top: 0;
    height: 100%;
    padding: 20px;
  }
  .smylenSlideout--left {
    .smylenSlideout__slideout {
      left: 0;
      right: auto;
    }
  }
  .smylenSlideout__closeBtn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
