/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
    You are given the root of a binary search tree (BST) and an integer val.
    Find the node in the BST that the node's value equals val and return the 
    subtree rooted with that node. If such a node does not exist, return null.
*/








/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root){
        return null
    }

    if(val===root.val){
        return root
    }
    if(val<root.val){
        return searchBST(root.left, val)
    }else if(val > root.val){
        return searchBST(root.right, val)
    }
};
