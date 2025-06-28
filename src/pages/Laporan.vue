<template>
    <div class="row" style="overflow: hidden">
        <div class="col-12">
            <kartu/>
        </div>

        <div class="col-4 q-pt-sm">
            <div style="height: 300;">
                <transaksiTerakhir/>
            </div>
            <div style="height: 300;" class="q-pt-sm">
                <transaksiBulanan/>
            </div>
        </div>
        
        <div class="col-4 q-pt-sm q-px-sm">
            <div style="height: 300;">
                <pemasukaanTerakhir/>
            </div>
            <div style="height: 300;" class="q-pt-sm">
                <pemasukanTerbesar/>
            </div>
        </div>
        
        <div class="col-4 q-pt-sm">
            <div style="height: 300;">
                <pengeluaranTerakhir/>
            </div>
            <div style="height: 300;" class="q-pt-sm">
                <pengeluaranTerbesar/>
            </div>
        </div>
    </div>
</template>

<script>
import kartu from '../components/transaksi/Kartu.vue' 
import transaksiTerakhir from '../components/beranda/TransaksiTerakhir.vue' 
import transaksiBulanan from '../components/beranda/TransaksiBulanan.vue' 
import pemasukaanTerakhir from 'src/components/beranda/PemasukaanTerakhir.vue'
import pengeluaranTerakhir from 'src/components/beranda/PengeluaranTerakhir.vue'
import pemasukanTerbesar from '../components/laporan/PemasukanTerbesar.vue' 
import pengeluaranTerbesar from '../components/transaksi/PengeluaranTerbesar.vue' 

export default({
    components:{
        kartu,
        transaksiTerakhir,
        transaksiBulanan,
        pemasukaanTerakhir,
        pengeluaranTerakhir,
        pemasukanTerbesar,
        pengeluaranTerbesar,
    },
    data() {
        return {
            
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
