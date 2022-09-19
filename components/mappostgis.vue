<template>
    <main class="w-screen h-screen">
        <v-map class="w-full h-full" :options="state.map" @loaded="onMapLoaded">
        </v-map>
    </main>
</template>
<script setup lang="ts">
import VMap from "v-mapbox";
import mapboxgl from "mapbox-gl";
const state: any = reactive({
    map: {
        accessToken:
            "pk.eyJ1Ijoic29jaWFsZXhwbG9yZXIiLCJhIjoiREFQbXBISSJ9.dwFTwfSaWsHvktHrRtpydQ",
        style: "mapbox://styles/mapbox/streets-v11?optimize=true",
        // style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
        center: [444.04931277036667, 26.266912177018096] as number[], //uses longitude, latitude
        zoom: 6,
        maxZoom: 22,
    },
    mapdata: []
});
const data = reactive({
    mapData: [],
    lat: null,
    lon: null,
});
async function onMapLoaded(map: mapboxgl.Map) {

    console.log("hi")
    data.mapData = await $fetch('http://localhost:3001/postgis');
    console.log(data.mapData);


    data.mapData.forEach(element => {
        console.log("foreach long" + element.Long)
        // let lat = element.Lat;
        // let lon = element.Long;
        new mapboxgl.Marker({
            draggable: true,
            color: "#" + (Math.random().toString(16) + "000000").substring(2, 8),
        })
            // .setLngLat([lon,lat])
            .setLngLat(element.geom.coordinates)
            .addTo(map);
    });


}

</script>
<style>
.w-screen {
    width: 100vw;
}

.h-screen {
    height: 100vh;
}

.h-full {
    height: 100%;
}

.w-full {
    width: 100%;
}

.mapboxgl-popup {
    max-width: 400px;
    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
</style>