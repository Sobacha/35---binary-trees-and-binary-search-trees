'use strict';


class BinaryTree{
  constructor(root=null){
    this.root = root;
  }

  inOrderTraversal(){
    if(!this.root)
      return null;
    
    let resIn = [];
    this._inOrderTraversal(this.root, resIn);
    return resIn;
  }

  _inOrderTraversal(root, res){
    if(root === null)
      return null;

    this._inOrderTraversal(root.left, res);
    res.push(root.value);
    this._inOrderTraversal(root.right, res);
  }

  preOrderTraversal() {
    if(!this.root)
      return null;

    let resPre = [];
    this._preOrderTraversal(this.root, resPre);
    return resPre;
  }

  _preOrderTraversal(root, res) {
    if(root === null)
      return null;
      
    res.push(root.value);
    this._preOrderTraversal(root.left, res);
    this._preOrderTraversal(root.right, res);
  }

  postOrderTraversal() {
    if(!this.root)
      return null;

    let resPost = [];
    this._postOrderTraversal(this.root, resPost);
    return resPost;
  }

  _postOrderTraversal(root, res) {
    if(root === null)
      return null;

    this._postOrderTraversal(root.left, res);
    this._postOrderTraversal(root.right, res);
    res.push(root.value);
  }
}


module.exports = BinaryTree;
