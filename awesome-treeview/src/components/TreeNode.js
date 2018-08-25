import React from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import last from 'lodash/last';
import styled from 'styled-components';

const getNodePaddingLeft = (level, type) => {
  let padding = level * 20;
  if (type === 'file') padding += 20;
  return padding;
}

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 8px;
  padding-left: ${props => getNodePaddingLeft(props.level, props.type)}px;
  align-items: center;

  &:hover {
    background: lightgray;
  }
`;

const Icon = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const getNodeLabel = (node) => last(node.path.split('/'));

const TreeNode = (props) => {
  const { node, getChildNodes, level, onToggle, onSelect } = props;

  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.type}>
        <Icon onClick={() => onToggle(node)}>
          { node.type === 'folder' && (node.isOpen === true ? <FaChevronDown /> : <FaChevronRight /> )}
        </Icon>
        
        <Icon marginRight={10}>
          { node.type === 'file' && <FaFile /> }
          { node.type === 'folder' && node.isOpen === true && <FaFolderOpen /> }
          { node.type === 'folder' && !node.isOpen && <FaFolder /> }
        </Icon>
        
        <div onClick={() => onSelect(node)}>
          { getNodeLabel(node) }
        </div>
      </StyledTreeNode>

      { node.isOpen && getChildNodes(node).map(childNode => (
        <TreeNode 
          {...props}
          node={childNode}   
          level={level + 1}       
        />
      ))}
    </React.Fragment>
  );
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

TreeNode.defaultProps = {
  level: 0,
};

export default TreeNode;