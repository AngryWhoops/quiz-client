<template>
  <div class="wrapper" :style="img_section_style">
    <header-component :current-theme="localObject[questionTheme]" />
    <div class="gif-wrapper">
      <span></span>
    </div>
    <div class="list-wrapper">
      <h2>{{ localObject[viewQuestionHead] }}</h2>
      <div class="answers_list">
        <div
          v-for="item in localObject[arrayElements]"
          v-bind:key="item[elementValue]"
        >
          <label class="answers_list__item" @click="checkAnswer">
            <input
              type="radio"
              name="answer"
              :value="item[elementValue]"
              v-model="inputValue"
            />{{ item.answerText }}
          </label>
          <div
            class="cross"
            v-if="inputValue !== true && this.inputValue !== ''"
          ></div>
          <div class="check" v-if="this.inputValue === true"></div>
        </div>
        <button class="btn" @click="stepIncrement" v-show="inputValue">
          Далее
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  data() {
    return {
      fileName: "car-smoke.gif",
      inputValue: "",
      localObject: this.questionObject,
      localStep: this.stepInput,
      localImgPath: this.pathForSrc,
    };
  },
  components: {
    HeaderComponent,
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
    /**
     * Тема вопроса
     */
    questionTheme: {
      type: String,
    },
  },
  emits: ["onUpdate"],
  methods: {
    /**Увеличение шага вопроса */
    stepIncrement() {
      this.localStep++;
      this.$emit("onUpdate", this.localStep);
    },
    // checkAnswer() {
    //   if (this.inputValue !== true || this.inputValue !== "") {
    //     document.querySelector(".cross").classList.add("active");
    //     document.querySelector(".check").classList.remove("active");
    //     this.inputValue = "";
    //     console.log("wrong");
    //   }
    //   if (this.inputValue === true) {
    //     document.querySelector(".check").classList.add("active");
    //     document.querySelector(".cross").classList.remove("active");
    //     console.log("correct");
    //   }
    // },
  },
  watch: {
    questionObject() {
      this.localObject = this.questionObject;
    },
  },
  computed: {
    img_section_style: function () {
      let bgImg = this.fileName;
      return {
        background: `url("src/assets/img/${bgImg}") center/cover no-repeat `,
      };
    },
  },
};
</script>

<style scoped lang="sass">
.wrapper
  min-height: 100vh
  display: flex
  flex-direction: column
  h2
    margin: 30px
    color: #fff
.gif-wrapper
  flex: 1 1 auto
  margin: 30px
.answers_list
  list-style-type: none
  margin: 30px
  width: 60%
  li
    margin-bottom: 10px
  &__item
    display: inline-block
    width: 90%
    background: #212945
    color: #fff
    border-radius: 10px
    padding: 5px
    transition: all 0.3s
    &:hover
      transform: scale(1.02)
  input
    margin-right: 5px
.cross
  display: inline-block
  margin-left: 10px
  position: relative
  &::before
    content: ''
    position: absolute
    width: 30px
    height: 3px
    background: red
    transform: rotate(-45deg)
    top: -8px
  &::after
    content: ''
    position: absolute
    width: 30px
    height: 3px
    background: red
    transform: rotate(45deg)
    top: -8px

.check
  display: inline-block
  margin-left: 10px
  position: relative
  &::before
    content: ''
    position: absolute
    width: 30px
    height: 3px
    background: green
    transform: rotate(-45deg)
    top: -8px
    left: 7px
  &::after
    content: ''
    position: absolute
    width: 15px
    height: 3px
    background: green
    transform: rotate(45deg)
    top: -2px
.active
  display: inline-block
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
</style>
