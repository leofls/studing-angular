import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal: string = "http://google.com"
  cursos: string[] = ['PHP', 'JAVA', "Python", "Angular"]

  constructor() { }

  ngOnInit(): void {
  }

}
