<template>
  <div class="q-pa-md">
    <div class="col-12 q-px-md q-py-sm">
        <span class="text-white" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px;">Pengaturan</span>
    </div>

    <div class="col-12 q-mt-md">
      <q-list class="text-white">
        <q-expansion-item
          group="somegroup"
          icon="person"
          label="Akun"
          default-opened
        >
          <q-card class="secondary-color">
            <q-card-section>
              <Akun/>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        
        <q-expansion-item
          group="somegroup"
          icon="account_balance_wallet"
          label="Dompet"
        >
          <q-card class="secondary-color">
            <q-card-section>
              <Dompet/>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        
        <q-expansion-item
          group="somegroup"
          icon="category"
          label="Kategori"
        >
          <q-card class="secondary-color">
            <q-card-section>
              <Kategori/>
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-list>
    </div>
    
  </div>
</template>

<script>
import Akun from '../components/pengaturan/Akun.vue'
import Dompet from '../components//pengaturan/Dompet.vue'
import Kategori from '../components//pengaturan/Kategori.vue'

export default {
  components: {
    Akun,
    Dompet,
    Kategori
  },
  data() {
    return {
      
    }
  },
}
</script>
