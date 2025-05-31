<template>
    <div class="row" style="overflow: hidden">
        <div class="col-12">
            <kartu/>
        </div>
        <div class="col-12">
            <div class="row q-col-gutter-md">
                <div class="col-4 q-mt-md">
                    <dompet/>
                </div>
                <div class="col-4 q-mt-md">
                    <transaksiTerakhir/>
                </div>
                <div class="col-4 q-mt-md">
                    <transaksiBulanan/>
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

export default({
    components:{
        kartu,
        dompet,
        transaksiTerakhir,
        transaksiBulanan
    },
    data() {
        return {
            
        }
    },
})
</script>