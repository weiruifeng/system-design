// 简单模拟 hash map


class Item {
  key: number;
  value: unknown;
  constructor(key: number, value: unknown) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  size: number;
  table: Item[][];

  constructor(size: number) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => Array(0));
  }

  _hashFunction(key: number) {
    return key % this.size;
  }

  get(key: number) {
    const index = this._hashFunction(key);
    for (let item of this.table[index]) {
      if (key === item.key) {
        return item.value;
      }
    }
    throw new Error('Key not found');
  }

  set(key: number, value: unknown) {
    const index = this._hashFunction(key);
    const item = new Item(key, value);
    this.table[index].push(item);
  }

  remove(key: number) {
    const index = this._hashFunction(key);
    const current = this.table[index];
    for (let i = 0; i < current.length; i++) {
      if (key === current[i].key) {
        current.splice(i, 1);
        return;
      }
    }
    throw new Error('Key not found');
  }
}

const hash = new HashTable(3);
hash.set(1, '1');
hash.set(2, '2');
hash.set(3, '3');
hash.set(4, '4');
hash.set(5, '5');
hash.set(6, '6');
console.log(hash.get(6));
hash.remove(6);
hash.get(6);