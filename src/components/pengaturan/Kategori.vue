<template>
  <div class="row q-col-gutter-md">
    <div class="col-6 text-left" style="font-size: 20px; font-weight: 400;">
      Daftar Kategori
    </div>
    <div class="col-6 text-right">
      <q-btn
        dense
        size="sm"
        icon="add"
        color="primary"
        @click="tambahKategori"
      />
    </div>
    <div class="col-6">
      <span>Pengeluaran</span>
      <q-tree
        dark
        :nodes="kategoriPemasukan"
        node-key="label"
      >
        <template v-slot:default-header="prop">
          <div class="row items-center justify-between full-width">
            <div class="row items-center">
              <q-icon :name="prop.node.icon" v-if="prop.node.icon" class="q-mr-sm" />
              <span>{{ prop.node.label }}</span>
            </div>
            <q-btn
              dense
              flat
              size="sm"
              color="negative"
              icon="delete"
              />
              <!-- @click.stop="deleteNode('pemasukan', prop.node)" -->
          </div>
        </template>
      </q-tree>
    </div>
    
    <div class="col-6">
      <span>Pemasukan</span>
      <q-tree
        dark
        :nodes="kategoriPengeluaran"
        node-key="label"
      >
        <template v-slot:default-header="prop">
          <div class="row items-center justify-between full-width">
            <div class="row items-center">
              <q-avatar v-if="prop.node.avatar" size="24px" class="q-mr-sm">
                <img :src="prop.node.avatar" />
              </q-avatar>
              <q-icon :name="prop.node.icon" v-if="prop.node.icon" class="q-mr-sm" />
              <span>{{ prop.node.label }}</span>
            </div>
            <q-btn
              dense
              flat
              size="sm"
              color="negative"
              icon="delete"
              />
              <!-- @click.stop="deleteNode('pengeluaran', prop.node)" -->
          </div>
        </template>
      </q-tree>
    </div>

    <q-dialog
      v-model="tambahKategoriDialog"
    >
      <q-card class="primary-color text-white" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Tambah Kategori</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                dark
                borderless
                dense
                placeholder="Nama Kategori"
              />
            </div>
            <div class="col-12">
              <q-input
                dark
                borderless
                dense
                placeholder="Icon Kategori"
              />
            </div>
            <div class="col-6">
              <div class="row items-center q-gutter-sm">
                <div :class="!kategori ? 'text-primary': 'text-white'">Pengeluaran</div>
                <q-toggle
                  v-model="kategori"
                  color="white"
                  keep-color
                />
                <div :class="kategori ? 'text-primary': 'text-white'">Pemasukan</div>
              </div>
            </div>
            <div class="col-12">
              <q-select
                dark
                borderless
                dense
                label="Kategori Induk"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat no-caps icon="check" label="Simpan" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      tambahKategoriDialog: false,
      kategori: true,
      kategoriPemasukan: [
        {
          label: 'Kendaraan',
          icon: 'directions_car',
          children: [
            { label: 'Bensin', icon: 'local_gas_station' }
          ]
        }
      ],
      kategoriPengeluaran: [
        {
          label: 'Investasi',
          icon: 'savings',
          children: [
            {
              label: 'Kupon SBN',
              icon: 'local_activity',
            }
          ]
        }
      ]
    }
  },
  methods: {
    tambahKategori() {
      this.tambahKategoriDialog = true;
    }
    // deleteNode(type, node) {
    //   let list = type === 'pemasukan' ? this.kategoriPemasukan : this.kategoriPengeluaran
    //   this.removeNode(list, node.label)
    // },
    // removeNode(list, label) {
    //   for (let i = list.length - 1; i >= 0; i--) {
    //     if (list[i].label === label) {
    //       list.splice(i, 1)
    //       return
    //     } else if (list[i].children) {
    //       this.removeNode(list[i].children, label)
    //     }
    //   }
    // }
  }
}
</script>
