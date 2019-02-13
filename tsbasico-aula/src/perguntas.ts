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
            
        );
    }

    public relatorio(){
        console.log('uhul');
        (answers : any) => {
            console.log(`\nOlá ${answers.nome}!\n`);
        }
    }

}