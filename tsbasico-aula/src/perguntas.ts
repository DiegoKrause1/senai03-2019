import {prompt} from 'inquirer';

export class Perguntas {

    private dadosDaEntrega : any = null;
    private dadosPedido : any = null; 

    public infoPedido(){
        prompt(
            [
                {
                    name: 'name',
                    type: 'input',
                    message: 'Qual o seu nome',
                },
                {
                    name: 'tel',
                    type: 'input',
                    message: 'Número de telefone',
                },
                {
                    name: 'tam',
                    type: 'list',
                    message: 'Tamanho da pizza',
                    choices: ['Pequena','Média','Grande'],
                },
                {
                    name: 'sabor',
                    type: 'list',
                    message: 'Escolha um sabor',
                    choices: ['Americana','Calabresa','Coração','Palmito','Camarão'],
                },
                {
                    name: 'quantidade',
                    type: 'input',
                    message: 'Quantas unidades',
                },
                {
                    name: 'entrega',
                    type: 'list',
                    message: 'Entrega?',
                    choices: ['Sim','Não'],
                }
            ]
        ).then(
                (answers : any) => {
                    this.dadosPedido = answers;

                    if (this.dadosPedido.entrega === 'Sim'){
                        this.entrega();
                    } else {
                        this.relatorio();
                    }
                }
        );
    }

    public entrega(){
        prompt(
            [
                {
                    name: 'cidade',
                    type: 'input',
                    message: 'Digite sua cidade',
                },
                {
                    name: 'bairro',
                    type: 'input',
                    message: 'Digite seu bairro',
                },
                {
                    name: 'rua',
                    type: 'input',
                    message: 'Digite sua rua',
                },
                {
                    name: 'numero',
                    type: 'input',
                    message: 'Digite seu número',
                },
                {
                    name: 'complemento',
                    type: 'input',
                    message: 'Digite o complemento',
                }
            ]
        ).then(
            (answers : any) => {
                this.dadosDaEntrega = answers;
                this.relatorio();
            }
        );
    }

    public relatorio(){
        console.log('---------------------------------');
        console.log(' Relatório do Pedido:\n');
        console.log(` Nome: ${this.dadosPedido.name}`);
        console.log(` Telefone: ${this.dadosPedido.tel}`);
        console.log(` Tamanho: ${this.dadosPedido.tam}`);
        console.log(` Sabor: ${this.dadosPedido.sabor}`);
        console.log(` Quantidade: ${this.dadosPedido.quantidade}`);

        if (this.dadosDaEntrega === null) {
            console.log('---------------------------------');
            console.log(' O cliente irá buscar a pizza');
            console.log(' Obrigado pela preferência');
            console.log('---------------------------------');
        }else {
            console.log('---------------------------------');
            console.log(' Relarório da Entrega\n');
            console.log(` Cidade: ${this.dadosDaEntrega.cidade}`);
            console.log(` Bairro: ${this.dadosDaEntrega.bairro}`);
            console.log(` Rua: ${this.dadosDaEntrega.rua}`);
            console.log(` Número: ${this.dadosDaEntrega.numero}`);
            console.log(` Complemento: ${this.dadosDaEntrega.complemento}`);
            console.log(' Obrigado pela preferência');
            console.log('---------------------------------');
        }
    }

}