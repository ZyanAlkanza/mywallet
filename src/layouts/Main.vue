<template>
  <q-layout class="primary-color q-px-sm" view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar v-if="this.$route.name == 'beranda'">
        <q-toolbar-title class="cursor-pointer" @click="drawer = !drawer">
          Selamat Datang, Zyan Alkanza
        </q-toolbar-title>

        <div style="font-weight: 300;">{{ tanggalHariIni }}</div>
      </q-toolbar>
      
      <q-toolbar v-else-if="this.$route.name == 'transaksi' || this.$route.name == 'laporan'">
        <q-toolbar-title class="cursor-pointer" @click="drawer = !drawer">
            <div class=" text-capitalize" style="font-size: 14px; line-height: 14px;">{{ this.$route.name}}</div>
            <div class="q-mt-xs" style="font-size: 12px; font-weight: 300; line-height: 14px;">{{ tanggalHariIni }}</div>
        </q-toolbar-title>
        <q-section class="row">
          <q-btn dense icon="add" color="primary" style="width: 44px;" @click="dialogTambahTransaksi">
            <q-tooltip class="bg-primary">
              Tambah Transaksi
            </q-tooltip>
          </q-btn>

          <q-select 
            dark
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

          <q-btn color="primary" icon="calendar_today" v-if="this.$route.name == 'transaksi'">
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

    <q-drawer class="primary-color q-py-sm q-pl-sm" show-if-above v-model="drawer" side="left">
      <div class="column fit secondary-color q-py-sm text-white" style="border-radius: 8px;">
        <q-list>
          <q-item class="row justify-center q-mb-md">
            <q-img
              src="../assets/logo.png"
              fit="contain"
              style="width: 60%;"
            />
          </q-item>

          <q-item clickable v-ripple to="/beranda" tag="router-link">
            <q-item-section avatar><q-icon name="home" /></q-item-section>
            <q-item-section>Beranda</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/transaksi" tag="router-link">
            <q-item-section avatar><q-icon name="account_balance_wallet" /></q-item-section>
            <q-item-section>Transaksi</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/laporan" tag="router-link">
            <q-item-section avatar><q-icon name="equalizer" /></q-item-section>
            <q-item-section>Laporan</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/profil" tag="router-link">
            <q-item-section avatar><q-icon name="person" /></q-item-section>
            <q-item-section>Profil</q-item-section>
          </q-item>
        </q-list>

        <q-space />

        <q-list>
          <q-item clickable v-ripple to="/pengaturan" tag="router-link">
            <q-item-section avatar><q-icon name="settings" /></q-item-section>
            <q-item-section>Pengaturan</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/keluar" tag="router-link">
            <q-item-section avatar>
              <q-icon name="logout" color="negative" />
            </q-item-section>
            <q-item-section class="text-negative">Keluar</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-dialog v-model="modalTambahTransaksi" :backdrop-filter="'saturate(50%)'">
      <q-card class="primary-color text-white" style="width: 700px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Tambah Transaksi</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>
            <span>Nominal</span>
            <q-input
              style="font-size: 32px;"
              dark
              dense
              borderless
              input-class="text-right"
              mask="###.###.###.###"
              maxlength="15"
              reverse-fill-mask
              v-model="nominal" 
              prefix="Rp."
              placeholder="0"
            />
          </div>
          
          <div class="row q-mt-sm q-col-gutter-md">
            <div class="col-4">
              <span>Dompet</span>
              <q-select 
                dark
                dense
                borderless
                v-model="dompet" 
                :options="dompet_opt" 
              />
            </div>
            <div class="col-4">
              <span>Kategori</span>
              <q-select 
                dark
                dense
                borderless
                v-model="kategori" 
                :options="kategori_opt" 
              />
            </div>
            <div class="col-4">
              <span>Tanggal</span>
              <q-input
                dark
                dense
                borderless
                v-model="tanggalTransaksi"  
                type="date" 
              />
            </div>
          </div>

          <div class="q-mt-sm" style="width: 100%">
            <span>Deskripsi</span>
            <q-input
              dark
              dense
              borderless
              placeholder="Deskripsi transaksi"
              v-model="deskripsi"
              type="textarea"
            />
          </div>

          <div class="row q-mt-md justify-end">
            <q-btn
              dense
              icon="add"
              color="primary"
              label="Tambah Transaksi"
              @click="tambahTransaksi"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
      
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import beranda from '../pages/Beranda.vue'
  import dayjs from 'dayjs';
  import 'dayjs/locale/id'
  import axios from 'src/boot/axios';

  export default({
    components: {
      beranda
    },
    data() {
      return {
        drawer: false,
        modalTambahTransaksi: false,

        tanggalHariIni: '',
        dompet: '',
        dompet_opt:['Uang Jajan', 'Uang Tabungan', 'Bank Mandiri', 'Bank BSI'],
        kategori:'',
        kategori_opt:['Uang Jajan', 'Uang Tabungan', 'Bank Mandiri', 'Bank BSI'],
        tanggalTransaksi: '',
        bulan: '',
        bulan_opt: '',
        tahun: '',
        tahun_opt: '',
        nominal: '',
        deskripsi: ''
      }
    },
    mounted() {
      this.tanggal();
      this.loadDB();
    },
    methods: {
      tanggal() {
        dayjs.locale('id')
        this.tanggalHariIni = dayjs().format('dddd, DD MMMM YYYY')
      },
      dialogTambahTransaksi() {
        this.modalTambahTransaksi = true;
      },
      tambahTransaksi() {
        
      },
      async loadDB() {
        try {
          const data = await this.$api.get('users');
          console.log('check api =>', data);
          
        } catch (error) {
          console.log('api tidak tersambung!');
        }
      }
    },
  })
</script>
