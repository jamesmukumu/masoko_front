import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Categories {
  Tree_Name: string;
  Tree_Children?: Categories[];
}

interface FlatNode {
  expandable: boolean;
  Tree_Name: string;
  level: number;
}

@Component({
  selector: 'nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavOptionsComponent {
  private _transformer = (node: Categories, level: number) => {
    return {
      expandable: !!node.Tree_Children && node.Tree_Children.length > 0,
      Tree_Name: node.Tree_Name,
      level: level,
    };
  };
  //

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
        { Tree_Name: "Tecno" },
        { Tree_Name: "Samsung" },
        { Tree_Name: "OnePlus" },
        { Tree_Name: "GooglePixels" },
        { Tree_Name: "Vivo" }
      ]
    },
    {
      Tree_Name: "Apple Products",
      Tree_Children: [
        { Tree_Name: "iPhone" },
        { Tree_Name: "MacBooks" },
        { Tree_Name: "EarBuds" }
      ]
    },
    {
      Tree_Name: "Other Accessories",
      Tree_Children: [
        { Tree_Name: "Chargers" },
        { Tree_Name: "Oraimo Products" },
        { Tree_Name: "smartwatches" },
        { Tree_Name: "Gaming consoles" }
      ]
    }
  ];

  constructor() {
    this.dataSource.data = this.categories;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
