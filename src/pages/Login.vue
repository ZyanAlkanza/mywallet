<template>
  <div class="row" style="height: 100dvh;">
    <div class="col-6 justify-center items-center">
      <div class="row q-pa-xl full-height" style="align-content: space-between;">
        <div class="col-12 flex justify-center items-center">
          <img src="../assets/logo.png" style="width: 150px; filter: invert(1);">
        </div>
        <div class="col-12 flex justify-center items-center" style="height: 500px;">
          <div class="row">
            <div class="col-12 q-mb-lg text-center primary-font" style="font-size: 24px; font-weight: 500;">
              Selamat Datang
            </div>
            <div class="col-12 flex justify-center items-center">
              <div style="width: 500px;">
                <div class="bg-grey-3 q-pa-xs" style="border-radius: 8px;">
                  <q-tabs
                    no-caps
                    v-model="tab"
                    align="justify"
                    class="bg-grey-3 primary-font"
                    style="border-radius: 8px;"
                    active-class="bg-white text-black" 
                    inactive-class="bg-grey text-black"
                    indicator-color="transparent"
                  >
                    <q-tab name="masuk" label="Masuk"/>
                    <q-tab name="daftar" label="Daftar"/>
                  </q-tabs>
                </div>

                <div class="q-gutter-y-sm">
                  <q-tab-panels
                    v-model="tab"
                    animated
                    transition-prev="scale"
                    transition-next="scale"
                    class="text-center"
                  >
                    <q-tab-panel name="masuk" class="q-px-none" style="height: 300px;">
                      <Masuk />
                    </q-tab-panel>

                    <q-tab-panel name="daftar" class="q-px-none" style="height: 300px;">
                      <Daftar />
                    </q-tab-panel>
                  </q-tab-panels>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 flex justify-center items-center text-center text-grey primary-font" style="font-size: 12px;">
          Bergabunglah bersama ratusan pengguna lain yang sudah lebih mudah mengatur keuangan mereka. <br>
          Masuk sekarang untuk mengakses dasbor pribadi, melacak pemasukan dan pengeluaran, <br> 
          serta mendapatkan laporan keuangan otomatis setiap bulan.
        </div>
      </div>
    </div>

    <div class="col-6">
      <div class="full-height" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <img src="../assets/ilustrasi.svg" style="width: 70%;">
      </div>
    </div>
  </div>
</template>

<script>
import Daftar from 'src/components/login/Daftar.vue';
import Masuk from 'src/components/login/Masuk.vue';

export default {
  components: {
    Masuk,
    Daftar
  },
  data() {
    return {
      tab:'masuk',
    }
  },
}
</script>