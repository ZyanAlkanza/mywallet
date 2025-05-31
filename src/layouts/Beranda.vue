<template>
    <div class="row">
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
            </div>
        </div>
    </div>
</template>

<script>
import kartu from '../components/beranda/Kartu.vue' 
import dompet from '../components/beranda/Dompet.vue' 
import transaksiTerakhir from '../components/beranda/TransaksiTerakhir.vue' 

export default({
    components:{
        kartu,
        dompet,
        transaksiTerakhir
    },
    data() {
        return {
            
        }
    },
})
</script>