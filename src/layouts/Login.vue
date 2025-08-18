<template>
  <div class="row primary-color" style="height: 100dvh;">
    <div class="col-7">
      <div class="full-height" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <img src="../assets/ilustrasi.svg" style="width: 50%;">
        <span class="text-h3 q-mt-md" style="color: white; font-weight: 600;">MyWallet</span>
        <span class="font-secondary-color q-mt-sm">Catat pemasukan dan pengeluaran harian mu disini!</span>
      </div>
    </div>
    <div class="col-5 justify-center items-center">
      <div class="row justify-start items-center full-height">
        <q-card square flat>
          <q-tabs
            v-model="tab"
            class="secondary-color text-white"
            active-color="primary"
            align="justify"
          >
            <q-tab name="masuk" label="Masuk" />
            <q-tab name="daftar" label="Daftar" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated class="secondary-color text-white">
            <q-tab-panel name="masuk">
              <div class="q-mt-sm" style="width: 500px; height: 230px; display: flex; flex-direction: column; row-gap: 12px;">
                <div>
                  <q-input
                    filled
                    dark
                    dense
                    label="Email"
                  />
                </div>
                <div>
                  <q-input v-model="kataSandi" filled dark dense :type="isPwd ? 'password' : 'text'" label="Kata Sandi">
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </div>
                <div>
                  <q-checkbox dark dense label="Ingat Saya" v-model="ingatSaya" />
                </div>
                <div>
                  <q-btn
                    class="full-width q-mt-lg "
                    color="primary"
                    label="Masuk"
                    icon="login"
                  />
                </div>
                <div class="full-width text-center">
                  <span class="cursor-pointer">Lupa kata sandi?</span>
                </div>
              </div>
              
            </q-tab-panel>

            <q-tab-panel name="daftar">
              <div class="q-mt-sm" style="width: 500px; height: 230px; display: flex; flex-direction: column; row-gap: 12px;">
                <div>
                  <q-input
                    filled
                    dark
                    dense
                    label="Nama Pengguna"
                  />
                </div>
                <div>
                  <q-input
                    filled
                    dark
                    dense
                    label="Email"
                  />
                </div>
                <div style="display: flex; column-gap: 12px;">
                  <div style="width: 50%;">
                    <q-input v-model="kataSandi" filled dark dense type="password" label="Kata Sandi"/>
                  </div>
                  <div style="width: 50%;">
                    <q-input v-model="konfirmasiKataSandi" filled dark dense type="password" label="Konfirmasi Kata Sandi"/>
                  </div>
                </div>
                <div>
                  <q-btn
                    class="full-width q-mt-lg"
                    color="primary"
                    label="Daftar"
                    icon="check"
                  />
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab:'masuk',
      isPwd: true,
      kataSandi: '',
      konfirmasiKataSandi: '',
      ingatSaya: false,
    }
  },
}
</script>