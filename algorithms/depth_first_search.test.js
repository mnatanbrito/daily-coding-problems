function depth_first_search(graph, node, visited) {
  const localVisited = visited || new Set();
  const nodeNeighbours = graph[node];

  if (nodeNeighbours.length === 0) {
    return `${node}`;
  }

  let str = node;

  for (const neighbour of nodeNeighbours) {
    if (!localVisited.has(neighbour)) {
      str += `${depth_first_search(graph, neighbour, localVisited)}`;

      localVisited.add(node);
    }
  }

  return str;
}

test("Depth first search", () => {
  expect(
    depth_first_search(
      {
        a: ["b", "c"],
        b: ["d", "e"],
        c: ["g", "h"],
        d: ["f"],
        e: [],
        f: [],
        g: [],
        h: ["i"],
        i: [],
      },
      "a"
    )
  ).toEqual("abdfecghi");

  expect(
    depth_first_search(
      {
        a: ["b", "c"],
        b: ["d", "e"],
        c: ["g", "h"],
        d: ["f"],
        e: [],
        f: ["j"],
        g: [],
        h: ["i"],
        i: [],
        j: ["k", "l"],
        k: [],
        l: [],
      },
      "a"
    )
  ).toEqual("abdfjklecghi");
});
