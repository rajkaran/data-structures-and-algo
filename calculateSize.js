// Example filesystem
const filesystem = {
  1: { type: "directory", name: "root", children: [2, 3] },
  2: { type: "directory", name: "dir", children: [4, 5] },
  4: { type: "file", name: "file1", size: 100 },
  5: { type: "file", name: "file2", size: 200 },
  3: { type: "file", name: "file3", size: 300 },
};

/*
What are the properties of ‘valid’ file system structure?
1. Always have a root (parent of all other entities)
2. Enttities should have only a single parent
3. Entities conform to the schema 


*/

let memoiz = {};

function whatIsSize(filesystem, id) {
  if (!memoiz[id]) {
    memoiz[id] = getMeSize(filesystem, id);
  }

  return memoiz[id];
}

function getMeSize(fs, id) {
  let size = 0;
  const obj = fs[id];

  if (obj["type"] === "file") {
    size = obj["size"];
  } else {
    if (memoiz[id]) {
      size += memoiz[id];
    } else {
      for (let i = 0; i < obj.children.length; i++) {
        size += getMeSize(fs, obj.children[i]);
      }
      memoiz[id] = size;
    }
  }

  return size;
}

/*

getMeSize(1)
  cache miss
  getMeSize(2)
    cache miss
    store 2
  store 1


*/

console.log(getMeSize(filesystem, 1));
console.log(getMeSize(filesystem, 1));
console.log(whatIsSize(filesystem, 1));
console.log(whatIsSize(filesystem, 4));

// Interview with Timothy went well and this time I maganed the time s well. At the end we did had sometime to have open ended conversation.
