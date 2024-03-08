<script setup lang="ts">
import Button from "primevue/button";
import MultiSelect from "primevue/multiselect";

import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>

<template>
  <MultiSelect
    v-model="selectedCities"
    :options="cities"
    optionLabel="name"
    placeholder="Select Cities"
    :maxSelectedLabels="3"
    class="w-full md:w-[20rem]"
  />
  <Button label="Submit" />
</template>
