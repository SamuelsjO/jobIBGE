import { readFileSync, writeFileSync } from 'fs';
import { getCustomRepository} from "typeorm";
import { ibge } from "../config/axios";
import Ibge from "../entities/Ibge";
import AppErros from "../erros/AppErros";
import ICreateIbge from '../IcreateIbge/ICreateIbge';
import IbgeRepository from '../repository/IbgeRepository';

export default class IbgeApiService {
    public static async execute(): Promise<Ibge>{
        const repository = getCustomRepository(IbgeRepository);
        try {
            const response =  await ibge.get('api/v1/localidades/municipios');
            const ibgeResult = response.data;

            const output = ibgeResult.map((element: ICreateIbge) => {
               return {
                  city: element.nome, 
                  state: element.microrregiao.mesorregiao.UF.sigla
               }
            });


            writeFileSync('src/data/ListStateCity.json', JSON.stringify(output));

            const rawData = readFileSync('src/data/ListStateCity.json');

            if (rawData) JSON.parse(rawData.toString());
    
            return await repository.save(output);

        } catch (error) {
            throw new AppErros('API ibge not working', 400)
            
        }
    }
}