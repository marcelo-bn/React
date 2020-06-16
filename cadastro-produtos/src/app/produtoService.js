const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors){
    this.errors = errors
}

export default class ProdutoService {
    
    validar = (produto) => {
        const errors = []

        if(!produto.nome){
            errors.push('O campo NOME não foi preenchido!')
        }
        if(!produto.sku){
            errors.push('O campo SKU não foi preenchido!')
        }
        if(!produto.preco || produto.preco <=0){
            errors.push('O campo PREÇO deve ser maior que ZERO!')
        }
        if(!produto.fornecedor){
            errors.push('O FORNECEDOR nome não foi preenchido!')
        }
        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }

    }

    salvar = (produto) => {

        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));


    }
}