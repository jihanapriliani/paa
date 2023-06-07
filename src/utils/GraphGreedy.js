class Node {
    constructor(name) {
      this.name = name;
      this.visited = false;
    }
  }
  
  class Graph {
    constructor() {
      this.nodes = [];
      this.edges = {};
    }
  
    addNode(name) {
      const node = new Node(name);
      this.nodes.push(node);
      this.edges[node.name] = {};
    }
  
    addEdge(source, destination, distance) {
      this.edges[source][destination] = distance;
      this.edges[destination][source] = distance;
    }
  
    findShortestRoute(startNode, endNode) {
      const route = [];
      let currentNode = startNode;
  
      while (currentNode !== endNode) {
        route.push(currentNode.name);
        currentNode.visited = true;
  
        let nextNode = null;
        let shortestDistance = Infinity;
  
        for (const neighbor in this.edges[currentNode.name]) {
          const distance = this.edges[currentNode.name][neighbor];
  
          if (distance < shortestDistance && !this.nodes.find(node => node.name === neighbor).visited) {
            shortestDistance = distance;
            nextNode = this.nodes.find(node => node.name === neighbor);
          }
        }
  
        if (nextNode === null) {
          console.log("No route found.");
          return [];
        }
  
        currentNode = nextNode;
      }
  
      route.push(endNode.name);
      return route;
    }
  }
  
  // Contoh penggunaan
  const graph = new Graph();
  
  // Menambahkan node
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addNode("E");
  
  // Menambahkan edge antara node
  graph.addEdge("A", "B", 5);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "D", 4);
  graph.addEdge("C", "D", 3);
  graph.addEdge("C", "E", 6);
  graph.addEdge("D", "E", 1);
  
  // Menentukan rute pengiriman terpendek dari A ke E
  const startNode = graph.nodes.find(node => node.name === "A");
  const endNode = graph.nodes.find(node => node.name === "E");
  
  const shortestRoute = graph.findShortestRoute(startNode, endNode);
  console.log("Shortest Route:", shortestRoute.join(" -> "));
  