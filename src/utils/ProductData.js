  class QuickSort {
    static sort(arr, option, orderBy) {
      if (arr.length <= 1) {
        return arr;
      }

      const pivot = arr[arr.length - 1];
      const left = [];
      const right = [];

      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][option] < pivot[option]) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }

      if(orderBy == "desc") {
        return [...QuickSort.sort(right, option), pivot, ...QuickSort.sort(left, option)];
      } 
      return [...QuickSort.sort(left, option), pivot, ...QuickSort.sort(right, option)];

    }
  }

  class Node {
    constructor(id, nama_produk, supplier, harga_po, harga_jual) {
      this.id = id;
      this.nama_produk = nama_produk;
      this.supplier = supplier;
      this.harga_po = harga_po;
      this.harga_jual = harga_jual;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor(option, orderBy) {
      this.root = null;
      this.option = option;
      this.orderBy = orderBy;
    }

    insert(id, nama_produk, supplier, harga_po, harga_jual) {
      const newNode = new Node(id, nama_produk, supplier, harga_po, harga_jual);

      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(node, newNode) {
      if (newNode.id < node.id) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    search(id) {
      return this.searchNode(this.root, id);
    }

    searchNode(node, id) {
      if (node === null) {
        return null;
      } else if (id === node.id) {
        return node;
      } else if (id < node.id) {
        return this.searchNode(node.left, id);
      } else {
        return this.searchNode(node.right, id);
      }
    }

    printInOrder() {
      this.printInOrderNode(this.root);
    }

    printInOrderNode(node) {
      if (node !== null) {
        this.printInOrderNode(node.left);
        console.log("ID:", node.id);
        console.log("Nama Produk:", node.nama_produk);
        console.log("Supplier:", node.supplier);
        console.log("Harga PO:", node.harga_po);
        console.log("Harga Jual:", node.harga_jual);
        console.log("--------------------");
        this.printInOrderNode(node.right);
      }
    }

    getSortedArray() {
      const arr = [];
      this.getInOrderArray(this.root, arr);
      return QuickSort.sort(arr, this.option, this.orderBy);
    }

    getInOrderArray(node, arr) {
      if (node !== null) {
        this.getInOrderArray(node.left, arr);
        arr.push(node);
        this.getInOrderArray(node.right, arr);
      }
    }
  }

  export default function sortTree(option, orderBy) {
    const bst = new BinarySearchTree(option, orderBy);

    bst.insert(1, "Produk A", "Supplier A", 200, 300);
    bst.insert(2, "Produk B", "Supplier B", 150, 250);
    bst.insert(3, "Produk C", "Supplier C", 180, 280);
    bst.insert(4, "Produk D", "Supplier D", 220, 350);
    bst.insert(5, "Produk E", "Supplier A", 190, 320);
    bst.insert(6, "Produk F", "Supplier B", 160, 270);
    bst.insert(7, "Produk G", "Supplier C", 210, 310);
    bst.insert(8, "Produk H", "Supplier D", 240, 380);
    bst.insert(9, "Produk I", "Supplier A", 205, 290);
    bst.insert(10, "Produk J", "Supplier B", 170, 260);
    bst.insert(11, "Produk K", "Supplier C", 195, 330);
    bst.insert(12, "Produk L", "Supplier D", 230, 360);
    bst.insert(13, "Produk M", "Supplier A", 215, 295);
    bst.insert(14, "Produk N", "Supplier B", 185, 245);
    bst.insert(15, "Produk O", "Supplier C", 225, 315);
    bst.insert(16, "Produk P", "Supplier D", 260, 370);
    bst.insert(17, "Produk Q", "Supplier A", 250, 310);
    bst.insert(18, "Produk R", "Supplier B", 220, 290);
    bst.insert(19, "Produk S", "Supplier C", 270, 350);
    bst.insert(20, "Produk T", "Supplier D", 290, 400);

    return bst.getSortedArray();
  }

