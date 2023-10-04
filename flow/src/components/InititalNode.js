import TextUpdaterNode from "./TextUpdaterNode";

const initialNodes = [
    {
      id: '1',
      type: 'textUpdater',
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },
  
    {
      id: '2',
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 },
    },
  ];
  
  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '1', target: '3', animated: true },
  ];

  const nodeTypes = {textUpdater : TextUpdaterNode}

  export {initialEdges,initialNodes ,nodeTypes};