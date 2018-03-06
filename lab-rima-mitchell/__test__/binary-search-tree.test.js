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
      test('should insert a node in a correct position (integer)', () => {
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
      test('should insert a node in a correct position (float)', () => {
        const bst = new BST();
        const root = new TreeNode(5.5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9.8);
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
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        bst.insert(root);
        bst.insert(two);

        expect(bst.find(-4)).toEqual(null);
      });
      test('should return null if root is null', () => {
        const bst = new BST();

        expect(bst.find(-4)).toEqual(null);
      });
    });

  });

  describe('BST remove', () => {

    describe('valid input', () => {
      test('should remove a correct node if it exists (node is not in the bottom)', () => {
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

        bst.remove(2);
        expect(bst.root.left.value).toEqual(-4);
        expect(bst.root.left.right.value).toEqual(3);
        expect(bst.root.right.value).toEqual(12);
        expect(bst.root.right.right.value).toEqual(21);
        expect(bst.root.right.left.value).toEqual(9);
      });
      test('should remove a correct node if it exists (node is in the bottom)', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);

        bst.remove(12);
        expect(bst.root.value).toEqual(5);
        expect(bst.root.left.value).toEqual(2);
        expect(bst.root.left.left.value).toEqual(-4);
      });
      test('should not remove if it does not exist', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);

        bst.remove(8);
        expect(bst.root.value).toEqual(5);
        expect(bst.root.left.value).toEqual(2);
        expect(bst.root.left.left.value).toEqual(-4);
        expect(bst.root.right.value).toEqual(12);
      });
    });
    
  });

  describe('BST isBalanced', () => {

    describe('valid input', () => {
      test('should return true if it is balanced (depeth diff is 0)', () => {
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

        expect(bst.isBalanced()).toBe(true);
      });
      test('should return true if it is balanced (depth diff is 1)', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(3);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);

        expect(bst.isBalanced()).toBe(true);
      });
      test('should return true if only root', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        bst.insert(root);

        expect(bst.isBalanced()).toBe(true);
      });
      test('should return true if root is null', () => {
        const bst = new BST();

        expect(bst.isBalanced()).toBe(true);
      });
      test('should return false if it is not balanced (case 1)', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(-4);
        const four = new TreeNode(3);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);

        expect(bst.isBalanced()).toBe(false);
      });
      test('should return false if it is not balanced (case 2)', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(-4);
        const four = new TreeNode(13);
        const five = new TreeNode(-10);
        const six = new TreeNode(20);
        const seven = new TreeNode(25);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);
        bst.insert(six);
        bst.insert(seven);

        expect(bst.isBalanced()).toBe(false);
      });
    });
  });
    
  describe('BST height', () => {

    describe('valid input', () => {
      test('should return a correct height (root is not null)', () => {
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

        expect(bst.height(bst.root)).toEqual(3);
      });
      test('should return 0 if root is null', () => {
        const bst = new BST();

        expect(bst.height(bst.root)).toEqual(0);
      });
    });
  });
});
