import { ibge } from "../config/axios";
import AppErros from "../erros/AppErros";

//https://servicodados.ibge.gov.br/api/v1/localidades/municipios
export default class IbgeApiService {
    public static async execute() {
        try {
            const response =  await ibge.get('api/v1/localidades/municipios');
            const ibgeResult = response.data;

            console.log('ibgeResult :>> ', ibgeResult);

            return ibgeResult;
        } catch (error) {
            throw new AppErros('API ibge not working', 404)
            
        }
    }
}