<template>
    <div class="row" style="overflow: hidden">
        <div class="col-12">
            <kartu/>
        </div>
        <div class="col-6">
            <div class="q-pt-sm q-pr-xs">
                <div class="scroll-container">
                    
                    <div class="row q-mb-sm secondary-color text-white" style="border-radius: 6px;" v-for="n in 15" :key="n">
                        <div class="col-12">
                            <div class="row q-py-sm q-px-md justify-between items-center">
                                <div class="row">
                                    <div style="width: 44px; font-size: 32px; font-weight: 500; text-align: center;">21</div>
                                    <div class="row justify-center" style="flex-direction: column;">
                                        <div style="line-height: 14px;">Jum'at</div>
                                        <div class="q-mt-xs font-secondary-color" style="font-size: 12px; font-weight: 300; line-height: 14px;">Maret 2025</div>
                                    </div>
                                </div>
                                <div style="font-weight: 500;">Rp. 200.000</div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="row q-py-sm q-px-md justify-between items-center">
                                <div class="row">
                                    <div style="text-align: center; width: 44px;">
                                        <q-icon name="vertical_align_bottom" size="md"/>
                                    </div>
                                    <div class="row justify-center" style="flex-direction: column;">
                                        <div style="line-height: 14px;">Transfer Masuk</div>
                                        <div class="q-mt-xs font-secondary-color" style="font-size: 12px; line-height: 14px;">Bank Mandiri</div>
                                    </div>
                                </div>
                                <div class="text-green" style="font-weight: 500;">Rp. 200.000</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-6 q-pt-sm q-pl-xs">
            <div style="height: 300;">
                <pengeluaranTerbesar/>
            </div>
            <div class="q-pt-sm" style="height: 300;">
                <pengeluaranBerdasarkanKategori/>
            </div>
        </div>

        <!-- <div class="col-12">
            <div class="row q-col-gutter-sm">
                <div class="col-4 q-mt-sm">
                    <pemasukaanTerakhir/>
                </div>
                <div class="col-4 q-mt-sm">
                    <pengeluaranTerakhir/>
                </div>
                <div class="col-4 q-mt-sm">
                    <pengeluaranBerdasarkanKategori/>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import kartu from '../components/transaksi/Kartu.vue' 
import pengeluaranTerbesar from '../components/transaksi/PengeluaranTerbesar.vue' 
import pengeluaranBerdasarkanKategori from '../components/transaksi/PengeluaranBerdasarkanKategori.vue' 

export default({
    components:{
        kartu,
        pengeluaranTerbesar,
        pengeluaranBerdasarkanKategori
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
