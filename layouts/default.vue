<template>
  <div>
    <HeaderComponent v-if="canShowHeader" />
    <Nuxt />
  </div>
</template>
<script>
import HeaderComponent from '~/components/global/HeaderComponent.vue'
import { NOT_SHOW_HEADER_PAGE } from '@/constants/allow_pages'

export default {
  components: { HeaderComponent },
  layout: 'default',
  computed: {
    canShowHeader () {
      return !NOT_SHOW_HEADER_PAGE.includes(this.$route.path)
    }
  },
  methods: {}
}
</script>
