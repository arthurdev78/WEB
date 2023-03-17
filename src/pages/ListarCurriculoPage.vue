<template>
<div class ="q-ma-lg">
   <h5 class = "text-h5 text-weight-bold"> Listar Curriculos</h5>
   <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input v-model="form.first_name" label="Primeiro nome"/>
      <q-input v-model="form.last_name" label="Último Nome"/>
      <q-input v-model="form.email" label="E-mail"/>
    </div>
    <q-btn label = "Enviar" type="submit" color ="primary"/>
    <q-btn
    label="limpar"
    type="reset"
    color = "primary"
    flat
    class="q-ml-sm" 
    />

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
</div>
   
</template>

<script>
import{onMounted, ref} from "vue";
import{userMeta} from "quasar";
import curriculoService from "src/services/CurriculoService"

const metaData = {
    title: "Listar Curriculo",
    titleTemplate: (title) => `${title} - App Curriculo`,
};

export default {
    setup () {
        userMeta (metaData);
        const Curriculos= ref([{}]);
        const form = ref({});



        const{ listar, salvar } = curriculoService();
        const listarCurriculos= async () => {
            curriculos.value = await listar();
        };
     
     const onSubmit = async () =>{
        await salvar (form.value);
        listarCurriculos();
        catch (error){

        }

     }
        onMounted(() => {
        listarCurriculos();

     });

     return {
        curriculos,
        form,
     };

    },
};
</script>

<style lang="css" scoped></style>