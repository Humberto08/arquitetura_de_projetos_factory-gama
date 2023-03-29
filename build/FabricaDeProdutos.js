"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeProdutos = void 0;
const Produto_1 = require("./Produto");
const FabricaGenerica_1 = require("./FabricaGenerica");
class FabricaDeProdutos extends FabricaGenerica_1.FabricaGenerica {
    criarUmItem() {
        return new Produto_1.Produto();
    }
}
exports.FabricaDeProdutos = FabricaDeProdutos;
