<template>
  <div>
    <q-table
      flat 
      class="bg-transparent text-white"
      dense
      hide-bottom
      separator="none"
      :rows="data"
      :columns="columns"
      :pagination="pagination"
    >
      <template v-slot:top-right>
        <q-btn
          dense
          size="sm"
          color="primary"
          icon="add"
          @click="tambahDompet"
        >
          <q-tooltip
            class="bg-primary"
          >
            Tambah Dompet
          </q-tooltip>
        </q-btn>
      </template>
      <template v-slot:body-cell-saldo="props">
        <q-td :props="props">
          Rp. {{ props.row.saldo }}
        </q-td>
      </template>
      <template v-slot:body-cell-tindakan="props">
        <q-td :props="props">
          <div class="row q-col-gutter-sm justify-center">
            <div>
              <q-btn
                dense
                size="sm"
                color="primary"
                icon="edit"
              >
                <q-tooltip
                  class="bg-primary"
                >
                  Ubah Dompet
                </q-tooltip>
              </q-btn>
            </div>
            <div>
              <q-btn
                dense
                size="sm"
                color="negative"
                icon="delete"
              >
                <q-tooltip
                  class="bg-negative"
                >
                  Hapus Dompet
                </q-tooltip>
              </q-btn>
            </div>
          </div>
        </q-td>
      </template>
    </q-table>

    <q-dialog
      v-model="tambahDompetDialog"
    >
      <q-card class="primary-color text-white" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Tambah Dompet</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col-6">
              <q-input
                dark
                borderless
                dense
                placeholder="Nama Dompet"
              />
            </div>
            <div class="col-6">
              <q-input
                dark
                borderless
                dense
                placeholder="Saldo Awal"
                mask="###.###.###.###"
                reverse-fill-mask
                input-class="text-right"
                prefix="Rp. "
              />
            </div>
            <div class="col-12 q-mt-md">
              <q-checkbox dark v-model="pisahkanDariTotal" label="Pisahkan dari total" color="primary" />
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
      tambahDompetDialog: false,
      pisahkanDariTotal: false,
      data: [
        {
          nama_dompet: 'Uang Jajan',
          saldo: '100.000',
        }
      ],
      columns: [
        {
          name: 'nama_dompet',
          field: 'nama_dompet',
          label: 'Nama Dompet',
          align: 'left',
        },
        {
          name: 'saldo',
          field: 'saldo',
          label: 'Saldo',
          align: 'right',
        },
        {
          name: 'tindakan',
          field: 'tindakan',
          label: 'Tindakan',
          align: 'center',
        },
      ],
      pagination: {
        rowsPerPage:10
      }
    }
  },
  methods: {
    tambahDompet(){
      this.tambahDompetDialog = true;
    }
  },
}
</script>