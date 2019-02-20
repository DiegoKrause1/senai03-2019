import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';

interface ICategoria {
    descricao: string;
}
interface IProdutos {
    descricao: string;
    produto: string;
}

export class prova {

    private categoria : Array<ICategoria> = [];
    private produtos : Array<IProdutos> = [];

    public getCategoria(){
        new VpHttp('http://5c6c7b99d51de300146f5b5d.mockapi.io/categoria').get().subscribe(
            (data : any) => {
                this.categoria = data;
                this.getProdutos();
            },
            (error : any) => {
                console.log('Não foi possível buscar dados na inicialização do programa');
            }
        );
    }

    public getProdutos(){
        new VpHttp('http://5c6c7b99d51de300146f5b5d.mockapi.io/produtos').get().subscribe(
            (data : any) => {
                this.produtos = data;
                this.infos();
            },
            (error : any) => {
                console.log('Não foi possível buscar dados na inicialização do programa');
            }
        );
    }

    public infos(){
        prompt(
            [
                {
                    name: 'opcoes',
                    type: 'list',
                    message: 'Escolha sua categoria',
                    choices: this.categoria.map(i => i.descricao),
                }
            ]
        ).then(
            (answers : any) => {
                this.produtos.forEach((Element : any ) => {
                    if(Element.descricao === answers.opcoes){
                    }
                })
            }
        )
    }
}