<template>
    <div class="col">
        <div class="row secondary-color q-pa-md" style="border-radius: 6px;">
            <div class="row justify-center items-center" :class="properties.warna_background" style="font-size: 36px; border-radius: 8px;">
                <q-icon :name="properties.icon" :color="properties.warna_icon" class="q-pa-md"/>
            </div>
            <div class="q-px-md text-white">
                <div style="font-size: 14px; font-weight: 300;">
                    {{ properties.judul }}
                </div>
                <div style="font-size: 24px; font-weight: 500;">
                    Rp. {{ properties.nominal }}
                </div>
                <div v-if="properties.status !='tanggal'" class="row" :class="properties.status == 'naik' ? 'text-green':'text-red'" style="font-size: 12px; font-weight: 300;">
                    <q-icon :name="properties.status == 'naik' ? 'north_east':'south_west'" style="font-size: 16px;"/>
                    <div class="q-ml-xs">
                        {{ properties.persen }}% dari bulan lalu
                    </div>
                </div>
                <div v-else class="row font-secondary-color" style="font-size: 12px; font-weight: 300;">
                    <q-icon name="calendar_today" style="font-size: 16px;"/>
                    <div class="q-ml-xs">
                        {{ properties.persen }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['properties'],
}
</script>

