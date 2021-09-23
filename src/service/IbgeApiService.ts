import { getConnectionManager, getCustomRepository } from "typeorm";
import { ibge } from "../config/axios";
import AppErros from "../erros/AppErros";
import IbgeRepository from "../repository/IbgeRepository";


export default class IbgeApiService {
    public static async execute(){


        const repository: IbgeRepository = getCustomRepository(IbgeRepository);
        try {
            const response =  await ibge.get('api/v1/localidades/municipios');
            const ibgeResult = response.data;

            const output = []

            ibgeResult.forEach((element: any) => {
               output.push({
                  city: element.nome, 
                  state: element.microrregiao.mesorregiao.UF.sigla
               })
            });

            return await repository.save(ibgeResult);

        } catch (error) {
            throw new AppErros('API ibge not working', 400)
            
        }
    }
}