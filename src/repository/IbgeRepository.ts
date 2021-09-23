import { EntityRepository, Repository } from "typeorm";
import Ibge from "../entities/Ibge";


@EntityRepository(Ibge)
export default class IbgeRepository extends Repository<Ibge> {}


