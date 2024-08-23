<template>
        <q-page class="padding">
      <p class="text-h5 text-center q-mt-md">Forgot Password</p>
        <q-form class="row justify-center" @submit.prevent="">
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-md">         
  
            <q-input
              v-model="email"
              label="Email"
              ></q-input>
  
              <div class="full-width q-pt-md">
                <q-btn
                label="Send Email"
                color="primary"
                class="full-width"
                flat
                rounded
                to="forgot-password"></q-btn>
              </div>

              <div class="full-width q-pt-md">
                <q-btn
                label="Login"
                color="dark"
                class="full-width"
                flat
                rounded
                size="sm"
                to="login"></q-btn>
              </div>
              
          </div>
        </q-form>
    </q-page>
</template>

<script setup>
import { defineComponent , ref} from "vue";

    defineComponent({
        name: "ForgotPasswordPage"
    })

    const email = ref('')
</script>