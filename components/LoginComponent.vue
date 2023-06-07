<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      >
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Login
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <el-form ref="ruleForm" class="space-y-6" :rules="rules" :model="form">
        <div>
          <el-form-item label="Email" prop="email" class="mt-2">
            <el-input
              v-model="form.email"
              placeholder="Nhập email"
            />
          </el-form-item>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900" />
            <div class="text-sm">
              <div class="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer" @click="forGotPasswordClick">
                Forgot password?
              </div>
            </div>
          </div>
          <el-form-item label="Password" prop="password" class="mt-2">
            <el-input
              v-model="form.password"
              :type="checked ? 'text' : 'password'"
              placeholder="Nhập mật khẩu"
            />
          </el-form-item>
          <div class="flex items-center justify-end">
            <el-checkbox v-model="checked">
              Hiển thị mật khẩu
            </el-checkbox>
          </div>
        </div>

        <el-form-item>
          <el-button type="primary" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="submitForm('ruleForm')">
            Login
          </el-button>
        </el-form-item>
      </el-form>
      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <span class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" @click="SignupClick">Sign up</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      checked: false
    }
  },

  computed: {
    rules () {
      return {
        email: [{ required: true, message: 'Vui lòng điền email' }, {
          validator: (rule, value, callback) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) {
              callback(new Error('Vui lòng nhập đúng định dạng email'))
            }
            callback()
          }
        }],
        password: [{ required: true, message: 'Vui lòng điền mật khẩu' },
          {
            validator: (rule, value, callback) => {
              if (value.length < 8) {
                callback(new Error('Vui lòng nhập mật khẩu có độ dài 8 kí từ trở lên'))
              }
              callback()
            }
          }
        ]
      }
    }
  },

  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            console.log(this.$api.login)
            const response = await this.$axios.$post('http://localhost:3000/api/auth', { username: this.form.email, password: this.form.password })
            const token = response.access_token
            
            console.log(response)
          } catch (error) {
            // Handle login error
            console.error(error)
          }
        }
      })
    },
    forGotPasswordClick () {
      this.$router.push({
        path: '/forgot-password'
      })
    },
    SignupClick () {
      this.$router.push({
        path: '/signup'
      })
    }
  }
}
</script>
