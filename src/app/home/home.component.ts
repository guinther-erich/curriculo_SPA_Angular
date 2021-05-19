import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { formacao } from '../model/curriculo';
import { cursos } from '../model/curriculo';
import { bootcamps } from '../model/curriculo'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela0:  boolean = false;
  exibeTabela1:  boolean = false;
  exibeTabela2:  boolean = false;

  listaFormacao: formacao[] = [
    { nome: 'Graduação - Direito', ano: 2019, instituicao: 'Centro Universitário UniProjeção' },
    { nome: 'Pós-Graduação - Conectividade e Segurança de Negócios', ano: 2021, instituicao: 'Faculdade Descomplica' },
    { nome: 'MBA - Segurança da Informação', ano: 2021, instituicao: 'Faculdade Descomplica' }
  ];

  listaCursos: cursos[] = [
    { nome: 'Bootstrap 5', ano: 2021, instituicao: 'Udemy' },
    { nome: 'Web Design Completo', ano: 2021, instituicao: 'Origamid' },
    { nome: 'CSS Completo', ano: 2021, instituicao: 'Origamid' },
    { nome: 'JavaScript', ano: 2021, instituicao: 'Origamid' },
    { nome: 'React', ano: 2021, instituicao: 'Origamid' },
    { nome: 'Vue.js', ano: 2021, instituicao: 'Origamid' },
    { nome: 'UX/UI Design', ano: 2021, instituicao: 'Origamid' },
    { nome: 'HTML 5', ano: 2021, instituicao: 'Origamid' }
  ];

  listaBootcamps: bootcamps[] = [
    { nome: 'Avanade - Code Anywhere', ano: 2021, instituicao: 'Digital Innovation One' },
    { nome: 'GFT - Start_UNI #1', ano: 2021, instituicao: 'Digital Innovation One' },
    { nome: 'everis - Fullstack Developer', ano: 2020, instituicao: 'Digital Innovation One' },
    { nome: 'Carrefour - Backend Developer', ano: 2020, instituicao: 'Digital Innovation One' },
    { nome: 'Banco Carrefour - Fullstack Developer', ano: 2020, instituicao: 'Digital Innovation One' },
    { nome: 'Avanade - Decola Dev 2021', ano: 2020, instituicao: 'Digital Innovation One' },
    { nome: 'Node.js Web Developer', ano: 2020, instituicao: 'Digital Innovation One' },
    { nome: 'SPTech - Desenvolvimento Frontend', ano: 2020, instituicao: 'Digital Innovation One' },
    { nome: 'SPTech - Desenvolvimento Fullstack', ano: 2020, instituicao: 'Digital Innovation One' },
    { nome: 'Java Developer', ano: 2020, instituicao: 'Digital Innovation One' },
    { nome: 'JavaScript Game Developer', ano: 2020, instituicao: 'Digital Innovation One' }
  ];

  displayedColumns: string[] = ['Nome', 'Ano', 'Instituição'];

  ngOnInit(): void {
    this.valor = 100;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 100;
  }

  exibirTabela0(){
    this.exibeTabela0 = true;
  }

  exibirTabela1(){
    this.exibeTabela1 = true;
  }

  exibirTabela2(){
    this.exibeTabela2 = true;
  }

}
