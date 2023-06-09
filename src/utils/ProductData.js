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

    if (orderBy === "desc") {
      return [...QuickSort.sort(right, option, orderBy), pivot, ...QuickSort.sort(left, option, orderBy)];
    } else if (orderBy === "asc") {
      return [...QuickSort.sort(left, option, orderBy), pivot, ...QuickSort.sort(right, option, orderBy)];
    } else {
      throw new Error("Invalid orderBy option. Must be 'asc' or 'desc'.");
    }
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

 
  const estimatePrice = (POPrice, markup) => {
    return Math.floor(POPrice * (1 + markup))
  }


  export default function sortTree(option, orderBy) {
    const bst = new BinarySearchTree(option, orderBy);
    const markup = 0.12;

    bst.insert(1, "Pensil", "CV. Alat Tulis Indonesia", 2000, estimatePrice(2000, markup));
    bst.insert(2, "Penghapus", "PT. Stationery Utama", 1500, estimatePrice(1500, markup));
    bst.insert(3, "Pensil Warna", "CV. Pelangi Kreatif", 5000, estimatePrice(5000, markup));
    bst.insert(4, "Penggaris", "PT. Alat Ukur Presisi", 3000, estimatePrice(3000, markup));
    bst.insert(5, "Buku Catatan", "CV. Bina Grafika", 4000, estimatePrice(4000, markup));
    bst.insert(6, "Stapler", "PT. Mesin Jepit Prima", 8000, estimatePrice(8000, markup));
    bst.insert(7, "Amplop", "CV. Surat Menyurat Sejahtera", 3000, estimatePrice(3000, markup));
    bst.insert(8, "Spidol", "PT. Warna Ceria", 5000, estimatePrice(5000, markup));
    bst.insert(9, "Kuas Cat", "CV. Seni Rupa Makmur", 6000, estimatePrice(6000, markup));
    bst.insert(10, "Pisau Cutter", "PT. Alat Potong Terampil", 4000, estimatePrice(4000, markup));
    bst.insert(11, "Buku Agenda", "CV. Agendaku", 6000, estimatePrice(6000, markup));
    bst.insert(12, "Tipe-X", "PT. Kertas Ketik Kilat", 2000, estimatePrice(2000, markup));
    bst.insert(13, "Pita Perekat", "CV. Lembut Rapi", 2500, estimatePrice(2500, markup));
    bst.insert(14, "Kertas HVS", "PT. Kertas Putih Bersih", 7000, estimatePrice(7000, markup));
    bst.insert(15, "Kalkulator", "CV. Matematika Maju", 10000, estimatePrice(10000, markup));
    bst.insert(16, "Kertas Foto", "PT. Fotografi Berkualitas", 8000, estimatePrice(8000, markup));
    bst.insert(17, "Papan Tulis", "CV. Kreatif Kreasi", 15000, estimatePrice(15000, markup));
 
    

    return bst.getSortedArray();
  }

