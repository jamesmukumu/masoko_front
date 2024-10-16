import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

interface Categories {
  Tree_Name: string;
  identifierName?: string;
  Tree_Children?: Categories[];
}

interface FlatNode {
  expandable: boolean;
  Tree_Name: string;
  identifierName?: string;  // Add this to FlatNode for consistency
  level: number;
}

@Component({
  selector: 'nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavOptionsComponent {
  private _transformer = (node: Categories, level: number): FlatNode => {
    return {
      expandable: !!node.Tree_Children && node.Tree_Children.length > 0,
      Tree_Name: node.Tree_Name,
      identifierName: node.identifierName,  // Make sure to pass the identifierName here
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.Tree_Children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  categories: Categories[] = [
    {
      Tree_Name: "Smart Phones",
      Tree_Children: [
        { Tree_Name: "Tecno", identifierName: "tecno" },
        { Tree_Name: "Samsung", identifierName: "samsung" },
        { Tree_Name: "One Plus", identifierName: "oneplus" },
        { Tree_Name: "Google Pixel", identifierName: "google-pixel" },
        { Tree_Name: "Vivo", identifierName: "vivo" },
        { Tree_Name: "Xiaomi", identifierName: "xiaomi" },
        { Tree_Name: "Oppo", identifierName: "oppo" },
        { Tree_Name: "Itel", identifierName: "itel" },
        { Tree_Name: "Infinix", identifierName: "infinix" },
        { Tree_Name: "RealMe", identifierName: "realme" },
        { Tree_Name: "Nothing Phone", identifierName: "nothing-phone" }
      ]
    },
    {
      Tree_Name: "Apple Products",
      Tree_Children: [
        { Tree_Name: "Iphones", identifierName: "apple" },
        { Tree_Name: "MacBooks & Related apple products", identifierName: "apple-family" },
      ]
    },
    {
      Tree_Name: "Accessories",
      Tree_Children: [
        { Tree_Name: "Powerbanks", identifierName: "powerbanks" },
        { Tree_Name: "Mobile Cables", identifierName: "mobile-cables" },
        { Tree_Name: "Headphones and Earphones", identifierName: "earphones-and-headphones" },
        { Tree_Name: "Oraimo", identifierName: "oraimo" },
        { Tree_Name: "Sony", identifierName: "sony" },
        { Tree_Name: "Havit", identifierName: "havit" },
        { Tree_Name: "CCTV Cameras", identifierName: "surveillance-security-cameras" },
        { Tree_Name: "Smart Watches", identifierName: "smartwatches" },
        { Tree_Name: "Anker Products", identifierName: "anker" },
        { Tree_Name: "JBL Products", identifierName: "jbl" },
        { Tree_Name: "Fujifilm Cameras", identifierName: "fujifilm" },
        { Tree_Name: "Hama Products", identifierName: "hama" }
      ]
    },
    {
      Tree_Name: "Gaming Products",
      Tree_Children: [
        { Tree_Name: "Gaming Consoles", identifierName: "gaming-consoles" },
        { Tree_Name: "Games", identifierName: "games" },
        { Tree_Name: "Gaming Accessories", identifierName: "gaming-accessories" },
      ]
    },
  ];

  go(catalogPath: string) {
    console.log(catalogPath);
    this.router.navigate([`/catalog/${catalogPath}`]);
  }

  constructor(private router: Router) {
    this.dataSource.data = this.categories;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
