import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-group',
  templateUrl: './from-group.component.html',
  styleUrls: ['./from-group.component.css'],
})
export class FromGroupComponent implements OnInit {
  @Input() titleLabel: string = '';
  @Input() valueInput: string = '';
  @Input() nameInput: string = '';
  @Input() placeholderInput: string = '';

  constructor() {}

  ngOnInit(): void {}
}
