'use strict';

const TreeNode = require('../lib/tree-node');
const BT = require('../lib/binary-tree');


describe('BT', () => {

  beforeAll(() => {
    this.bt = new BT();
    this.root = new TreeNode(5);
    this.two = new TreeNode(2);
    this.three = new TreeNode(12);
    this.four = new TreeNode(-4);
    this.five = new TreeNode(9);
    this.bt.root = this.root;
    this.root.left = this.two;
    this.root.right = this.three;
    this.two.left = this.four;
    this.three.left = this.five;
  });
  
  describe('BT constructor', () => {

    describe('valid input', () => {
      test('should create an instance of BT with default root', () => {
        const bt = new BT();

        expect(bt.root).toEqual(null);
      });      
      test('should create an instance of BT with root of user input value', () => {
        const root = new TreeNode(5);
        const bt = new BT(root);

        expect(bt.root).toEqual(root);
      });
    });

  });

  describe('BT inOrderTraversal', () => {

    describe('valid input', () => {
      test('should correctly traverse a binary tree (root is not null)', () => {
        let expected = [-4, 2, 5, 9, 12];
        let res = this.bt.inOrderTraversal();

        expect(res).toEqual(expected);
      });

      test('should return null if root is null', () => {
        const bt = new BT();
        let res = bt.inOrderTraversal();

        expect(res).toBeNull();
      });
    });
    
  });
    
  describe('BT preOrderTraversal', () => {

    describe('valid input', () => {
      test('should correctly traverse a binary tree (root is not null)', () => {
        let expected = [5, 2, -4, 12, 9];
        let res = this.bt.preOrderTraversal();

        expect(res).toEqual(expected);
      });

      test('should return null if root is null', () => {
        const bt = new BT();
        let res = bt.preOrderTraversal();

        expect(res).toBeNull();
      });
    });
    
  });

  describe('BT postOrderTraversal', () => {

    describe('valid input', () => {
      test('should correctly traverse a binary tree (root is not null)', () => {
        let expected = [-4, 2, 9, 12, 5];
        let res = this.bt.postOrderTraversal();

        expect(res).toEqual(expected);
      });

      test('should return null if root is null', () => {
        const bt = new BT();
        let res = bt.postOrderTraversal();

        expect(res).toBeNull();
      });
    });
    
  });
});
