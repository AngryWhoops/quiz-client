<template>
  <!-- <transition name="component-fade" mode="out-in" appear> -->
  <question-component
    v-bind:question-object="questions[0]"
    view-question-head="questionText"
    array-elements="answers"
    element-value="answerValue"
    path-for-src="imgPath"
    question-theme="theme"
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
    question-theme="theme"
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
    question-theme="theme"
    :step-input="step"
    @on-update="step = $event"
    v-if="step == 2"
  />
  <!-- </transition> -->
</template>

<script>
// import FormComponent from "@/components/FormComponent.vue";
import QuestionComponent from "@/components/QuestionComponent.vue";

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
          theme: "Тема 1 ",
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
          questionText:
            "Вопрос №2 Оцените обстановку и выберите действие, которое необходимо выполнить первым в данной ситуации",
          imgPath: "2car.webp",
          theme: "Тема 2 ",
          answers: [
            {
              answerValue: 1,
              answerText: "Вызвать скорую помощь",
            },
            {
              answerValue: 2,
              answerText:
                "Подойти к пострадавшему и проверить наличие признаков жизни",
            },
            {
              answerValue: true,
              answerText: "Обесточить кабель с помощью электрощитка",
            },
          ],
        },
        {
          questionText:
            "Вопрос №3 Оцените обстановку и выберите приоритетность оказания первой помощи пострадавшим",
          imgPath: "1car.webp",
          theme: "Тема 3 ",
          answers: [
            {
              answerValue: 1,
              answerText:
                "Сначала оказать помощь пострадавшему А, потом Б, потом В",
            },
            {
              answerValue: 2,
              answerText:
                "Сначала оказать помощь пострадавшему А, потом В, потом Б",
            },
            {
              answerValue: true,
              answerText:
                "Сначала оказать помощь пострадавшему Б, потом А, потом В",
            },
            {
              answerValue: 3,
              answerText:
                "Сначала оказать помощь пострадавшему Б, потом В, потом А",
            },
            {
              answerValue: 4,
              answerText:
                "Сначала оказать помощь пострадавшему В, потом А, потом Б",
            },
            {
              answerValue: 5,
              answerText:
                "Сначала оказать помощь пострадавшему В, потом Б, потом А",
            },
          ],
        },
      ],
    };
  },
  components: {
    QuestionComponent,
    // FormComponent,
  },
};
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
