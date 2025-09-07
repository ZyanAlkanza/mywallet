<template>
  <div class="q-gutter-md">
    <q-input 
      outlined
      label="Nama"
      class="primary-font"
      v-model="form.nama"
    >
    </q-input>

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
        label="Daftar"
        class="primary-font full-width"
        color="primary"
        style="height: 56px;"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        nama: '',
        email: '',
        sandi: '',
      },
      iniSandi: false
    }
  },
}
</script>