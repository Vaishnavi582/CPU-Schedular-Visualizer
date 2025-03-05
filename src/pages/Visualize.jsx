import React from "react";

function Visualize() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/visualizer/index.html"
        title="Disk Scheduling Visualizer"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default Visualize;
