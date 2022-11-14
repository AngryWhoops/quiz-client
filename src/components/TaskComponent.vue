<template>
  <div class="wrapper" :style="img_section_style">
    <header-component :current-theme="localObject[questionTheme]" />
    <div class="gif-wrapper">
      <span></span>
    </div>
    <div class="list-wrapper">
      <div class="answers_list">
        <h2>{{ localObject[viewQuestionHead] }}</h2>
        <div
          v-for="item in localObject[arrayElements]"
          v-bind:key="item[elementValue]"
        >
          <label class="answers_list__item">
            <input
              type="radio"
              name="answer"
              :value="item[elementValue]"
              v-model="inputValue"
            />{{ item.answerText }}
          </label>
        </div>
      </div>

      <div class="checking_wrapper">
        <button class="btn" @click="stepIncrement" v-show="inputValue === true">
          Далее
        </button>
        <div class="correct_wrapper">
          <div
            class="cross"
            v-if="inputValue !== true && inputValue !== ''"
          ></div>
          <div
            class="check"
            v-if="inputValue === true && inputValue !== ''"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  data() {
    return {
      // fileName: this.pathForSrc,
      inputValue: "",
      localObject: this.questionObject,
      localStep: this.stepInput,
      localImgPath: this.pathForSrc1,
      localSecondBgPath: this.pathForSrc2,
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
    pathForSrc1: {
      type: String,
    },
    pathForSrc2: {
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
    changeBg() {
      if (this.inputValue === true) {
        let fileName = this.localSecondBgPath;
        document.body.style.backgrond = `url("img/${fileName}") center/cover no-repeat `;
      }
    },
  },
  watch: {
    questionObject() {
      this.localObject = this.questionObject;
    },
  },
  computed: {
    img_section_style: function () {
      if (this.inputValue === true) {
        let bgImg = this.localObject[this.localSecondBgPath];
        return {
          background: `url("img/${bgImg}") center/cover no-repeat `,
        };
      } else {
        let bgImg = this.localObject[this.localImgPath];
        return {
          background: `url("img/${bgImg}") center/cover no-repeat `,
        };
      }
    },
  },
};
</script>

<style scoped lang="sass">
.wrapper
  min-height: 100vh
  display: flex
  flex-direction: column
  transition: all 0.3s
  h2
    margin: 30px 0
    color: #fff
    text-shadow: 0 0 10px rgb(0 0 0 / 90%)
.gif-wrapper
  flex: 1 1 auto
  margin: 30px
.list-wrapper
  display: flex
  flex-direction: column
.answers_list
  list-style-type: none
  margin: 30px 10px 0px 30px
  width: 60%
  &__item
    display: inline-block
    width: 100%
    margin-bottom: 10px
    background: #212945
    color: #fff
    border-radius: 10px
    padding: 5px
    transition: all 0.3s
    &:hover
      transform: scale(1.02)
  input
    margin-right: 5px
.checking_wrapper
  display: flex
  margin: 0 30px 30px
  width: 30%
.correct_wrapper
  width: 50px
  height: 50px
  // background: #000
  margin: 0 30px
.cross
  display: inline-block
  margin-left: 10px
  position: relative
  &::before
    content: ''
    position: absolute
    width: 50px
    height: 4px
    background: #e31c22
    box-shadow: 0 0 10px rgb(0 0 0 / 90%)
    transform: rotate(-45deg)
  &::after
    content: ''
    position: absolute
    width: 50px
    height: 4px
    background: #e31c22
    box-shadow: 0 0 10px rgb(0 0 0 / 90%)
    transform: rotate(45deg)
.check
  display: inline-block
  margin-left: 10px
  position: relative
  &::before
    content: ''
    position: absolute
    width: 50px
    height: 4px
    background: green
    box-shadow: 0 0 10px rgb(0 0 0 / 90%)
    transform: rotate(-45deg)
    top: 2px
    left: 7px
  &::after
    content: ''
    position: absolute
    width: 20px
    height: 4px
    background: green
    box-shadow: 0 0 10px rgb(0 0 0 / 90%)
    transform: rotate(45deg)
    top: 12px

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
