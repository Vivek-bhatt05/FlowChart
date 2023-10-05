// import TextUpdaterNode from "./TextUpdaterNode";
import ResizableNode from "./ResizableNode";
const nodeStyle = {
  color: 'white',
  borderColor: '#0041d0',
  backgroundColor: '#6ede87'
};
const nodeTypes = {
  ResizableNode,
};

const initialNodes = [
    {
      id: '1',
      type: 'ResizableNode',
      data: { label: 'Hello ' },
      position: { x: 250, y: 25 },
      style: nodeStyle
    },
  
    {
      id: '2',
      data: { label: <div>World</div> },
      position: { x: 100, y: 125 },
      style: nodeStyle
    },
    {
      id: '3',
      data: { label: 'From ' },
      position: { x: 400, y: 125 },
      style: nodeStyle,
    },
    {
      id: '4',
      data: { label: 'Vivek ' },
      position: { x: 250, y: 250 },
      style: nodeStyle
    },
  ];
  
  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
  ];


  export {initialEdges,initialNodes, nodeTypes};
