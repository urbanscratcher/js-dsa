# JavaScript Data Structures & Algorithms

---

## Big O

### Complexity

- Time Complexity⭐️
- Space Complexity (Memory Usage)

### Cases

- Ω : Best Case
- θ : Average Case
- O : Worst Case

### O(n)

- leanear. proportional

```
function logItems(n){
  for(let i = 0; i < n; i++){
    console.log(i)
  }
}

logItems(10);
```

### Drop Constants

- O(2n) -> drop constants -> O(n)

```
function logItems(n){
  for(let i = 0; i < n; i++){
    console.log(i)
  }

  for(let j = 0; j < n; j++){
    console.log(j)
  }
}

logItems(3);
```

### O(n<sup>2</sup>)

- O(n<sup>2</sup>)

```
function logItems(n){
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      console.log(i, j);
    }
  }
}

logItems(10);
```

- O(n<sup>3</sup>) -> O(n<sup>2</sup>)

```
function logItems(n){
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      for(let k = 0; k < n; k++){
        console.log(i, j, k);
      }
    }
  }
}

logItems(10);
```

### Drop Non-Dominants

- O(n<sup>2</sup> + n) -> O(n<sup>2</sup>)

```
function logItems(n){
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      console.log(k);
    }
  }

  for(let k = 0; k < n; k++){
    console.log(k);
  }
}

logItems(10);
```

### O(1)

- constant time
- the most efficient

```
function addItems(n){
  return n + n + n;
}

addItems(3);
```

### O(log n)

- see half of half of half...
- log<sub>2</sub>1,073,741,824 -> look up 31 times only

### O(n log n)

- Some Sorting Algorithms

### Different Terms for Input

- O(a + b)
- O(a \* b)

```
function logItems(a, b){
  for(let i = 0; i < a; i++){
    console.log(i);
  }

  for(let j = 0; j < b; j++){
    console.log(j);
  }
}
```

### Arrays

- push, pop : O(1)
  - X re-indexed
- shift, unshift : O(n)
  - re-indexed
- splice : O(n)
  - re-indexed
- find
  - search by value : O(n)
  - search by index : O(1)
- Arrays for mutation may be not good choice

### Wrap up

- O(n<sup>2</sup>) : Loop within a loop
- O(n) : Proportional
- O(log n) : Divide and Conquer
- O(1) : Constant

### CheatSheet for Big O

- https://www.bigocheatsheet.com/

---

## LinkedList

- no index
- not continuously exists
- node, head, tail(pointing null)
