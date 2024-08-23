<template>
    <q-page class="padding">
      <p class="text-h5 text-center q-mt-md">Register</p>
        <q-form class="row justify-center" @submit.prevent="">
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-md">         
  
            <q-input
              v-model="form.email"
              label="Email"
              ></q-input>

              <q-input
              v-model="form.name"
              label="Name"
              ></q-input>
  
              <q-input
              v-model="form.password"
              label="Password"
              ></q-input>

              <q-input
              v-model="form.passwordConfirmation"
              label="Confirm Password"
              ></q-input>
  
              <div class="full-width q-pt-md">
                <q-btn
                label="Register"
                color="primary"
                class="full-width"
                outline
                rounded
                type="submit"></q-btn>
              </div>

              <q-btn
                label="Login"
                color="primary"
                class="full-width"
                outline
                rounded
                to="login"></q-btn>
              
          </div>
        </q-form>
    </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: 'RegisterPage'
});

const form = {
    email: ref(''),
    name: ref(''),
    password: ref(''),
    passwordConfirmation: ref('')
}
</script>
