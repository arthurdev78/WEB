<template>
<div class ="q-ma-lg">
   <h5 class = "text-h5 text-weight-bold"> Listar Curriculos</h5>
    

    <div class="q-ma-lg" style="max-width: 500px">
    <q-list bordered separator>
      <q-item
      clickable
       v-ripple 
       v-for="curriculo in curriculos"
       :key="curriculo.id">
        <q-item-section>
            <q-item-label>
                {{ curriculo.first_name }}
                {{ curriculo.last_name  }}
            </q-item-label>
        <q-item-label caption>{{ curriculo.email }}</q-item-label>
        </q-item-section>
    </q-item>    
    </q-list>
    </div>
</div>
   
</template>

<script>
import{ref} from "vue";

export default {
    setup () {
        const curriculos = ref([
            {
            id: 1, 
            first_name: "Arthur",
            last_name: "vinicius",
            email:"arthur@gmail.com",
            confirmado: 1,

        },
        {
            id: 2, 
            first_name: "Antonio",
            last_name: "Gabriel",
            email:"antonio7@gmail.com",
            confirmado: 0,

        },
        {
            id: 3, 
            first_name: "hilton",
            last_name: "gabriel",
            email:"hilton@gmail.com",
            confirmado: 1,

        },
        ]);
        return {curriculos}; 
    }
};
</script>

<style lang="css" scoped>

</style>