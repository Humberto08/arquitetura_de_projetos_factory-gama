import { Produto } from './Produto';
import { FabricaGenerica } from "./FabricaGenerica";


export class FabricaDeProdutos extends FabricaGenerica {
    public criarUmItem(): Produto {
        return new Produto();
    }
}