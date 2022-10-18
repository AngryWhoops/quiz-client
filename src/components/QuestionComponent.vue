<template>
   
    <div class="task" v-for="(question, index) in questions" v-bind:key="question">       
        
        <div class="question__wrapper" v-show="index === questionIndex">
            <h3 class="question">
                {{question.questionText}}
            </h3>
            <ul class="answers_list">
                <li v-for="answer in question.answers" v-bind:key="answer">
                    <label class="answers_list__item">
                        <input type="radio" name="answer" v-bind:value="answer.answerValue" v-model="inputValue">{{answer.answerText}}
                    </label>
                </li>                
            </ul>
            <button class="btn" v-on:click="next">
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
            questionIndex: 0,                  
        }
    },
    props: {        
        questions: {
            step: Number,
            questionText: String,
            imgPath: String,
            theme: Number,
            answers: Array,
            required: true
        }       
    },
    methods: {
        next: function() {
            this.questionIndex++;
        }
    },
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