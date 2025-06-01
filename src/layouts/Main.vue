<template>
  <q-layout class="primary-color q-px-sm" view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-toolbar-title class="cursor-pointer" @click="drawer = !drawer">
          Selamat Datang, Zyan Alkanza
        </q-toolbar-title>

        <div style="font-weight: 300;">{{ tanggalHariIni }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="500"
        class="primary-color q-py-sm q-pl-sm"
      >
        <q-scroll-area class="fit secondary-color text-white" style="border-radius: 8px;">
          <q-list padding class="menu-list">
            <q-item class="row justify-center q-mb-md">
              <q-img
                src="../assets/logo.png"
                fit="contain"
                style="width: 60%;"
              />
            </q-item>

            <q-item clickable v-ripple to="/beranda" tag="router-link">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Beranda
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/transaksi" tag="router-link">
              <q-item-section avatar>
                <q-icon name="account_balance_wallet" />
              </q-item-section>

              <q-item-section>
                Transaksi
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/laporan" tag="router-link">
              <q-item-section avatar>
                <q-icon name="equalizer" />
              </q-item-section>

              <q-item-section>
                Laporan
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/profil" tag="router-link">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Profil
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>

<script>
  import beranda from '../pages/Beranda.vue'
  import dayjs from 'dayjs';
  import 'dayjs/locale/id'

  export default({
    components: {
      beranda
    },
    data() {
      return {
        drawer: false,
        tanggalHariIni: ''
      }
    },
    mounted() {
      this.tanggal()
    },
    methods: {
      tanggal() {
        dayjs.locale('id')
        this.tanggalHariIni = dayjs().format('dddd, DD MMMM YYYY')
      }
    },
  })
</script>
