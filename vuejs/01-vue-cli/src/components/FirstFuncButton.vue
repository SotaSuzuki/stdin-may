<template functional>
  <button
    type="button"
    :name="name"
    @click="listeners.click"
  >
    <slot/>
  </button>
</template>
