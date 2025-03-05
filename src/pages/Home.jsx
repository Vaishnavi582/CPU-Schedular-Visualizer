import React from "react";
import FlipCard from "../components/ui/FlipCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h2 className="text-4xl font-bold text-center mb-6">What is a CPU Scheduler?</h2>
      <p className="text-lg text-center text-gray-400 max-w-3xl mx-auto">
        A CPU scheduler selects which process will run on the CPU when multiple processes are ready. It helps in efficient CPU utilization using different scheduling algorithms.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <FlipCard title="FCFS" description="First Come, First Serve: Processes execute in arrival order." />
        <FlipCard title="SJF" description="Shortest Job First: Process with the shortest burst time runs first." />
        <FlipCard title="SJF (Preemptive)" description="Shortest Remaining Time First: SJF with preemption." />
        <FlipCard title="LJF" description="Longest Job First: The process with the longest burst time runs first." />
        <FlipCard title="LJF (Preemptive)" description="Longest Remaining Time First: LJF with preemption." />
        <FlipCard title="Priority" description="Processes execute based on assigned priority levels." />
        <FlipCard title="Round Robin" description="Each process gets a fixed time slot in a cyclic order." />
      </div>
    </div>
  );
};

export default Home;
