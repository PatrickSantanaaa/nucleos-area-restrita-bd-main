import { Component } from '@angular/core';

@Component({
  selector: 'app-documentos-entidade',
  templateUrl: './documentos-entidade.component.html',
  styleUrls: ['./documentos-entidade.component.scss']
})
export class DocumentosEntidadeComponent {

  products: any[] = [
    { codigo: 'doc1', descricao: 'Documento 1', categoria: 'Categoria 1', url: 'assets/docs/doc1.pdf' },
    { codigo: 'doc2', descricao: 'Documento 2', categoria: 'Categoria 2', url: 'assets/docs/doc2.pdf' },
    { codigo: 'doc3', descricao: 'Documento 3', categoria: 'Categoria 3', url: 'assets/docs/doc3.pdf' }
    // Adicione outros documentos conforme necessário
  ];
  selectedProducts: any[] = []; // Lista de documentos selecionados

  // Função para fazer o download dos documentos selecionados
  downloadSelectedItems() {
    // Verifique se há itens selecionados
    if (this.selectedProducts.length > 0) {
      // Crie um array de URLs dos documentos selecionados
      const downloadUrls = this.selectedProducts.map((product) => product.url);

      // Use uma função para fazer o download dos documentos, por exemplo:
      this.downloadDocuments(downloadUrls);
    } else {
      // Caso nenhum documento esteja selecionado, exiba uma mensagem de erro ou ação apropriada.
      console.log('Nenhum documento selecionado para download.');
    }
  }

  // Função para fazer o download dos documentos
  downloadDocuments(urls: string[]) {
    // Implemente a lógica de download aqui, por exemplo:
    for (const url of urls) {
      // Crie links de download para cada documento
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank'; // Abre em uma nova janela
      link.download = url.substring(url.lastIndexOf('/') + 1); // Define o nome do arquivo
      link.click();
    }
  }
}
