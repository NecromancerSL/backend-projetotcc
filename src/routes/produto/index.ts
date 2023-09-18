import * as ProdutoController from '../../controllers/produtoController';
import { Router } from 'express';
import bodyParser from 'body-parser';


const produtoRoutes = Router();

produtoRoutes.use(bodyParser.json());

produtoRoutes.post('/criarproduto', ProdutoController.cadastrarProduto);
produtoRoutes.get('/listarprodutos', ProdutoController.listarProdutos);
produtoRoutes.post('/atualizarproduto/:id', ProdutoController.atualizarProduto);
produtoRoutes.get('/listarproduto/:id', ProdutoController.listarProduto);
produtoRoutes.delete('/deletarproduto/:id', ProdutoController.deletarProduto);


export default produtoRoutes;