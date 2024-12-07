import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
} from "react-flow-renderer";
import CustomNode from "./CustomNode";
import "react-flow-renderer/dist/style.css";
import ModalPopup from "../../../FormFields/ModalPopup/ModalPopup";
import RequestDetailsForm from "../RequestDetailsForm/RequestDetailsForm";

const FlowChart = ({ reqDetails }: { reqDetails: any }) => {
  const [requestData, setRequestData] = useState<any>(undefined);

  const nodes: any = [];
  reqDetails?.map((item: any, index: number) => {
    nodes.push({
      id: String(index + 1),
      type: "custom",
      data: {
        departmentName: item.departmentName,
        dueDate: item.date,
        status: item.status,
        requestName: item.requestName,
        name: item.name,
      },
      position: {
        // x: 250 * (index + 2),
        // y: Number(item.source) !== index + 1 ? 200 * index : 200,
        x: item.x,
        y: item.y,
        //y: index === 2 ? 0 : index === 3 ? 200 : 0,
      },
      // style: { width: 150, height: 50 },
    });
  });
  console.log("nodes", nodes, reqDetails);

  let edges: any = [];

  reqDetails?.map((item: any, index: number) => {
    edges.push({
      id: `e1-${index}`,
      source: item.source,
      target: item.target,
      type: "smoothstep",
      style: { stroke: "#000" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "black",
      },
    });
  });

  const nodeTypes = { custom: CustomNode };

  const handleNodeClick = (event: any, node: any) => {
    setRequestData(node.data);
  };

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        snapToGrid={true}
        snapGrid={[15, 15]}
        fitView
      >
        {/* <Background color="#FFF" gap={16} /> */}
        {/* <Controls /> */}
      </ReactFlow>
      <ModalPopup
        title={requestData?.requestName}
        isOpen={!!requestData}
        content={<RequestDetailsForm details={requestData} />}
        onClose={() => setRequestData(undefined)}
      />
    </div>
  );
};
export default FlowChart;
