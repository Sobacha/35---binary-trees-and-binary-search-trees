'use strict';

const TreeNode = require('../lib/tree-node');
const BT = require('../lib/binary-tree');


describe('BT', () => {
  
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
        const bt = new BT();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9);
        bt.root = root;
        root.left = two;
        root.right = three;
        two.left = four;
        three.left = five;

        let expected = [-4, 2, 5, 9, 12];
        let res = bt.inOrderTraversal();

        expect(res).toEqual(expected);
      });
    });

    describe('invalid input', () => {      
      test('should return null if root is null', () => {
        const bt = new BT();
        let res = bt.inOrderTraversal();

        expect(res).toBeNull();
      });
    });
    
  });
    
});
