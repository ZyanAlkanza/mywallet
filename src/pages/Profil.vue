<template>
    <div class="row" style="overflow: hidden">
        <div class="row col-12 q-pa-sm q-mt-sm secondary-color" style="border-radius: 8px;">
            <div class="text-center" style="width: 20%;">
                <img src="../../src/assets/img/avatar_pria.png" alt="avatar" style="width: 200px;">
            </div>
            <div class="q-pa-sm text-white" style="width: 75%;">
                <div style="font-size: 24px; font-weight: 500;">Zyan Alkanza</div>
                <div class="font-secondary-color q-py-xs">zyan.mujaddid@gmail.com</div>
                <div class="font-secondary-color">0896-5353-4708</div>
            </div>
            <div class="q-pa-sm" style="width: 5%;">
                <q-btn
                    dense
                    color="primary"
                    icon="edit"
                />
            </div>
        </div>
        <div class="row col-12 q-py-sm">
            <div class="col-3">
                <kartu
                    :properties="kartu1"
                />
            </div>
            <div class="col-3 q-pl-sm">
                <kartu
                    :properties="kartu2"
                />
            </div>
            <div class="col-3 q-pl-sm">
                <kartu
                    :properties="kartu3"
                />
            </div>
            <div class="col-3 q-pl-sm">
                <kartu
                    :properties="kartu4"
                />
            </div>
        </div>
    </div>
</template>

<script>
import kartu from 'components/Kartu.vue'

export default({
    components:{
        kartu
    },
    data() {
        return {
            kartu1: {
                judul:'Total Saldo',
                nominal: '1.000.000',
                persen: '5',
                status: 'naik',
                warna_background:'blue-color',
                warna_icon:'primary',
                icon:'attach_money'
            },
            kartu2: {
                judul:'Total Saldo Keseluruhan',
                nominal: '12.000.000',
                persen: '5',
                status: 'naik',
                warna_background:'blue-color',
                warna_icon:'primary',
                icon:'attach_money'
            },
            kartu3: {
                judul:'Pemasukan Terbesar',
                nominal: '3.000.000',
                persen: '25 Jan 2025',
                status: 'tanggal',
                warna_background:'green-color',
                warna_icon:'positive',
                icon:'trending_up'
            },
            kartu4: {
                judul:'Pengeluaran Terbesar',
                nominal: '1.000.000',
                persen: '18 Jan 2025',
                status: 'tanggal',
                warna_background:'red-color',
                warna_icon:'negative',
                icon:'trending_down'
            }
        }
    },
})
</script>

<style scoped>
.scroll-container {
    height: 600px;
    overflow-y: auto;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
}

.scroll-container::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}
</style>
