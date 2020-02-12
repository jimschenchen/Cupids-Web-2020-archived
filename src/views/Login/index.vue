<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
            </ul>

            <form>
                <div class="form-group" :class="this.form.mail.error">
                    <label class="form-label">邮箱</label>
                    <input class="form-input" type="text" placeholder="邮箱" v-model="form.mail.content">
                    <p class="form-input-hint">{{form.mail.hint}}</p>
                </div>

                <div class="form-group" :class="this.form.pass.error">
                    <label class="form-label">密码</label>
                    <input class="form-input" type="text" placeholder="密码" v-model="form.pass.content">
                    <p class="form-input-hint">{{form.pass.hint}}</p>
                </div>

                <button class="btn btn-primary" @click="submit">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            menuTab: [
                { txt: "login", current: true},
                { txt: "register", current: false},
            ], 
            form: {
                mail: {content: '', error: '', hint: ''},
                pass: {content: '', error: '', hint: ''}
            }
        }  
    },
    methods: {
        toggleMenu(data) {
            this.menuTab.forEach(element => {
                element.current = false
            });
            data.current = true;
        },
        submit() {
            // valide mail
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (!this.form.mail.content) {
                this.form.mail.hint = '邮箱不能为空!';
                this.form.mail.error = 'has-error';
            } else if (!reg.test(this.form.mail.content)) {
                this.form.mail.hint = '请输入正确的邮箱!';
                this.form.mail.error = 'has-error';
            } else {
                this.form.mail.hint = '邮箱正确！';
                this.form.mail.error = 'has-success';
            }

            // valide pass
            let reg2 = /^(?!\D+$)(?![^a-zA-Z]+$)\S{8,20}$/;
            if (!this.form.pass.content) {
                this.form.pass.hint = '密码不能为空!';
                this.form.pass.error = 'has-error';
            } else if (!reg2.test(this.form.pass.content)) {
                this.form.pass.hint = '请输入8-20位数字+字母的密码！';
                this.form.pass.error = 'has-error';
            } else {
                this.form.pass.hint = '密码正确！';
                this.form.pass.error = 'has-success';
            }
        }
    }
}
</script>


<style lang="scss" scoped>
#login {
    height: 100vh;
    background-color: #344a5f;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
}
.login-wrap {
    width: 330px;
    margin:auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
}
.current {
    background-color: rgba(0, 0, 0, .1)
}

.btn 
{
    width: 100%;
}
</style>