import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { AdminService } from '../service/modules/admin/service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  products: Array<Product>;
  selectedProduct: Product;
  action: string;

  constructor(private adminService: AdminService,private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   
  }
}

