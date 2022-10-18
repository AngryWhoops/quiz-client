<template>
    <HeaderComponent></HeaderComponent>
    <div class="task_wrapper">
        
    </div>
    <QuestionComponent 
        v-bind:question-object="questions[0]"
        view-question-head="questionText"
        array-elements="answers"
        element-value="answerValue"
        :step-input="step"
        @on-update="step = $event"
        v-if="step == 0"
        />
    <QuestionComponent 
        v-bind:question-object="questions[1]" 
        view-question-head="questionText" 
        array-elements="answers" 
        element-value="answerValue"
        :step-input="step"
        @on-update="step = $event"
        v-if="step == 1"/>
    <QuestionComponent 
        v-bind:question-object="questions[2]" 
        view-question-head="questionText" 
        array-elements="answers"
        element-value="answerValue"
        :step-input="step"
        @on-update="step = $event"
        v-if="step == 2"/>
    <!-- <div class="task">
        <div class="question__wrapper">
            <h3 class="question">
                {{question.questionText}}
            </h3>
            <ul class="answers_list">
                <li>
                    <label class="answers_list__item">
                        <input type="radio" name="answer" value="true" v-model="inputValue">Вытащить пострадавшего из
                        автомобиля и оттащить на безопасное расстояние
                    </label>
                </li>
                <li>
                    <label class="answers_list__item">
                        <input type="radio" name="answer" value="false" v-model="inputValue">Вызвать скорую помощь
                    </label>
                </li>
                <li>
                    <label class="answers_list__item">
                        <input type="radio" name="answer" value="false" v-model="inputValue">Вызвать пожарных
                    </label>
                </li>
            </ul>
            <button class="btn">
                Далее
            </button>
        </div>

        <div class="img_wrapper">
            <img class="task__img" src="@/assets/img/question-img/1car.webp" alt="task">
        </div>
    </div> -->

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import QuestionComponent from "@/components/QuestionComponent.vue";
// import questions from "@/questions/questions";
import store from '@/store/index';

export default {
    data() {
        return {
            step: 0,
            questions: [
                {
                    questionText: 'Оцените обстановку и выберите действие, которое необходимо выполнить первым в данной ситуации',
                    imgPath: '@/assets/img/question-img/1car.webp',
                    theme: 1,
                    answers:[
                        {
                            answerValue: 1,
                            answerText: 'Вызвать скорую помощь',
                        },
                        {
                            answerValue: true,
                            answerText: 'Вытащить пострадавшего из автомобиля и перенести на безопасное расстояние',
                        },
                        {
                            answerValue: 2,
                            answerText: 'Вызвать пожарных',
                        }
                    ]
                },
                {
                    questionText: 'Оцените обстановку и выберите действие, которое необходимо выполнить первым в данной ситуации',
                    imgPath: '@/assets/img/question-img/2car.webp',
                    theme: 1,
                    answers:[
                        {
                            answerValue: false,
                            answerText: 'Вызвать скорую помощь',
                        },
                        {
                            answerValue: false,
                            answerText: 'Подойти к пострадавшему и проверить наличие признаков жизни',
                        },
                        {
                            answerValue: true,
                            answerText: 'Обесточить кабель с помощью электрощитка',
                        }
                    ]
                },
                {
                    questionText: 'Оцените обстановку и выберите приоритетность оказания первой помощи пострадавшим',
                    imgPath: '@/assets/img/question-img/1car.webp',
                    theme: 1,
                    answers:[
                        {
                            answerValue: false,
                            answerText: 'Сначала оказать помощь пострадавшему А, потом Б, потом В',
                        },
                        {
                            answerValue: false,
                            answerText: 'Сначала оказать помощь пострадавшему А, потом В, потом Б',
                        },
                        {
                            answerValue: true,
                            answerText: 'Сначала оказать помощь пострадавшему Б, потом А, потом В',
                        },
                        {
                            answerValue: false,
                            answerText: 'Сначала оказать помощь пострадавшему Б, потом В, потом А',
                        },
                        {
                            answerValue: false,
                            answerText: 'Сначала оказать помощь пострадавшему В, потом А, потом Б',
                        },
                        {
                            answerValue: false,
                            answerText: 'Сначала оказать помощь пострадавшему В, потом Б, потом А',
                        },
                    ]
                },        
            ],      

        }
    },    
    components: {
        HeaderComponent,
        QuestionComponent,
    },
    store: {
        store
    },  

}
</script>

<style scoped lang="sass">
.task_wrapper
    padding: 20px 0 0 20px
// .task
//     padding: 20px 0 0 20px
//     display: flex
//     &__img
//         width: 100%
// .img_wrapper
//     flex: 0 0 70%
// .question__wrapper
//     padding: 0 20px 0 0
//     margin-right: 20px
// .question
//     margin-bottom: 20px
// .answers_list
//     list-style-type: none
//     li
//         margin-bottom: 10px
//     &__item
//         display: inline-block
//         width: 100%
//         background: #fcb291
//         border-radius: 10px
//         padding: 5px
//         transition: all 0.3s
//         &:hover
//             transform: scale(1.05)
//     input
//         margin-right: 5px
// .btn
//     padding: 10px 30px
//     background: #d3cecc
//     border: none
//     border-radius: 10px
//     font-size: 18px
//     cursor: pointer
//     text-decoration: none
//     color: #000
//     transition: 0.3s all
//     &:hover
//         transform: scale(1.05)
//     .active
//         background: #fcb291

</style>
