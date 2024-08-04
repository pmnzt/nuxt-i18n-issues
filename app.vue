<script setup>
const switchLocalePath = useSwitchLocalePath()

console.log(switchLocalePath('en')) // empty string
console.log(switchLocalePath('ar')) // empty string
</script>

<template>
  <div>
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('ar')">arabic</NuxtLink>
      {{ $t('intro') }}
  </div>
</template>
