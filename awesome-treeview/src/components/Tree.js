import React, { Component } from 'react';
import values from 'lodash/values';
import TreeNode from './TreeNode';
import styled from 'styled-components';

const data = {
  '/root': {
    path: '/root',
    type: 'folder',
    isRoot: true,
    children: ['/root/david', '/root/jslancer'],
  },
  '/root/david': {
    path: '/root/david',
    type: 'folder',
    children: ['/root/david/readme.md'],
  },
  '/root/david/readme.md': {
    path: '/root/david/readme.md',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/jslancer': {
    path: '/root/jslancer',
    type: 'folder',
    children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
  },
  '/root/jslancer/projects': {
    path: '/root/jslancer/projects',
    type: 'folder',
    children: ['/root/jslancer/projects/treeview'],
  },
  '/root/jslancer/projects/treeview': {
    path: '/root/jslancer/projects/treeview',
    type: 'folder',
    children: [],
  },
  '/root/jslancer/vblogs': {
    path: '/root/jslancer/vblogs',
    type: 'folder',
    children: [],
  },
};

const StyledTree = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const TreeWrapper = styled.div`
  width: 250px;
`;

export default class Tree extends Component {

  state = {
    nodes: data,
  };

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes = (node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  }

  onToggle = (node) => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  onSelect = (node) => {
    this.setState({ selectedNode: node });
  }

  render() {
    const rootNodes = this.getRootNodes();
    const { selectedNode } = this.state;

    return (
      <StyledTree>
        <TreeWrapper>
          {rootNodes.map(node => (
            <TreeNode
              node={node}
              getChildNodes={this.getChildNodes}
              onToggle={this.onToggle}
              onSelect={this.onSelect}
            />
          ))}
        </TreeWrapper>
        <div>
          { selectedNode && selectedNode.type === 'file' && selectedNode.content }
        </div>
      </StyledTree>
    )
  }
}