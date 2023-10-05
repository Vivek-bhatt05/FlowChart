import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, MiniMap, Panel, useEdgesState, useNodesState } from 'reactflow';
import './App.css';
import 'reactflow/dist/style.css';
import { useCallback, useState } from 'react';
import { initialEdges, initialNodes} from './components/InititalNode';
import nodeColor from './components/NodeColor'
import { nodeTypes } from './components/InititalNode';


function App() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const [variant, setVariant] = useState('dots');
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])
  return (
    <div className="App">
      <h1>React Flow</h1>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        >
        <Controls />
        <MiniMap nodeColor={nodeColor} />
        <Background variant={variant} gap={12} size={1} />
        <Panel>
        <div>variant:</div>
        <button onClick={() => setVariant('dots')}>dots</button>
        <button onClick={() => setVariant('lines')}>lines</button>
        <button onClick={() => setVariant('cross')}>cross</button>
      </Panel>
      </ReactFlow>
      </div>
    </div>
  );
}

export default App;
