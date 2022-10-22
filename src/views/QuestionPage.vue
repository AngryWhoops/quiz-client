<template>
  <header-component />

  <!-- <transition name="component-fade" mode="out-in" appear> -->
  <question-component
    v-bind:question-object="questions[0]"
    view-question-head="questionText"
    array-elements="answers"
    element-value="answerValue"
    path-for-src="imgPath"
    :step-input="step"
    @on-update="step = $event"
    v-if="step == 0"
  />
  <!-- </transition> -->

  <!-- <transition name="component-fade" mode="out-in"> -->
  <question-component
    v-bind:question-object="questions[1]"
    view-question-head="questionText"
    array-elements="answers"
    element-value="answerValue"
    path-for-src="imgPath"
    :step-input="step"
    @on-update="step = $event"
    v-if="step == 1"
  />
  <!-- </transition> -->

  <!-- <transition name="component-fade" mode="out-in"> -->
  <question-component
    v-bind:question-object="questions[2]"
    view-question-head="questionText"
    array-elements="answers"
    element-value="answerValue"
    path-for-src="imgPath"
    :step-input="step"
    @on-update="step = $event"
    v-if="step == 2"
  />
  <!-- </transition> -->
</template>

<script>
// import questions from "@/questions/questions";
export default {};
</script>

<style scoped lang="sass">
.component-fade-enter-active
    transition: opacity 0.3s ease
.component-fade-leave-active
    transition: opacity 0.3s ease
.component-fade-enter-from
    opacity: 0
.component-fade-leave-to
    opacity: 0
</style>
