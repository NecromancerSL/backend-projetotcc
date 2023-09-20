import { Produto } from '../../models/Produto';

export class deleteProductService {
    async execute(id: number) {
        const produto = await Produto.findByPk(id);

        if (!produto) {
            throw new Error('Produto não encontrado');
        }

        await produto.destroy();
    }
}