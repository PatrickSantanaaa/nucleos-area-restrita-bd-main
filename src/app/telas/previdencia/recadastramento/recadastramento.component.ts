import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { Product, RecadastramentoService } from './recadastramento.service';


@Component({
  selector: 'app-recadastramento',
  templateUrl: './recadastramento.component.html',
  styleUrls: ['./recadastramento.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class RecadastramentoComponent implements OnInit {

  @ViewChild('dt') dt: Table | undefined;
  dadosGerais!: DadosGerais;

  constructor(private tokenService: TokenService,
  private productService: RecadastramentoService,
  private messageService: MessageService,
   private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.dadosGerais = this.tokenService.recuperaDadosGerais();

    this.productService.getProductsMini().then((data) => {
    this.products = data;
  });

  this.statuses = [
      { label: '', value: '' },
      { label: '', value: '' },
      { label: '', value: '' }
  ];
}

deleteSelectedProducts() {
  // Verifica se há produtos selecionados
  if (this.selectedProducts && this.selectedProducts.length > 0) {
      // Exclui os produtos selecionados sem confirmação
      this.products = this.products.filter((val) => !this.selectedProducts!.includes(val));
      this.selectedProducts = null;
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
  } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'No products selected', life: 3000 });
  }
}

  onInputChange(event: any): void {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.dt?.filterGlobal(inputValue, 'contains');
  }

    products!: Product[];
    statuses!: SelectItem[];
    selectedProducts!: Product[] | null;
    clonedProducts: { [s: string]: Product } = {};


    onRowEditInit(product: Product) {
        this.clonedProducts[product.id as string] = { ...product };
    }

    onRowEditSave(product: Product) {
        // if (product.price > 0) {
        //     delete this.clonedProducts[product.id as number];
        //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
        // } else {
        //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
        // }
    }

    onRowEditCancel(product: Product, index: number) {
        this.products[index] = this.clonedProducts[product.id as string];
        delete this.clonedProducts[product.id as string];
    }
}
