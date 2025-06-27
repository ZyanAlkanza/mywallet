<template>
    <div>
        <div class="secondary-color q-pa-md" style="border-radius: 8px;">
            <div class="row justify-between q-mb-xs" style="margin-bottom: 10px;">
                <p class="text-white">Pengeluaran Berdasarkan Kategori</p>
                <p class="text-primary cursor-pointer" style="font-size: 12px; font-weight: 300;">Lihat Semuanya</p>
            </div>
            <div class="full-width q-py-sm">
                <apexchart
                    type="donut"
                    height="200"
                    width="100%"
                    :options="chartOptions"
                    :series="series"
                />
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
    name: 'ChartColumnPage',
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {
            series: [1000000, 500000, 500000, 100000, 100000],
            chartOptions: {
                labels: ['Tagihan', 'Investasi', 'Kendaraan', 'Amal', 'Makanan & Minuman'],
                chart: {
                    type: 'donut',
                    foreColor: '#fff',
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ['#d72239', '#d7223980', '#d7223960', '#d7223940', '#d7223920'],
                stroke: {
                    show: false,
                },
                legend: {
                    markers: {
                        strokeWidth: 0,
                    },
                    itemMargin: {
                        vertical: 8
                    },
                },
                tooltip: {
                    y: {
                        formatter: (val) => 'Rp ' + val.toLocaleString('id-ID')
                    }
                },
            }
        }
    }
}
</script>
