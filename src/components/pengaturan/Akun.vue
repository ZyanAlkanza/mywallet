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
      <q-btn dense flat label="Simpan" color="primary" icon="save" class="q-pr-sm float-right" @click="ubah" v-show="edit === false"/>
      <q-btn dense flat label="Ubah" color="primary" icon="edit" class="q-pr-sm float-right" @click="ubah" v-show="edit === true"/>
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
      edit: true
    }
  },
  methods: {
    ubah() {
      this.edit = !this.edit;
      if(this.edit === true){
        this.$q.notify({
          message: 'Berhasil mengubah profil',
          color: 'primary',
          icon: 'check'
        })
      }
    }
  },
}
</script>