'use strict';

class TreeNode{
  constructor(value, left = null, right = null){
    if(!value){
      throw new Error('Value required');
    }
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = TreeNode;
