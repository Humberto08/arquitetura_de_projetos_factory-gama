import { Servico } from './Servico';
import { FabricaGenerica } from "./FabricaGenerica";
import { ItemGenerico } from "./ItemGenerico";

export class FabricaDeServicos extends FabricaGenerica {
    public criarUmItem(): ItemGenerico {
        return new Servico();
    }
}