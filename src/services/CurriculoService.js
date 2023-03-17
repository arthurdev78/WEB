import API from 'src/services/Api';
export default function CurriculoService(){
    const{listar, recuperar, salvar, deletar, atualizar} = API( 'curriculo');
    return{
        listar,
        recuperar,
        salvar,
        deletar,
        atualizar
    };
}