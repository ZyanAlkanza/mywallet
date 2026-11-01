<template>
  <q-form @submit="onSubmit">
    <div class="q-gutter-md">
      <q-input 
        dense
        outlined
        label-slot
        class="primary-font"
        v-model="form.nama"
        hide-bottom-space
        lazy-rules
        :rules="[val => !!val || 'Nama pengguna tidak boleh kosong!']"
      >
        <template v-slot:label>
          Nama Penguna <span class="text-negative">*</span>
        </template>
      </q-input>
  
      <q-input 
        dense
        outlined
        label-slot
        class="primary-font"
        v-model="form.email"
        hide-bottom-space
        lazy-rules
        :rules="[val => !!val || 'Email tidak boleh kosong!']"
      >
        <template v-slot:label>
          Email <span class="text-negative">*</span>
        </template>
      </q-input>
  
      <q-input 
        dense
        outlined
        label-slot
        class="primary-font"
        v-model="form.sandi" 
        :type="iniSandi ? 'password' : 'text'" 
        hide-bottom-space
        lazy-rules
        :rules="[val => !!val || 'Kata sandi tidak boleh kosong!']"
      >
        <template v-slot:append>
          <q-icon
            :name="iniSandi ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="iniSandi = !iniSandi"
          />
        </template>

        <template v-slot:label>
          Kata Sandi <span class="text-negative">*</span>
        </template>
      </q-input>
  
      <div>
        <q-btn
          no-caps
          unelevated
          type="submit"
          label="Daftar"
          class="primary-font full-width"
          color="primary"
          :loading="loading"
        />
      </div>
    </div>
  </q-form>
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
      iniSandi: true
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      try {
        const { res } = await this.$api.post('auth/daftar', this.form);
        this.$notify('Yeaaay, Kamu berhasil mendaftarkan akun', 'primary');
        this.onClear();
      } catch (error) {
        this.$notify('Yaahhh, Kamu gagal mendaftarkan akun', 'negative');
      } finally {
        this.loading = false;
      }
    },
    onClear() {
      this.form = {
        nama: '',
        email: '',
        sandi: '',
      }
    }
  },
}
</script>