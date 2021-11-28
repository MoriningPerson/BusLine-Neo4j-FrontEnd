<!--<template>-->
<!--    <div class="dropdown-view">-->
<!--        <div class="dropdown-box">-->
<!--            <span> {{selectData[current}}}</span>-->
<!--            <div class="icon" :class="{'icon-hover': isHover}"></div>-->
<!--        </div>-->

<!--        <div class="drop-view" @mouseover="isHover=true" @mouseleave="isHover=false">-->
<!--            <div class="drop-item" v-for="(item,index) in selectData" :key="index">-->
<!--                <input class="drop-ratio" type="radio" name="article" :id="getHover(index)" @click="current=index" :checked="current==index" hidden>-->
<!--                <label class="drop-label" :for="getHover(index)">-->
<!--                    <span>{{item}}</span>>-->
<!--                </label>>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>>-->
<!--</template>>-->

<!--<script>-->
<!--    export default {-->
<!--        data(){-->
<!--            return{-->
<!--                current:0,-->
<!--                selectData:['选项1','选项2','选项3'],-->
<!--                isHover:false-->
<!--            }-->
<!--        },-->

<!--        methods:{-->
<!--            getHover(value){-->
<!--                return $article.{value}-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    . dropdown-view{-->
<!--        position:relative;-->
<!--    }-->
<!--    .dropdown-box{-->
<!--        display: flex;-->
<!--        align-items:center;-->
<!--        justify-content: space-between;-->
<!--        box-sizing: border-box;-->
<!--        padding-top: 10px;-->
<!--        margin-bottom:10px;-->
<!--    }-->
<!--    .icon{-->
<!--        border-top: 2px solid #353535;-->
<!--        border-left:2px solid #353535;-->
<!--        height:5px;-->
<!--        width:5px;-->
<!--        transform:rotate(225deg);-->
<!--        transition: .4s;-->
<!--    }-->
<!--    .icon-hover{-->
<!--        transform:rotate(45deg);-->
<!--    }-->
<!--    .dropdown-box>.icon{-->
<!--        transform: rotate(45deg);-->
<!--    }-->
<!--    .dropdown-box:hover +.drop-view,-->
<!--    .drop-view:hover{-->
<!--        transform: scaleY(1);-->
<!--    }-->
<!--    .drop-view{-->
<!--        box-shadow:0 0 5px #525252;-->
<!--        height:auto;-->
<!--        width:100px;-->
<!--        border-radius:5px;-->
<!--        box-sizing: border-box;-->
<!--        padding:10px 0;-->
<!--        transform:scaleY(0);-->
<!--        transition: .4s;-->
<!--        transform-origin: top;-->
<!--        background-color: #FFFFFFFF;-->
<!--        position:absolute;-->
<!--    }-->
<!--    .drop-item{-->
<!--        height:30px;-->
<!--        width:100%;-->
<!--        display: flex;-->
<!--        align-items:center;-->
<!--    }-->
<!--    .drop-label{-->
<!--        width:100%;-->
<!--        height:100%;-->
<!--        transition: .4s;-->
<!--        box-sizing: border-box;-->
<!--        padding-left: 10px;-->
<!--        display: flex;-->
<!--        align-items: center;-->
<!--    }-->
<!--    .drop-label span{-->
<!--        position: absolute;-->
<!--        transition: .4s;-->
<!--    }-->
<!--    .drop-label:hover>span{-->
<!--        transform: translateX(15px);-->
<!--    }-->
<!--    . drop-radio:checked +.drop-label{-->
<!--        background-color: #d3d4e2;-->
<!--    }-->
<!--</style>-->