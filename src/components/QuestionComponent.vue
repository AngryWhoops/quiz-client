<template>
   
    <div class="task">
             
        <div class="question__wrapper">
            <h3 class="question">
                {{ localObject[viewQuestionHead] }}
            </h3>
            <ul class="answers_list">
                <li v-for="item in localObject[arrayElements]" v-bind:key="item[elementValue]">
                    <label class="answers_list__item">
                        <input type="radio" name="answer" v-bind:value="item[elementValue]" v-model="inputValue">{{ item.answerText }}
                    </label>                    
                </li>                
            </ul>
            <button class="btn" @click="stepIncrement">
                Далее
            </button>            
        </div>
        <!-- <div class="img_wrapper">
            <img class="task__img" src={{question.imgPath}} alt="task">
        </div> -->
    </div>
    
</template>

<script>
// import questions from "@/questions/questions";

export default {
    data() {
        return {
            inputValue: '',
            localObject: this.questionObject,
            localStep: this.stepInput,
        }
    },
    props: {
        /**
         *Входящие данные
        */        
        questionObject: {
            type: Object,
            required: true
        },
        /**
         *Поле с текстом вопроса(заголовок вопроса)
         */
        viewQuestionHead: {
            type: String
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
            type: Number
        }
    },
    emits: ['onUpdate'],
    methods: {
        stepIncrement() {
            this.localStep++;
            this.$emit('onUpdate', this.localStep);
        }
    },
    watch: {
        questionObject() {
            this.localObject = this.questionObject;
        },
    }
}
</script>

<style scoped lang="sass">
.task
    // padding: 20px 0 0 20px
    display: flex
    &__img
        width: 100%
.img_wrapper
    flex: 0 0 70%
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
        background: #fcb291
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
    .active
        background: #fcb291
</style>