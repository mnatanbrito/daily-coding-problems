import Queue from '../data_structures/queue'

function breadth_first_search(graph, startNode, endNode) {
  const visited = new Set();
  const queue = new Queue();

  const rootNeighbours = graph[startNode];

  // enqueue all root neighbours to start processing
  rootNeighbours.map((neighbour) => {
    queue.enqueue(neighbour);
    return neighbour;
  });

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (visited.has(current)) {
      continue;
    }

    visited.add(current);

    // if the current node is the end node STOP, else add all neighbours
    if (current === endNode) {
      return current;
    } else {
      graph[current]?.map((neighbour) => {
        queue.enqueue(neighbour);
        return neighbour;
      });
    }
  }

  return undefined;
}

const graph = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["g", "h"],
  d: ["f"],
  e: [],
  g: [],
  h: ["i"],
  i: [],
};

test("Breadth first search", () => {
  expect(breadth_first_search(graph, "a", "f")).toBe("f");
  expect(breadth_first_search(graph, "a", "g")).toBe("g");
  expect(breadth_first_search(graph, "a", "z")).toBeUndefined();
});
