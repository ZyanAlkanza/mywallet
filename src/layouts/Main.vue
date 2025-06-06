<template>
  <q-layout class="primary-color q-px-sm" view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar v-if="this.$route.name == 'beranda'">
        <q-toolbar-title class="cursor-pointer" @click="drawer = !drawer">
          Selamat Datang, Zyan Alkanza
        </q-toolbar-title>

        <div style="font-weight: 300;">{{ tanggalHariIni }}</div>
      </q-toolbar>
      
      <q-toolbar v-else-if="this.$route.name == 'transaksi'">
        <q-toolbar-title class="cursor-pointer" @click="drawer = !drawer">
            <div class=" text-capitalize" style="font-size: 14px; line-height: 14px;">{{ this.$route.name}}</div>
            <div class="q-mt-xs" style="font-size: 12px; font-weight: 300; line-height: 14px;">{{ tanggalHariIni }}</div>
        </q-toolbar-title>
        <q-section class="row">
          <q-btn dense icon="add" color="primary" style="width: 44px;">
            <q-tooltip class="bg-primary">
              Tambah Transaksi
            </q-tooltip>
          </q-btn>

          <q-select 
            dense
            borderless
            color="primary"
            label-color="white"
            v-model="dompet" 
            :options="dompet_opt" 
            label="Pilih Dompet"
            style="width: 200px;"
            class="q-mx-sm rounded-borders"
            hide-dropdown-icon
          >
            <template v-slot:prepend>
              <q-icon name="account_balance_wallet" color="white"/>
            </template>
          </q-select>

          <q-btn color="primary" label="Pilih Bulan" icon="calendar_today">
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <q-select 
                    dense
                    borderless
                    v-model="bulan" 
                    :options="bulan_opt" 
                    label="Pilih Bulan"
                    style="width: 200px;"
                    class="rounded-borders"
                  />
                  
                  <q-select 
                    dense
                    borderless
                    v-model="tahun" 
                    :options="tahun_opt" 
                    label="Pilih Tahun"
                    style="width: 200px;"
                    class="rounded-borders"
                  />
                </div>
              </div>
            </q-menu>
          </q-btn>

          <q-input
            dense
            borderless
            color="white"
            label-color="white"
            label="Pencarian"
            class="q-mx-sm"
            input-style="color: #fff"
          >
            <template v-slot:prepend>
              <q-icon name="search" color="white"/>
            </template>
          </q-input>

        </q-section>
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
  import { tiUppercase } from '@quasar/extras/themify';
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
        tanggalHariIni: '',
        dompet:'',
        dompet_opt:['Uang Jajan', 'Uang Tabungan', 'Bank Mandiri', 'Bank BSI'],
        tanggalTransaksi: '',

        bulan: '',
        bulan_opt: '',
        tahun: '',
        tahun_opt: ''
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
