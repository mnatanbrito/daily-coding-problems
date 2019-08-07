import test from 'ava';

/**
 * This problem was asked by Google.
 * Given the root to a binary tree, implement serialize(root),
 * which serializes the tree into a string, and deserialize(s),
 * which deserializes the string back into the tree.
 */
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const serialize = node => {
  if (!node) return '';

  if (typeof node === 'string') return node;

  if (!node.left && !node.right) {
    return `${node.val}`;
  }

  return `(${node.val},${serialize(node.left)},${serialize(node.right)})`;
};

const deserialize = str => {
  if (!str) return null;

  const nodeParts = removeTrailingParenthesis(str).split(/,(?![^(]*\))/);

  if (nodeParts.length === 1) {
    return new Node(nodeParts[0]);
  }

  return new Node(
    nodeParts[0],
    deserialize(nodeParts[1]),
    deserialize(nodeParts[2])
  );
};
const removeTrailingParenthesis = str => {
  return str.replace(/(^\(|\)$)/gi, '');
};

test('Does it serialize/deserialize  correctly?', t => {
  t.is(
    serialize(
      new Node(
        'root',
        new Node('left', new Node('left.left'), null),
        new Node('right')
      )
    ),
    '(root,(left,left.left,),right)',
    'Didnt serialize properly'
  );

  t.is(
    serialize(
      new Node(
        'root',
        new Node('left', new Node('left.left'), 'left.right'),
        new Node('right')
      )
    ),
    '(root,(left,left.left,left.right),right)',
    'Didnt serialize properly'
  );

  t.is(serialize(null), '', 'Didnt serialize properly');

  t.is(
    serialize(
      new Node(
        'root',
        new Node('left', null, 'left.right'),
        new Node(
          'right',
          'right.left',
          new Node('right.left.root', 'right.left.left', 'right.left.right')
        )
      )
    ),
    '(root,(left,,left.right),(right,right.left,(right.left.root,right.left.left,right.left.right)))',
    'Didnt serialize properly'
  );

  t.is(deserialize('(root,left,right)').val, 'root');
  t.is(deserialize('(root,left,right)').left.val, 'left');
  t.is(deserialize('(root,left,right)').right.val, 'right');

  t.is(
    deserialize('(root,left,(right,right.left,right.right))').right.left.val,
    'right.left'
  );

  t.is(
    deserialize('(root,left,(right,right.left,right.right))').right.right.val,
    'right.right'
  );
});
