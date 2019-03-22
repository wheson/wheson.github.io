<template>
    <div class="footer">
      <p><a href="/privacy-policy/">プライパシーポリシー</a></p>
      <p>© 2019 wheson.</p>
    </div>
</template>

<style lang="stylus">
@import './styles/config.styl'
.footer
  padding 2.5rem
  border-top 1px solid $borderColor
  text-align center
  color lighten($textColor, 25%)
  z-index 999
</style>
