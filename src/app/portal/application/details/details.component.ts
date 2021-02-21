import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationDetailsComponent implements OnInit {
  public applicationId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.applicationId = this.route.snapshot.paramMap.get('id');
  }
}
