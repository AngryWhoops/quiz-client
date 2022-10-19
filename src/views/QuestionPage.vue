<template>
    <HeaderComponent></HeaderComponent>
    <div class="task_wrapper">
        
    </div>
    <QuestionComponent 
        v-bind:question-object="questions[0]"
        view-question-head="questionText"
        array-elements="answers"
        element-value="answerValue"
        path-for-src="imgPath"
        :step-input="step"
        @on-update="step = $event"
        v-show="step == 0"
        />
    <QuestionComponent 
        v-bind:question-object="questions[1]" 
        view-question-head="questionText" 
        array-elements="answers" 
        element-value="answerValue"
        path-for-src="imgPath"
        :step-input="step"
        @on-update="step = $event"
        v-show="step == 1"/>
    <QuestionComponent 
        v-bind:question-object="questions[2]" 
        view-question-head="questionText" 
        array-elements="answers"
        element-value="answerValue"
        path-for-src="imgPath"
        :step-input="step"
        @on-update="step = $event"
        v-show="step == 2"/>
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
                    imgPath: '1car.webp',
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
                    imgPath: '2car.webp',
                    theme: 1,
                    answers:[
                        {
                            answerValue: 1,
                            answerText: 'Вызвать скорую помощь',
                        },
                        {
                            answerValue: 2,
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
                    imgPath: '1car.webp',
                    theme: 1,
                    answers:[
                        {
                            answerValue: 1,
                            answerText: 'Сначала оказать помощь пострадавшему А, потом Б, потом В',
                        },
                        {
                            answerValue: 2,
                            answerText: 'Сначала оказать помощь пострадавшему А, потом В, потом Б',
                        },
                        {
                            answerValue: true,
                            answerText: 'Сначала оказать помощь пострадавшему Б, потом А, потом В',
                        },
                        {
                            answerValue: 3,
                            answerText: 'Сначала оказать помощь пострадавшему Б, потом В, потом А',
                        },
                        {
                            answerValue: 4,
                            answerText: 'Сначала оказать помощь пострадавшему В, потом А, потом Б',
                        },
                        {
                            answerValue: 5,
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
