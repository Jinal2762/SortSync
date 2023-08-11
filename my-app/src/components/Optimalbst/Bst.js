import React, { useState } from 'react';
import './Bst.css';

const TreeNode = ({ element, left, right }) => {
  return (
    <div className="node">
      <div className="node__element">{element}</div>
      {(left || right) && (
        <div className="node__children">
          <div className={`child-container ${left ? "node--left" : "node--right"}`}>
            {left && <TreeNode {...left} />}
          </div>
          <div className={`child-container ${right ? "node--right" : "node--left"}`}>
            {right && <TreeNode {...right} />}
          </div>
        </div>
      )}
    </div>
  );
};


const Bst = () => {
  const [keyCount, setKeyCount] = useState(0);
  const [generatedValues, setGeneratedValues] = useState([]);
  const [bstRoot, setBstRoot] = useState(null);
  const [keys, setKeys] = useState([]);
  const [weights, setWeights] = useState([]);

  const handleKeyCountChange = (event) => {
    const count = parseInt(event.target.value);
    
    if (count > 15) {
      alert('You can only enter up to 15 keys.');
      setKeyCount(0); // Reset the key count to 0 to clear the input field
      return;
    }
  
    setKeyCount(count);
    setKeys([]);
    setWeights([]);
  };

  const handleKeyChange = (index, event) => {
    const newKeys = [...keys];
    newKeys[index] = parseInt(event.target.value);
    setKeys(newKeys);
  };

  const handleWeightChange = (index, event) => {
    const newWeights = [...weights];
    newWeights[index] = parseInt(event.target.value);
    setWeights(newWeights);
  };

  const handleGenerateBST = () => {
    if (keys.length !== keyCount || weights.length !== keyCount) {
      alert('Please provide all keys and weights.');
      return;
    }

    setGeneratedValues(keys);

    const generateOptimalBST = (keys, weights) => {
      const n = keys.length;
      const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

      const calculateSum = (weights, i, j) => {
        let sum = 0;
        for (let k = i; k <= j; k++) {
          sum += weights[k];
        }
        return sum;
      };

      for (let i = 0; i < n; i++) {
        dp[i][i] = weights[i];
      }

      for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length + 1; i++) {
          const j = i + length - 1;
          dp[i][j] = Number.POSITIVE_INFINITY;

          const sum = calculateSum(weights, i, j);

          for (let k = i; k <= j; k++) {
            const val = sum + (k > i ? dp[i][k - 1] : 0) + (k < j ? dp[k + 1][j] : 0);
            if (val < dp[i][j]) {
              dp[i][j] = val;
            }
          }
        }
      }

      const constructOptimalBST = (keys, weights, i, j) => {
        if (i > j) {
          return null;
        }

        let sum = 0;
        for (let k = i; k <= j; k++) {
          sum += weights[k];
        }

        let minValue = Number.POSITIVE_INFINITY;
        let rootIndex = -1;
        for (let k = i; k <= j; k++) {
          const cost = sum + (k > i ? dp[i][k - 1] : 0) + (k < j ? dp[k + 1][j] : 0);
          if (cost < minValue) {
            minValue = cost;
            rootIndex = k;
          }
        }

        const root = {
          element: keys[rootIndex],
          left: constructOptimalBST(keys, weights, i, rootIndex - 1),
          right: constructOptimalBST(keys, weights, rootIndex + 1, j),
        };

        return root;
      };

      const bstRootNode = constructOptimalBST(keys, weights, 0, n - 1);
      return bstRootNode;
    };

    const bstRootNode = generateOptimalBST(keys, weights);
    setBstRoot(bstRootNode);
  };

  return (
    <div className='bst-container'>
      <div className="container">
        <h1 id='h1'>JS Binary Tree</h1>
        <label className='label'>
          Number of Keys:
          <input className='nokey'
            type="number"
            value={keyCount}
            onChange={handleKeyCountChange}
            min="0"
            step="1"
          />
        </label>
        {Array.from({ length: keyCount }).map((_, index) => (
          <div key={index}>
            <label className='label'>
              Key {index + 1} 
              <input className ='keyval'
                type="number"
                value={keys[index] || ''}
                onChange={(event) => handleKeyChange(index, event)}
                min="0"
                step="1"
              />
            </label>
            <label className='label'>
              Weight {index + 1} 
              <input className='keyval'
                type="number"
                value={weights[index] || ''}
                onChange={(event) => handleWeightChange(index, event)}
                min="0"
                step="1"
              />
            </label>
          </div>
        ))}
      </div>
      <button id="createbtn" onClick={handleGenerateBST}>
          Generate BST
      </button>
      {generatedValues.length > 0 && (
        <div className="container">
          <h2>Generated BST</h2>
          <div className="tree">
            {bstRoot && <TreeNode {...bstRoot} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bst;