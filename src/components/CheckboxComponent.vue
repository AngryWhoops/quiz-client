<template>
  <div>
    <label for="checkbox">
      {{ checkboxName }}
      <input id="checkbox" type="checkbox" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: this.modelValue || this.checked,
    };
  },
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: {
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    modelValue() {
      this.isChecked = this.modelValue;
    },
  },
  methods: {
    onClick() {
      this.$emit("update:modelValue", this.isChecked);
    },
  },
};
</script>

<style></style>
