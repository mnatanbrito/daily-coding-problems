export default function Queue() {
  const q = [];
  return {
    enqueue(item) {
      q.push(item);
    },
    dequeue() {
      return q.shift();
    },
    peek() {
      return q[0];
    },
    get length() {
      return q.length;
    },
    isEmpty() {
      return q.length === 0;
    },
  };
}