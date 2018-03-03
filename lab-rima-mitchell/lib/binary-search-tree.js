'use strict';

const TreeNode = require('./tree-node');

class BST{
  
  constructor(root = null){
    this.root = root;
  }
  
  insert(node){
    if(!(node instanceof TreeNode)){
      throw new Error('Input needs to be an instanceof TreeNode');
    }
    if(this.root === null){
      this.root = node;
    }else{
      this._insert(this.root, node);
    }
  }
  
  _insert(root, node){
    if(node.value < root.value){
      if(!root.left){
        root.left = node;
      }else{
        this._insert(root.left, node);
      }
    }else{
      if(!root.right){
        root.right = node;
      }else{
        this._insert(root.right, node);
      }
    }
  }
  
  find(value){
    return this._find(this.root, value);
  }
  
  _find(root, value){
    if(!root){
      return null;
    }else if(root.value === value){
      return root;
    }else if(root.value < value){
      return this._find(root.right, value);
    }else{
      return this._find(root.left, value);
    }
  }
  
  remove(value){
    let removedBST = new BST();
    this.preOrderRemoveNode(value, removedBST);
    this.root = removedBST.root;
    return this.root;
  }

  preOrderRemoveNode(value, removedBst) {
    if(!this.root){
      return null;
    }
    this._preOrderTraversal(this.root, value, removedBst);
  }

  _preOrderTraversal(root, value, removedBst) {
    if(root === null){
      return null;
    }

    if(root.value !== value){
      removedBst.insert(new TreeNode(root.value));
    }
    this._preOrderTraversal(root.left, value, removedBst);
    this._preOrderTraversal(root.right, value, removedBst);
  }

  isBalanced(){
    if(!this.root){
      return true;
    }
    return this._isBalanced(this.root);
  }

  _isBalanced(root){
    if(!root){
      return true;
    }

    let lH = this.height(root.left);
    let rH = this.height(root.right);

    if(Math.abs(lH - rH) <= 1 && this._isBalanced(root.left) && this._isBalanced(root.right)){
      return true;
    }
    return false;
  }

  height(root){
    if(!root){
      return 0;
    }

    return Math.max(this.height(root.left), this.height(root.right)) + 1;
  }
}

module.exports = BST;
