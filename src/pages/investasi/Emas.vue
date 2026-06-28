<template>
  <div class="row" style="overflow: hidden">
    <div class="col-12 q-py-md q-px-sm flex justify-between items-center">
      <span class="text-white" style="font-size: 20px;">Emas</span>
      <q-btn
        dense
        icon="add"
        color="primary"
        @click="addData"
      >
        <q-tooltip class="bg-primary">Tambah Emas</q-tooltip>
      </q-btn>
    </div>

    <div class="col-12">
      <q-table
        dense
        class="bg-dark text-white"
        :rows="data"
        :columns="columns"
        row-key="id"
      >
        <template v-slot:body-cell-no="props">
          <q-td :props="props" style="width: 50px;">
            {{ props.rowIndex + 1 }}
          </q-td>
        </template>
        
        <template v-slot:body-cell-nama="props">
          <q-td :props="props">
            {{ props.row.nama ?? '-' }}
          </q-td>
        </template>
        
        <template v-slot:body-cell-tgl_transaksi="props">
          <q-td :props="props">
            {{ formatTanggal(props.row.tgl_transaksi) ?? '-' }}
          </q-td>
        </template>
        
        <template v-slot:body-cell-harga_beli="props">
          <q-td :props="props">
            {{ formatRupiah(props.row.harga_beli) ?? '-' }}
          </q-td>
        </template>
        
        <template v-slot:body-cell-harga_jual="props">
          <q-td :props="props">
            {{ formatRupiah(props.row.harga_jual) ?? '-' }}
          </q-td>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="addModal" persistent>
      <q-card class="bg-dark text-white" style="width: 500px; max-width: 80vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="flex items-center">
            <q-icon name="paid" size="sm"/>
            <span class="text-h6 q-px-sm">Tambah Emas</span>
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
            <q-input
              dark
              dense
              filled
              v-model="form.nama"
              label-slot
              hide-bottom-space
              :rules="[val => !!val || 'Nama tidak boleh kosong']"
            >
              <template v-slot:label>Nama <span class="text-red">*</span></template>
            </q-input>

            <q-input
              dark
              dense
              filled
              v-model="form.tgl_transaksi"
              label-slot
              @keydown.prevent
              hide-bottom-space
              :rules="[val => !!val || 'Tanggal transaksi tidak boleh kosong']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date
                      v-model="form.tgl_transaksi"
                      minimal
                      dark
                      mask="DD/MM/YYYY"
                    >
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Tutup" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
              <template v-slot:label>Tanggal Tranasaksi <span class="text-red">*</span></template>
            </q-input>

            <q-input
              dark
              dense
              filled
              v-model="form.gramasi"
              label-slot
              mask="#.##########"
              suffix="Gram"
              hide-bottom-space
              :rules="[val => !!val || 'Tanggal transaksi tidak boleh kosong']"
            >
              <template v-slot:label>Gramasi <span class="text-red">*</span></template>
            </q-input>

            <q-select
              dark
              dense
              filled
              v-model="form.status"
              label-slot
              :options="['Beli', 'Jual']"
              hide-bottom-space
              :rules="[val => !!val || 'Status tidak boleh kosong']"
            >
              <template v-slot:label>Status <span class="text-red">*</span></template>
            </q-select>

            <q-input
              v-if="form.status == 'Beli'"
              dark
              dense
              filled
              v-model="hargaBeli"
              label-slot
              prefix="Rp "
              hide-bottom-space
              :rules="[val => !!val || 'Harga beli tidak boleh kosong']"
            >
              <template v-slot:label>Harga Beli <span class="text-red">*</span></template>
            </q-input>

            <q-input
              v-else
              dark
              dense
              filled
              v-model="hargaJual"
              label="Harga Jual"
              prefix="Rp "
              hide-bottom-space
              :rules="[val => !!val || 'Harga jual tidak boleh kosong']"
            >
              <template v-slot:label>Harga Jual <span class="text-red">*</span></template>
            </q-input>

            <div class="flex justify-end">
              <q-btn
                flat 
                label="Reset"
                type="reset"
                color="white"
                class="q-mr-xs"
              />

              <q-btn
                label="Simpan"
                type="submit"
                color="primary"
                class="q-ml-xs"
              />
            </div>

          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { formatTanggal } from 'src/utils/date'
import { formatToISO } from 'src/utils/date'

export default({
  data() {
    return {
      loading: false,
      addModal: false,

      form: {
        nama: 'Emas',
        tgl_transaksi: dayjs().format('DD/MM/YYYY'),
        gramasi: '',
        status: 'Beli',
        harga_beli: '',
        harga_jual: '',
      },

      data: [],
      columns: [
          {
              name: 'no',
              field: 'no',
              label: 'No',
              align: 'left'
          },
          {
              name: 'nama',
              field: 'nama',
              label: 'Nama',
              align: 'left'
          },
          {
              name: 'tgl_transaksi',
              field: 'tgl_transaksi',
              label: 'Tanggal Transaksi',
              align: 'left'
          },
          {
              name: 'gramasi',
              field: 'gramasi',
              label: 'Gramasi',
              align: 'left'
          },
          {
              name: 'harga_beli',
              field: 'harga_beli',
              label: 'Harga Beli',
              align: 'left'
          },
          {
              name: 'harga_jual',
              field: 'harga_jual',
              label: 'Harga Jual',
              align: 'left'
          },
          {
              name: 'status',
              field: 'status',
              label: 'Status',
              align: 'left'
          },
      ]
    }
  },
  computed: {
    hargaBeli: {
      get() {
        return this.formatRupiah(this.form.harga_beli)
      },
      set(val) {
        this.form.harga_beli = this.parseRupiah(val)
      }
    },

    hargaJual: {
      get() {
        return this.formatRupiah(this.form.harga_jual)
      },
      set(val) {
        this.form.harga_jual = this.parseRupiah(val)
      }
    }
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    formatTanggal,
    addData() {
      this.addModal = true;
    },
    async onLoad() {
      try {
          const data = await this.$api.get('investasi');
          this.data = data.data;

        } catch (error) {
          console.log(error, 'api tidak tersambung!');
        }
    },
    async onSubmit() {
      try {
        const payload = {
          ...this.form,
          tgl_transaksi: formatToISO(this.form.tgl_transaksi),
        }
        const data = await this.$api.post('investasi', payload);
        this.$notify('Yeaaay!!! Kamu berhasil menambahkan investasi emas', 'primary');
        this.onLoad();
      } catch (error) {
        this.$notify('Yahh!!! Kamu gagal menambahkan investasi emas', 'negative')
        console.log(error, 'data tidak terkirim!');
      } finally {
        this.addModal = false;
      }
    },
    onReset() {
      this.form = {
        nama: 'Emas',
        tgl_transaksi: dayjs().format('DD/MM/YYYY'),
        gramasi: '',
        status: 'Beli',
        harga_beli: '',
        harga_jual: '',
      }
    },
    formatRupiah(val) {
      if (!val) return '0'
      return new Intl.NumberFormat('id-ID').format(val)
    },
    parseRupiah(val) {
      const number = (val || '').toString().replace(/\D/g, '')
      return number ? parseInt(number) : 0
    }
  }
})
</script>

