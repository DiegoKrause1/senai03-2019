import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';

interface ISabores {
    descricao: string;
    disponivel: Boolean;
}
interface ITamanhos {
    descricao: string;
}
interface ICidades {
    descricao: string;
}
interface IBairros {
    descricao: string;
}

export class Perguntas {

    private dadosDaEntrega : any = null;
    private dadosPedido : any = null; 
    private sabores : Array<ISabores> = [];
    private tamanhos : Array<ITamanhos> = [];
    private cidades : Array<ICidades> = [];
    private bairros : Array<IBairros> = [];
    private validaSabor : Array<ISabores> = [];

    public delivery() {
        this.getSabores();
    }

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
                    choices: this.tamanhos.map(i => i.descricao),
                },
                {
                    name: 'sabor',
                    type: 'list',
                    message: 'Escolha um sabor',
                    choices: this.sabores.map(i => i.descricao),
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
                    type: 'list',
                    message: 'Escolha sua cidade',
                    choices: this.cidades.map(i => i.descricao),
                },
                {
                    name: 'bairro',
                    type: 'list',
                    message: 'Escolha seu bairro',
                    choices: this.bairros.map(i => i.descricao),
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
        console.log('--------------------------------');
        console.log(' Relatório do Pedido:\n');
        console.log(` Nome: ${this.dadosPedido.name}`);
        console.log(` Telefone: ${this.dadosPedido.tel}`);
        console.log(` Tamanho: ${this.dadosPedido.tam}`);
        console.log(` Sabor: ${this.dadosPedido.sabor}`);
        console.log(` Quantidade: ${this.dadosPedido.quantidade}`);

        if (this.dadosDaEntrega === null) {
            console.log('--------------------------------');
            console.log(' O cliente irá buscar a pizza');
            console.log(' Obrigado pela preferência');
            console.log('--------------------------------');
        }else {
            console.log('--------------------------------');
            console.log(' Relarório da Entrega\n');
            console.log(` Cidade: ${this.dadosDaEntrega.cidade}`);
            console.log(` Bairro: ${this.dadosDaEntrega.bairro}`);
            console.log(` Rua: ${this.dadosDaEntrega.rua}`);
            console.log(` Número: ${this.dadosDaEntrega.numero}`);
            console.log(` Complemento: ${this.dadosDaEntrega.complemento}`);
            console.log(' Obrigado pela preferência');
            console.log('--------------------------------');
        }
    }

    public getSabores(){
        new VpHttp('http://5c6b26f7e85ff400140854eb.mockapi.io/sabores').get().subscribe(
            (data : any) => {
                this.validaSabor = data;
                this.validaSabor.map(i =>{
                    if(i.disponivel){
                        this.sabores.push(i);
                    }
                });
                this.getTamanhos();
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

    public getTamanhos(){
        new VpHttp('http://5c6b26f7e85ff400140854eb.mockapi.io/tamanhos').get().subscribe(
            (data : any) => {
                this.tamanhos = data;
                this.getCidades();
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

    public getCidades(){
        new VpHttp('http://5c6b26f7e85ff400140854eb.mockapi.io/cidades').get().subscribe(
            (data : any) => {
                this.cidades = data;
                this.getBairros();
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

    public getBairros(){
        new VpHttp('http://5c6b26f7e85ff400140854eb.mockapi.io/bairros').get().subscribe(
            (data : any) => {
                this.bairros = data;
                this.infoPedido();
            },
            (error : any) => {
                console.log(error);
            }
        );
    }
}