<template>
  <div class="row">
    <div class="col-2">
      <img src="../../assets/img/avatar_pria.png" style="width: 100%;">
    </div>
    <div class="col-10 q-px-md">
      <q-input dense borderless dark label="Nama" color="white" v-model="form.nama"/>
      <q-input dense borderless dark label="Email" color="white" v-model="form.email"/>
      <q-input dense borderless dark label="Telepon" color="white" v-model="form.telepon"/>
      <q-file dense borderless dark label="Foto Profile" color="white" v-model="form.foto" />
      <q-btn dense flat label="Simpan" color="primary" icon="save" class="q-pr-sm float-right" @click="simpan"/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        nama: '',
        email: '',
        telepon: '',
        foto:'',
      },
    }
  },
  methods: {
    simpan() {
      this.$q.notify({
        message: 'Berhasil mengubah profil',
        color: 'primary',
        icon: 'check'
      });
      this.$emit('simpanProfil')
    }
  },
}
</script>