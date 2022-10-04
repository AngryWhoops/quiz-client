<template>
  <div>
    <!-- <router-view/> -->
    <checkbox-component-vue v-model="localValue" :checkboxName="'Тестовое имя'" />
  </div>
</template>

<script>
import CheckboxComponentVue from './components/CheckboxComponent.vue';

export default {
  data() {
    return {
      localValue: '',
    };
  },
  components: {
    CheckboxComponentVue,
  },

};
</script>

<style lang="scss">

</style>
