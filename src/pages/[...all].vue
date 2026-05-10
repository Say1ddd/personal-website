<script setup lang="ts">
definePage({
  name: 'redirect',
})

const router = useRouter()

const { locale } = useI18n()

router.replace(`/${locale.value}`)
</script>
