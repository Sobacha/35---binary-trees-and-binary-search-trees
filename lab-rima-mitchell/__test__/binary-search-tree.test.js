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

    describe('valid input', () => {
      test('should insert a node in a correct position', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);

        expect(bst.root.value).toEqual(root.value);
        expect(bst.root.left.value).toEqual(two.value);
        expect(bst.root.left.left.value).toEqual(four.value);
        expect(bst.root.right.value).toEqual(three.value);
        expect(bst.root.right.left.value).toEqual(five.value);
      });
    });

    describe('invalid input', () => {      
      test('should throw an error if typeof input is not TreeNode', () => {
        const bst = new BST();
        expect(() => bst.insert()).toThrow('Input needs to be an instanceof TreeNode');
      });
    });
    
  });

  describe('BST find', () => {

    describe('valid input', () => {
      test('should return a correct node if value exists', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);

        expect(bst.find(-4)).toEqual(four);
      });
      test('should return null if value does not exist', () => {
        const bst = new BST();

        expect(bst.find(-4)).toEqual(null);
      });
    });

  });

  describe('BST findMinInRight', () => {

    describe('valid input', () => {
      test('should return a correct minimum node in right sub tree of input node (no children in sub tree)', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9);
        const six = new TreeNode(21);
        const seven = new TreeNode(3);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);
        bst.insert(six);
        bst.insert(seven);

        const res = bst.findMinInRight(three);
        expect(res.parentNode.value).toEqual(12);
        expect(res.minNode.value).toEqual(21);
      });
      test('should return a correct minimum ndoe in right sub tree of input node (more than one child in either left or right)', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9);
        const six = new TreeNode(21);
        const seven = new TreeNode(3);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);
        bst.insert(six);
        bst.insert(seven);

        const res = bst.findMinInRight(root);
        expect(res.parentNode.value).toEqual(12);
        expect(res.minNode.value).toEqual(9);
      });
    });
    
  });

  describe('BST remove', () => {
    
  });

});
