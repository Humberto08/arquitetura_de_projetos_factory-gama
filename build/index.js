"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FabricaDeServicos_1 = require("./FabricaDeServicos");
const FabricaDeProdutos_1 = require("./FabricaDeProdutos");
// instancio a minha fabrica
let fabricaP = new FabricaDeProdutos_1.FabricaDeProdutos();
let produto = fabricaP.criarUmItem();
produto.exibir();
let fabricaS = new FabricaDeServicos_1.FabricaDeServicos();
let servico = fabricaS.criarUmItem();
servico.exibir();
