<template>
    <div id="survey">
        <div class="survey-wrap">
            <h1>xxxsurvey</h1>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span id="title">xxx调查</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="restart()">重新开始</el-button>
                </div>
                <div class="question-wrap">
                    <div id="question">Quesion #{{this.currentQuestions.id}}:</div>
                    <div>{{this.currentQuestions.content}}</div>
                    <div class="button-wrap">
                        <el-button-group>
                            <el-button class="button" type="primary" icon="el-icon-arrow-left" @click="submitQuestion(1)">{{this.currentQuestions.btn1}}</el-button>
                            <el-button class="button" type="primary" @click="submitQuestion(2)">{{this.currentQuestions.btn2}}<i class="el-icon-arrow-right el-icon-right"></i></el-button>
                        </el-button-group>
                    </div>
                </div>
            </el-card>
        </div>
    </div>  
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            currentQuestions: { id: 1, content: '请问我帅吗', btn1: 'a 帅', btn2: 'b 不帅', opt1: 2, opt2: 3},
            questions: [
                { id: 1, content: '请问我帅吗', btn1: 'a 帅', btn2: 'b 不帅', opt1: 2, opt2: 3},
                { id: 2, content: '请问我酷吗', btn1: 'a 酷', btn2: 'b 不酷', rst1: 1, rst2: 2},
                { id: 3, content: '请问我好看吗', btn1: 'a 好看', btn2: 'b 不好看', rst1: 1, rst2: 2},
                { id: -1, content: 'error', btn1: 'a', btn2: 'b', opt1: 2, opt2: 3}
            ],
            result: [
                { id: 1, content: '你有自恋倾向'}
            ]
        }  
    },
    methods: {
        submitQuestion(data) {
            let redirect = -1;
            let result = -1;
            if(data==1){
                if(this.currentQuestions.opt1) {
                    redirect = this.currentQuestions.opt1;
                } else {
                    result = this.currentQuestions.rst1;
                }
            }else if(data==2){
                if(this.currentQuestions.opt2) {
                    redirect = this.currentQuestions.opt2;
                } else {
                    result = this.currentQuestions.rst2;
                }
            }
            if (result < 0) {
                // no result redirect
                this.questions.forEach(element => {
                    if(element.id == redirect){
                        this.currentQuestions = element;
                    }
                });
            } else {
                // go to result
                this.$alert(this.result[0].content, 'Title', {
                    confirmButtonText: 'OK',
                    callback: action => {
                        this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                        });
                    }
                });
            }
        },
        restart() {
            this.currentQuestions = this.questions[0]
        }
    }
}
</script>


<style lang="scss" scoped>
h1 {
    text-align: left;
    color: #fff;
}
#survey {
    // height: 100vh;
    background-color: #344a5f;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
}
.survey-wrap {
    width: 330px;
    margin: auto;
}
.question-wrap {
    line-height: 100px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .1);
    margin-bottom: 20px;
}

.button {
    width: 150px;
}
// button
.button-wrap {
    width: 300px;
    margin: auto;
}

.text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }
</style>