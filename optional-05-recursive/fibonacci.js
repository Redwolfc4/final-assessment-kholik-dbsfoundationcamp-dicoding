function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const sequence = fibonacci(n - 1);
    const last = sequence[sequence.length - 1];
    const secondLast = sequence[sequence.length - 2];
    sequence.push(last + secondLast);
    return sequence;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
