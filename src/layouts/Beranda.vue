<template>
    <div class="row" style="overflow: hidden">
        <div class="col-12">
            <kartu/>
        </div>
        <div class="col-12">
            <div class="row q-col-gutter-sm">
                <div class="col-4 q-mt-sm">
                    <dompet/>
                </div>
                <div class="col-4 q-mt-sm">
                    <transaksiTerakhir/>
                </div>
                <div class="col-4 q-mt-sm">
                    <transaksiBulanan/>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row q-col-gutter-sm">
                <div class="col-4 q-mt-sm">
                    <pemasukaanTerakhir/>
                </div>
                <div class="col-4 q-mt-sm">
                    <pengeluaranTerakhir/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kartu from '../components/beranda/Kartu.vue' 
import dompet from '../components/beranda/Dompet.vue' 
import transaksiTerakhir from '../components/beranda/TransaksiTerakhir.vue' 
import transaksiBulanan from '../components/beranda/TransaksiBulanan.vue' 
import pemasukaanTerakhir from 'src/components/beranda/PemasukaanTerakhir.vue'
import pengeluaranTerakhir from 'src/components/beranda/PengeluaranTerakhir.vue'

export default({
    components:{
        kartu,
        dompet,
        transaksiTerakhir,
        transaksiBulanan,
        pemasukaanTerakhir,
        pengeluaranTerakhir
    },
    data() {
        return {
            
        }
    },
})
</script>