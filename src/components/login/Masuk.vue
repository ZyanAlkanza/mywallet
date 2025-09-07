<template>
  <div class="q-gutter-md">
    <q-input 
      outlined
      label="Email"
      class="primary-font"
      v-model="form.email"
    >
    </q-input>

    <q-input 
      outlined
      label="Kata Sandi"
      class="primary-font"
      v-model="form.sandi" 
      :type="iniSandi ? 'password' : 'text'" 
    >
      <template v-slot:append>
        <q-icon
          :name="iniSandi ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="iniSandi = !iniSandi"
        />
      </template>
    </q-input>

    <div>
      <q-btn
        no-caps
        unelevated
        label="Masuk"
        class="primary-font full-width"
        color="primary"
        style="height: 56px;"
      />
    </div>

    <div class="cursor-pointer primary-font">
      Lupa Kata Sandi?
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        email: '',
        sandi: '',
      },
      iniSandi: false
    }
  },
}
</script>