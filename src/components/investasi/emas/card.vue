<template>
  <div>
    <div class="secondary-color q-pa-sm rounded-borders flex">
      <div class="primary-color rounded-borders flex justify-center items-center" style="width: 70px; height: 70px;">
        <q-icon :name="icon" color="white" size="md"></q-icon>
      </div>
      <div class="q-py-sm q-px-md column justify-center">
        <span class="text-white">{{ title }}</span>
        <span class="text-white text-h6">{{ prefix }} {{ value }} {{ suffix }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      value: {
        type: Number,
        default: 0
      },
      prefix: {
        type: String,
        default: ''
      },
      suffix: {
        type: String,
        default: ''
      }
    },
  }
</script>