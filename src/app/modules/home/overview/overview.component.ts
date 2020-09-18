import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  bodyContent: any = 'Suspendisse augue quam, tincidunt nec augue a, congue volutpat libero. Nulla aliquam feugiat cursus. Aenean est odio, lobortis ullamcorper pulvinar ut, commodo ut nulla. Nulla suscipit est libero, pulvinar interdum odio ultricies vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sed libero sit amet diam ultricies consectetur sed nec eros.';
  @Input() step;
    steps(): void {
      this.step = 'step2';
      console.log(this.step);
    }
    getMsg(): string {
        return 'Overview';
    }
   constructor() { }

  ngOnInit(): void {
  }

}
