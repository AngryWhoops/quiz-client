<template>
  <task-component
    v-bind:question-object="questions[0]"
    view-question-head="questionText"
    array-elements="answers"
    element-value="answerValue"
    path-for-src1="imgPath1"
    path-for-src2="imgPath2"
    question-theme="theme"
    :step-input="step"
    @on-update="step = $event"
    v-if="step == 0"
  />
  <task-component
    v-bind:question-object="questions[1]"
    view-question-head="questionText"
    array-elements="answers"
    element-value="answerValue"
    path-for-src1="imgPath1"
    path-for-src2="imgPath2"
    question-theme="theme"
    :step-input="step"
    @on-update="step = $event"
    v-if="step == 1"
  />
</template>

<script>
import TaskComponent from "@/components/TaskComponent.vue";
export default {
  components: {
    TaskComponent,
  },
  data() {
    return {
      step: 0,
      questions: [
        {
          questionText:
            "Вопрос №1 Оцените обстановку и выберите действие, которое необходимо выполнить первым в данной ситуации",
          imgPath1: "car-smoke.gif",
          imgPath2: "car-fire.gif",
          theme: "Тема №1 Оценка обстановки на месте происшествия",
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
              answerValue: 3,
              answerText: "Вызвать пожарных",
            },
          ],
        },
        {
          questionText:
            "Вопрос №2 Оцените обстановку и выберите действие, которое необходимо выполнить первым в данной ситуации",
          imgPath1: "2-electricity-on.gif",
          imgPath2: "2-electricity-off.png",
          theme: "Тема №1 Оценка обстановки на месте происшествия",
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
};
</script>

<style scoped lang="sass"></style>
