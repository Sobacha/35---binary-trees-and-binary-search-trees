'use strict';

const TreeNode = require('../lib/tree-node');
const BST = require('../lib/binary-search-tree');


describe('BST', () => {
  
  describe('BST constructor', () => {

    describe('valid input', () => {
      test('should create an instance of BST with default root', () => {
        const bst = new BST();
        expect(bst.root).toEqual(null);
      });      
      test('should create an instance of BST with root of user input value', () => {
        const root = new TreeNode(5);
        const bst = new BST(root);
        expect(bst.root).toEqual(root);
      });
    });

  });

  describe('BST insert', () => {
    
  });

  describe('BST find', () => {
    
  });

  describe('BST findMinInRight', () => {
    
  });

  describe('BST remove', () => {
    
  });

});
