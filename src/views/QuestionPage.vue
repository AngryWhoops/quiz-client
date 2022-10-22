<template>
    <header-component

         />

    <!-- <transition name="component-fade" mode="out-in" appear> -->
        <question-component
        v-bind:question-object="questions[0]"
        view-question-head="questionText"
        array-elements="answers"
        element-value="answerValue"
        path-for-src="imgPath"
        :step-input="step"
        @on-update="step = $event"
        v-if="step == 0" />
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
        v-if="step == 1" />
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
        v-if="step == 2" />
    <!-- </transition> -->


</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import QuestionComponent from '@/components/QuestionComponent.vue';
import questions from '@/questions/questions';
// import questions from "@/questions/questions";
export default {
  data() {
    return {
      step: 0,
      questions: [
        {

          questionText:
            "Вопрос №1 Оцените обстановку и выберите действие, которое необходимо выполнить первым в данной ситуации",
          imgPath: "1car.webp",
          theme: 1,
          answers: [
            {
              answerValue: 1,
              answerText: "Вызвать скорую помощь",
            },
            {
              answerValue: true,
              answerText:
                "Вытащить пострадавшего из автомобиля и перенести на безопасное расстояние",
            },
            {
              answerValue: 2,
              answerText: "Вызвать пожарных",
            },
          ],
        },
        {


            },
          ],
        },
        {

            },
          ],
        },
      ],

    };
  },
  components: {
    HeaderComponent,
    QuestionComponent,
  },

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
