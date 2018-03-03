'use strict';

const TreeNode = require('./tree-node');

class BST{
  
  constructor(root = null){
    this.root = root;
    this.parent = null;
    this.isLeft = false;
    this.isRight = false;
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
      this.parent = root;
      this.isLeft = false;
      this.isRight = true;
      return this._find(root.right, value);
    }else{
      this.parent = root;
      this.isLeft = true;
      this.isRight = false;
      return this._find(root.left, value);
    }
  }
  
  _findMinInRight(startNode){
    let parent = startNode;
    let min = startNode.right;

    while(min.left){
      parent = min;
      min = min.left;
    }
    
    return {parentNode: parent, minNode: min};
  }

  remove(value){
    return this._remove(this.root, value);
  }
  
  _remove(root, value){
    let nodeToRemove = this.find(value);
    if(nodeToRemove === false){
      return null;
    }else{
      if(nodeToRemove.left && nodeToRemove.right){
        let res = this._findMinInRight(nodeToRemove);
        let parent = res.parentNode;
        let min = res.minNode;

        if(this.isLeft){
          this.parent.left = min;
        }else{
          this.parent.right = min;
        }
        min.left = nodeToRemove.left;
        min.right = nodeToRemove.right;
        parent.left = null;
      }else if(nodeToRemove.left && !nodeToRemove.right){
        if(this.isLeft){
          this.parent.left = nodeToRemove.left;
        }else{
          this.parent.right = nodeToRemove.left;
        }
      }else if(!nodeToRemove.left && nodeToRemove.right){
        if(this.isLeft){
          this.parent.left = nodeToRemove.right;
        }else{
          this.parent.right = nodeToRemove.right;
        }
      }else if(!nodeToRemove.left && !nodeToRemove.right){
        this.parent.left = null;
        this.parent.right = null;
      }
    }
    return this.root;
  }
}

module.exports = BST;
