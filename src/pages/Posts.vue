<template>
    <q-page padding>
        <div class="row q-gutter-md justify-center">
            <div class="col-xs-8 col-md-6 col-lg-3" v-for="post in 9" :key="post">
                <q-card class="my-card">
                    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div id="post-title" class="absolute-bottom text-h6" @click="goToPost">
                        Title
                        </div>
                    </q-img>

                    <q-card-section>
                        Teste
                    </q-card-section>
                </q-card>
            </div>
            
        </div>
    </q-page>
  </template>

<script setup>
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

const router = useRouter();

    defineComponent({
        name: 'PostsPage'
    })

    const goToPost = () => {
        router.push({name: 'PostPage'})
    }


</script>

<style scoped>
    #post-title:hover {
        cursor: pointer
    }
</style>