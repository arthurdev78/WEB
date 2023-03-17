import {api} from 'boot/axios';

export default function API(url){
    //acesso a lista de uma URl
    const listar = async () => {
        try{

        return await api.get(url);
        }catch (error){
            throw new Error(error.message);
        }
    }

    const recuperar = async(id) =>{
        try{
            return await api.get(`${url}/${id}`);

        } catch (error){
            throw new Error(error.message);
        }
    }
    const salvar = async(itens) =>{
        try{
            return await api.post(url, itens);

        } catch (error){
            throw Error (error.message);
        }
    }
    
    const atualizar = async(itens) =>{
        try{
            return await api.put(`${url}/${itens.id}`);

        } catch (error){
            throw new Error (error.message);
        }
    }
    const deletar = async(id) =>{
        try{
            return await api.get(`${url}/${id}`);

        } catch (error){
            throw new Error(error.message);
        }
    }
    
    return {
        listar,
        recuperar,
        salvar,
        atualizar,
        deletar
    }
}