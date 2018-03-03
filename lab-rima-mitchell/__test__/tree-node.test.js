'use strict';

const TreeNode = require('../lib/tree-node');


describe('TreeNode', () => {

  describe('TreeNode constructor', () => {

    describe('valid input', () => {
      test('should create an instance of TreeNode with default value', () => {
        const tn = new TreeNode(2);

        expect(tn.value).toEqual(2);
        expect(tn.left).toEqual(null);
        expect(tn.right).toEqual(null);
      }); 
      test('should create an instance of TreeNode with user input value', () => {
        const tn = new TreeNode(5);

        expect(tn.value).toEqual(5);
      });

      test('should create an instance of TreeNode with user input for left', () => {
        const left = new TreeNode(1);
        const tn = new TreeNode(2, left);

        expect(tn.left).toEqual(left);
        expect(tn.right).toEqual(null);
      });

      test('should create an instance of TreeNode with user input for right', () => {
        const left = new TreeNode(1);
        const right = new TreeNode(10);
        const tn = new TreeNode(2, left, right);

        expect(tn.left).toEqual(left);
        expect(tn.right).toEqual(right);
      });      
    });

    describe('invalid input', () => {
      test('should throw an error with no input', () => {
        expect(() => new TreeNode()).toThrow('Value required');
      });
    });

  });

});
