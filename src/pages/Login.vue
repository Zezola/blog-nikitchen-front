<template>
    <q-page class="padding">
      <p class="text-h5 text-center q-mt-md">Login</p>
        <q-form class="row justify-center" @submit.prevent="">
          <div class="col-xs-10 col-sm-6 col-md-3 q-gutter-md">         
  
            <q-input
              v-model="form.email"
              label="Email"
              ></q-input>
  
              <q-input
              v-model="form.password"
              label="Password"
              ></q-input>
  
              <div class="full-width q-pt-md">
                <q-btn
                label="Login"
                color="primary"
                class="full-width"
                outline
                rounded
                type="submit"></q-btn>
              </div>
  
              <div class="full-width q-pt-md">
                <q-btn
                label="Register"
                color="primary"
                class="full-width"
                flat
                rounded
                to="register"
                size="sm"></q-btn>
              </div>
  
              <div class="full-width q-pt-md">
                <q-btn
                label="Forgot Password?"
                color="primary"
                class="full-width"
                flat
                rounded
                size="sm"
                to="forgotPassword"></q-btn>
              </div>
              
          </div>
        </q-form>
    </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: 'LoginPage'
});

const form = {
    email: ref(''),
    password: ref('')
}
</script>
