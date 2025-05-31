<template>
    <div>
        <div class="secondary-color q-pa-md" style="border-radius: 8px;">
            <div class="row justify-between">
                <p class="text-white">Transaksi Bulanan</p>
                <p class="text-primary cursor-pointer" style="font-size: 12px; font-weight: 300;">Lihat Semuanya</p>
            </div>
            <div class="full-width">
                <apexchart
                    type="bar"
                    height="215"
                    width="90%"
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
            series: [
                {
                    name: 'Pemasukan',
                    data: [500000, 300000, 400000, 200000, 500000]
                },
                {
                    name: 'Pengeluaran',
                    data: [200000, 250000, 300000, 50000, 200000]
                },
            ],
            chartOptions: {
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false
                    },
                    foreColor: '#fff',
                },
                colors: ['#1ea61d', '#d72239'], 
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '80%',
                        endingShape: 'rounded'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Des', 'Jan', 'Feb', 'Mar', 'Apr']
                },
                // yaxis: {
                //     title: {
                //         text: 'Jumlah Penjualan'
                //     }
                // },
                legend: {
                    show: false,
                },
                title: {
                    text: '',
                    align: 'center',
                    floating: true
                },
            }
        }
    }
}
</script>
