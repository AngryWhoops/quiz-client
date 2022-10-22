<template>
  <div class="task">
    <div class="question__wrapper">
      <h3 class="question">
        {{ localObject[viewQuestionHead] }}
      </h3>
      <ul class="answers_list">
        <!-- <transition-group> -->
        <li
          v-for="item in localObject[arrayElements]"
          v-bind:key="item[elementValue]"
        >
          <label class="answers_list__item">
            <input
              type="radio"
              name="answer"
              v-bind:value="item[elementValue]"
              v-model="inputValue"
            />{{ item.answerText }}
          </label>
        </li>
        <!-- </transition-group>                                 -->
      </ul>
      <!-- <transotion name="btn-fade" mode="out-in" appear> -->
      <button class="btn" @click="stepIncrement" v-if="inputValue">
        Далее
      </button>
      <!-- </transotion>                        -->
    </div>
    <div class="img_wrapper">
      <img class="task__img" :src="createImgPath" alt="task" />
    </div>
  </div>
</template>

<script>
// import questions from "@/questions/questions";

export default {
  data() {
    return {
      inputValue: "",
      localObject: this.questionObject,
      localStep: this.stepInput,
      localImgPath: this.pathForSrc,
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
          questionText:
            "Вопрос №2 Оцените обстановку и выберите действие, которое необходимо выполнить первым в данной ситуации",
          imgPath: "2car.webp",
          theme: 1,
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
          theme: 1,
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
  props: {
    /**
     *Входящие данные
     */
    questionObject: {
      type: Object,
      required: true,
    },
    /**
     *Поле с текстом вопроса(заголовок вопроса)
     */
    viewQuestionHead: {
      type: String,
    },
    /**
     * Массив ответов
     */
    arrayElements: {
      type: String,
    },
    /**
     * Значение инпута
     */
    elementValue: {
      type: String,
    },
    /**
     * Входящий шаг
     */
    stepInput: {
      type: Number,
    },
    /**
     * Имя элемента для src
     */
    pathForSrc: {
      type: String,
    },
  },
  emits: ["onUpdate"],
  methods: {
    stepIncrement() {
      this.localStep++;
      this.$emit("onUpdate", this.localStep);
    },
    // createImgPath(){
    //     console.log(this.localObject[this.localImgPath]);

    //     const fileName = this.localObject[this.localImgPath];
    //     console.log(fileName);
    //     return require(`../assets/img/${fileName}`);
    // }
  },
  watch: {
    questionObject() {
      this.localObject = this.questionObject;
    },
  },
  computed: {
    createImgPath() {
      // console.log(this.localObject[this.localImgPath]);
      const fileName = this.localObject[this.localImgPath];
      // console.log(fileName);
      //return 'D:/VS_Code_files/quiz/quiz-client/src/assets/img/1car.webp';
      return require(`../assets/img/${fileName}`);
    },
  },
};
</script>

<style scoped lang="sass">
.task
    padding: 20px 20px 20px 0
    display: flex
    &__img
        width: 100%
.img_wrapper
    flex: 0 0 65%
.question__wrapper
    padding: 0 20px 0 20px
    margin-right: 20px
.question
    margin-bottom: 20px
.answers_list
    list-style-type: none
    li
        margin-bottom: 20px
    &__item
        display: inline-block
        width: 100%
        background: #212945
        color: #fff
        border-radius: 10px
        padding: 5px
        transition: all 0.3s
        &:hover
            transform: scale(1.02)
    input
        margin-right: 5px
.btn
    padding: 10px 30px
    background: #d3cecc
    border: none
    border-radius: 10px
    font-size: 18px
    cursor: pointer
    text-decoration: none
    color: #000
    transition: 0.3s all
    &:hover
        transform: scale(1.05)
.btn-fade-enter-active
    transition: opacity 0.3s ease
.btn-fade-leave-active
    transition: opacity 0.3s ease
.btn-fade-enter-from
    opacity: 0
.btn-fade-leave-to
    opacity: 0
</style>
