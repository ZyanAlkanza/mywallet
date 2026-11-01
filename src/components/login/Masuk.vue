<template>
  <q-form @submit="onSubmit">
    <div class="q-gutter-md">
      <q-input 
        dense
        outlined
        label="Email"
        class="primary-font"
        v-model="form.email"
        hide-bottom-space
        lazy-rules
        :rules="[val => !!val || 'Email tidak boleh kosong!']"
      >
      </q-input>
  
      <q-input
        dense 
        outlined
        label="Kata Sandi"
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
      </q-input>
  
      <div>
        <q-btn
          no-caps
          unelevated
          type="submit"
          label="Masuk"
          class="primary-font full-width"
          color="primary"
          :loading="loading"
        />
      </div>
  
      <div class="cursor-pointer primary-font text-grey-8">
        Lupa Kata Sandi?
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
        const res = await this.$api.post('auth/masuk', this.form);
        
        // Jika berhasil
        if (res.status === 200) {
          // Inisiasi data token dan user
          const { token, user } = res.data.data;

          // Simpan token ke local storage
          localStorage.setItem('mywallet-token', token);

          // Simpan data ke local storage
          localStorage.setItem('mywallet-user', JSON.stringify(user));

          // Atur header Authorization untuk request selanjutnya
          this.$api.defaults.headers.common.Authorization = `Bearer ${token}`;

          // Pindahkan ke halaman Beranda
          this.$router.push(name = 'Beranda');
        }
        
      } catch (error) {
        this.$notify('Yaahhh, Kamu gagal masuk! Email atau Kata Sandi nya salah', 'negative');
      } finally {
        this.loading = false;
      }
    }
  },
}
</script>