<script setup>
const switchLocalePath = useSwitchLocalePath()

console.log(switchLocalePath('en'))  
console.log(switchLocalePath('ar'))  
</script>

<template>
  <div>
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('ar')">arabic</NuxtLink>
      {{ $t('intro') }}
  </div>
</template>
