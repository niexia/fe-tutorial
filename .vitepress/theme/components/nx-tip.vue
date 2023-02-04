<template>
  <p :class="['nx-tip', type]">
    {{ text }}
  </p>
</template>
<script>
export default {
  name: 'NxTip',
  props: {
    text: {
      type: String,
      required: true,
      default: '' 
    },
    type: {
      type: String,
      default: 'question'
    }
  },
  data() {
    return {};
  }
}
</script>
<style lang="stylus">
.nx-tip
  position: relative
  padding: 12px 24px 12px 30px
  margin: 2em 0
  border-left-width: 4px
  border-left-style: solid
  background-color: #f8f8f8
  border-left-color: #f66
  border-bottom-right-radius: 2px
  border-top-right-radius: 2px
  &:before
    content: "?"
    position: absolute
    top: 14px
    left: -12px
    color: #fff
    width: 20px
    height: 20px
    border-radius: 100%
    text-align: center
    background-color: #f66
    line-height: 20px
    font-weight: bold
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif
    font-size: 14px
  &.question:before
    content: "?"
  &.warning:before
    content: "!"
</style>