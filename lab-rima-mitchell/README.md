# Lab 35 ~ Binary Tree/Binary Search Tree

**Authors**:
* Rima
* Mitchell

**Version**: 1.0.0

***
# Overview
This is an exploration into the `pre/post/in-order` traversal methods of Binary Tree data structures. Also included is an implementation of Binary Search Tree data structures: inserting, finding, removing nodes as well as determining if the tree is balanced (i.e. one or less difference in depth between the two branches).

**Example of _imbalanced_ Binary Search Tree:**
```
          10
         /  \
        7    13
       /     
      5
     / \
    4   6
```
**Example of _balanced_ Binary Search Tree:**
```
          10        ||        10
         /  \       ||       /  \
        7    13     ||      7    13
       / \          ||     / \     \
      5   8         ||    5   8     15
```

***
# Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

***
# Description
The application consists of three primary modules, all located in the `lib/` directory: `tree-node`, `binary-tree`, and `binary-search-tree`. The latter modules utilize the former to construct the individual nodes within the trees.

## Tree Node
Exports a single class, `TreeNode`, for potential use in the tree modules. Its constructor takes a required `value` argument, as well as two optional arguments `left` and `right`. The optional arguments default to `null` if not provided. It assigns these arguments to the specific `TreeNode` instance.

## Binary Tree
Exports a single class, `BinaryTree`, and various traversal methods. Its constructor takes an optional `root` argument to serve as a reference point to the entire tree, that will default to `null` if not provided. It has 6 methods exported with the class that traverse the tree in various orders. These traversals move through the tree as follows:

**[click to expand below]**

<details>
  <summary>In-Order ~ left => root => right</summary>

  * **`inOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_inOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_inOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It calls itself recursively and passes `(root.left, res)` as arguments, then pushes `root.value` to res, and then calls itself recursively and passes `(root.right, res)` as arguments. This traverses the tree and tracks values in the order specified above. 
</details>

<details>
  <summary>Pre-Order ~ root => left => right</summary>

  * **`preOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_preOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_preOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It pushes `root.value` to res, then calls itself recursively and passes `(root.left, res)` as arguments, and then calls itself recursively and passes `(root.right, res)` as arguments. This traverses the tree and tracks values in the order specified above. 
</details>

<details>
  <summary>Post-Order ~ left => right => root</summary>
  
  * **`postOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_postOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_postOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It calls itself recursively and passes `(root.left, res)` as arguments, then calls itself recursively and passes `(root.right, res)` as arguments, and then pushes `root.value` to res. This traverses the tree and tracks values in the order specified above.
</details>

**<details>**
  <summary>All Methods</summary>

  * **`inOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_inOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_inOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It calls itself recursively and passes `(root.left, res)` as arguments, then pushes `root.value` to res, and then calls itself recursively and passes `(root.right, res)` as arguments. This traverses the tree and tracks values in the order specified above. 
  * **`preOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_preOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_preOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It pushes `root.value` to res, then calls itself recursively and passes `(root.left, res)` as arguments, and then calls itself recursively and passes `(root.right, res)` as arguments. This traverses the tree and tracks values in the order specified above. 
  * **`postOrderTraversal()`** Expects no arguments and checks for whether there is a root to the tree or not. If not, the function will return `null`. It declares a variable `resIn` to hold a record of the values in the order they were visited while traversing, to provide similar functionality as console logging each value. It calls `_postOrderTraversal(this.root, resIn)` passing it for use in the function. The function then returns the value of `resIn` as output.
  * **`_postOrderTraversal(root, res)`** Expects two arguments: `root` that represents the root of the tree to traverse, and `res` which represents an array to track the values of the tree while traversing in the order they were visited. This function operates recursively, with the breaking condition of `root` being `null`, which returns `null`. It calls itself recursively and passes `(root.left, res)` as arguments, then calls itself recursively and passes `(root.right, res)` as arguments, and then pushes `root.value` to res. This traverses the tree and tracks values in the order specified above.
</details>

## Binary Search Tree
This module requires in the `TreeNode` module, and exports a single class `BST`. Its constructor has an optional `root` argument which will default to null if not provided, and assigns that value to the specific `BST` instance. It has insertion, find, removal functionality, as well as balance checking for the overall tree and various subtrees.

**[click to expand below]**

<details>
  <summary>Insert</summary>

  * **`insert(node)`** Expects a single `node` argument. If that node is not an instance of the `TreeNode` class, it throws an error explaining that to the user. It then checks whether the root is `null`, and assigns the value of the node argument to `this.root`. Otherwise, it calls `this._insert(this.root, node)` with the specified arguments.
  * **`_insert(root, node)`** Expects `root` and `node` arguments. If the value of the node is less than the value of the root, it will assign the value of the passed node to `root.left` if there is not already a value there, otherwise it will recursively call `this._insert(root.left, node)`. If the value of the node is not less than the value of the root, it will assign the value of the node to `root.right` if there isn't already a value, otherwise it will recursively call `this._insert(root.right, node)`.
</details>

<details>
  <summary>Find</summary>

  * **`find(value)`** Expects a single `value` argument. It returns the output of calling `this._find(this.root, value)`.
  * **`_find(root, value)`** Expects `root` and `value` arguments. If the root doesn't exist, it will return null as the breaking condition. If `root.value` is equal to the passed value, it will return the root. If `root.value` is less than the passed value, it will return the output of calling `this._find(root.right, value)`. If none of the above conditions are met, it will return the output of calling `this._find(root.left, value)`.
</details>

<details>
  <summary>Remove</summary>

  * **`remove(value)`** Expects a single `value` argument. It assigns the value of an instantiated `BST` to the variable `removedBST`. It then calls `this.preOrderRemoveNode(value, removedBST)`, assigns the value of `removedBST.root` to `this.root`, and then returns `this.root` as the output of the function.
  * **`preOrderRemoveNode(value, removedBst)`** Expects `value` and `removedBst` arguments. It checks whether `this.root` exists, and returns null if it doesn't. It then calls `this._preOrderTraversal(this.root, value, removedBst)`.
  * **`preOrderTraversal(root, value, removedBst)`** Expects `root`, `value`, and `removedBst` arguments. It checks whether `root === null` as its breaking condition. It also checks if the the passed `root`'s value is equal to the passed `value` argument, and if it isn't, inserts a new `TreeNode(root.value)` instance to the `removedBst` argument. It then recursively calls `this._preOrderTraversal(root.left, value, removedBst)`, followed by `this._preOrderTraversal(root.right, value, removedBst)`.
</details>

<details>
  <summary>Balance Checking</summary>

  * **`isBalanced()`** Expects no arguments and checks whether `root` exists and if not, returns the boolean `true` as the functions ouput. Otherwise, it returns the value of calling `this._isBalanced(this.root)`.
  * **`_isBalanced(root)`** Expects a single `root` argument and checks whether `root` exists and if not, returns the boolean `true`. It assigns the value of `this.height(root.left)` to the variable `lH` (left-height) and assigns the value of `this.height(root.right)` to the variable `rH` (right-height). It then checks if the absolute value of `lH - rH` is less than or equal to one, whether the output of the recursive call of `this._isbalanced(root.left)` and the output of the recursive call `this._isBalanced(root.right)` all equate to truthy, and if so returns the boolean `true`. If all three conditions are not met, it returns `false`.
  * **`height(root)`** Expects a single `root` argument, and if there is none, returns `0` as its output which is also its breaking condition. Otherwise, it returns the value of recursively calling `Math.max(this.height(root.left), this.height(root.right)) + 1`.
</details>

**<details>**
  <summary>All Methods</summary>

  * **`insert(node)`** Expects a single `node` argument. If that node is not an instance of the `TreeNode` class, it throws an error explaining that to the user. It then checks whether the root is `null`, and assigns the value of the node argument to `this.root`. Otherwise, it calls `this._insert(this.root, node)` with the specified arguments.
  * **`_insert(root, node)`** Expects `root` and `node` arguments. If the value of the node is less than the value of the root, it will assign the value of the passed node to `root.left` if there is not already a value there, otherwise it will recursively call `this._insert(root.left, node)`. If the value of the node is not less than the value of the root, it will assign the value of the node to `root.right` if there isn't already a value, otherwise it will recursively call `this._insert(root.right, node)`.
  * **`find(value)`** Expects a single `value` argument. It returns the output of calling `this._find(this.root, value)`.
  * **`_find(root, value)`** Expects `root` and `value` arguments. If the root doesn't exist, it will return null as the breaking condition. If `root.value` is equal to the passed value, it will return the root. If `root.value` is less than the passed value, it will return the output of calling `this._find(root.right, value)`. If none of the above conditions are met, it will return the output of calling `this._find(root.left, value)`.
  * **`remove(value)`** Expects a single `value` argument. It assigns the value of an instantiated `BST` to the variable `removedBST`. It then calls `this.preOrderRemoveNode(value, removedBST)`, assigns the value of `removedBST.root` to `this.root`, and then returns `this.root` as the output of the function.
  * **`preOrderRemoveNode(value, removedBst)`** Expects `value` and `removedBst` arguments. It checks whether `this.root` exists, and returns null if it doesn't. It then calls `this._preOrderTraversal(this.root, value, removedBst)`.
  * **`preOrderTraversal(root, value, removedBst)`** Expects `root`, `value`, and `removedBst` arguments. It checks whether `root === null` as its breaking condition. It also checks if the the passed `root`'s value is equal to the passed `value` argument, and if it isn't, inserts a new `TreeNode(root.value)` instance to the `removedBst` argument. It then recursively calls `this._preOrderTraversal(root.left, value, removedBst)`, followed by `this._preOrderTraversal(root.right, value, removedBst)`.
  * **`isBalanced()`** Expects no arguments and checks whether `root` exists and if not, returns the boolean `true` as the functions ouput. Otherwise, it returns the value of calling `this._isBalanced(this.root)`.
  * **`_isBalanced(root)`** Expects a single `root` argument and checks whether `root` exists and if not, returns the boolean `true`. It assigns the value of `this.height(root.left)` to the variable `lH` (left-height) and assigns the value of `this.height(root.right)` to the variable `rH` (right-height). It then checks if the absolute value of `lH - rH` is less than or equal to one, whether the output of the recursive call of `this._isbalanced(root.left)` and the output of the recursive call `this._isBalanced(root.right)` all equate to truthy, and if so returns the boolean `true`. If all three conditions are not met, it returns `false`.
  * **`height(root)`** Expects a single `root` argument, and if there is none, returns `0` as its output which is also its breaking condition. Otherwise, it returns the value of recursively calling `Math.max(this.height(root.left), this.height(root.right)) + 1`.
</details>

***
# Credits 
**<details>**
  <summary>Tools and Libraries</summary>

  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
</details>

