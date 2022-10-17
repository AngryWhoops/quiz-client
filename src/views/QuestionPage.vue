<template>
    <HeaderComponent></HeaderComponent>
    
    <div class="task">
        <div class="question__wrapper">
            <h3 class="question">
                Вопрос №1: Внимательно посмотрите на изображение. Вам необходимо оценить обстановку и осуществить правильную последовательность действий
            </h3>
            <ul class="answers_list" >    
                <li>
                    <label class="answers_list__item">
                        <input type="radio" name="answer" value="true" v-model="inputValue">Вытащить пострадавшего из автомобиля и оттащить на безопасное расстояние
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
            <img class="task__img" src="@/assets/img/question-img/1car.jpg" alt="task">
        </div>
    </div>    

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
    data() {
        return{
            questions: [
                {
                    questionText: 'Вопрос №1: Внимательно посмотрите на изображение. Вам необходимо оценить обстановку и осуществить правильную последовательность действий',
                    answers: [
                        
                    ]
                },
            ],
            inputValue: '',
        }
    },
    methods: {
        isBtnActive() {
            if(!inputValue) {
                
            }
        }
    },
    components: {
        HeaderComponent,
    }
}
</script>

<style scoped lang="sass">
.task
    padding: 20px 0 0 20px
    display: flex
    &__img
        width: 100%
.img_wrapper
    flex: 0 0 70%
.question__wrapper
    padding: 0 20px 0 0
    margin-right: 20px
.question
    margin-bottom: 20px
.answers_list
    list-style-type: none
    li
        margin-bottom: 10px
    &__item
        display: inline-block
        width: 100%
        background: #fcb291
        border-radius: 10px
        padding: 5px
        transition: all 0.3s
        &:hover
            transform: scale(1.05)
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