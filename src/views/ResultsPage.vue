<template>
  <header-component />
  <test-results-component />
  <!-- <form-component /> -->
</template>

<script>
// import FormComponent from "@/components/FormComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TestResultsComponent from "@/components/TestResultsComponent.vue";

export default {
  // data() {
  //   return;
  // },
  components: {
    HeaderComponent,
    // FormComponent,
    TestResultsComponent,
  },
};
</script>
