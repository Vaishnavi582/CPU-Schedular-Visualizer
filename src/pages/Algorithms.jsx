import React from "react";

const Algorithms = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen ">
      <h2 className="text-4xl font-bold text-gray-300 mb-6 text-center">
        CPU Scheduling Algorithms
      </h2>

      {/* FCFS Scheduling */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-400">1. First Come First Serve (FCFS)</h3>
        <p className="mt-2 text-gray-300">
          FCFS is the simplest CPU scheduling algorithm, where the process that arrives first is executed first. It follows a non-preemptive approach, meaning once a process starts execution, it runs until completion.
        </p>
        <p className="mt-2"><strong>Formula:</strong></p>
        <ul className="list-disc pl-6">
          <li>Waiting Time (WT) = Turnaround Time (TAT) - Burst Time (BT)</li>
          <li>Turnaround Time (TAT) = Completion Time (CT) - Arrival Time (AT)</li>
        </ul>
        <p className="mt-2"><strong>Example Question:</strong></p>
        <p className="text-gray-400">
          Consider three processes with arrival times [0, 1, 2] and burst times [5, 3, 8]. Find their waiting and turnaround times using FCFS.
        </p>
      </div>
      
      {/* SJF Scheduling */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-400">2. Shortest Job First (SJF)</h3>
        <p className="mt-2 text-gray-300">
          SJF schedules processes in order of the shortest burst time first. It minimizes the average waiting time and can be either preemptive or non-preemptive.
        </p>
        <p className="mt-2"><strong>Formula:</strong></p>
        <ul className="list-disc pl-6">
          <li>Waiting Time (WT) = Turnaround Time (TAT) - Burst Time (BT)</li>
          <li>Turnaround Time (TAT) = Completion Time (CT) - Arrival Time (AT)</li>
        </ul>
      </div>
      
      {/* Preemptive SJF Scheduling */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-400">3. Shortest Job First (Preemptive)</h3>
        <p className="mt-2 text-gray-300">
          Also called Shortest Remaining Time First (SRTF), where the currently executing process is interrupted if a new process arrives with a shorter burst time.
        </p>
      </div>

      {/* Longest Job First Scheduling */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-400">4. Longest Job First (LJF)</h3>
        <p className="mt-2 text-gray-300">
          LJF schedules processes with the longest burst time first. It is the opposite of SJF and results in longer average waiting times.
        </p>
      </div>
      
      {/* Preemptive LJF Scheduling */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-400">5. Longest Job First (Preemptive)</h3>
        <p className="mt-2 text-gray-300">
          The process with the longest remaining burst time is executed first, interrupting shorter processes, similar to SRTF but with longer job preference.
        </p>
      </div>

      {/* Priority Scheduling */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-400">6. Priority Scheduling</h3>
        <p className="mt-2 text-gray-300">
          Each process is assigned a priority, and the CPU is allocated to the process with the highest priority. It can be preemptive or non-preemptive.
        </p>
        <p className="mt-2"><strong>Formula:</strong></p>
        <ul className="list-disc pl-6">
          <li>Waiting Time (WT) = Turnaround Time (TAT) - Burst Time (BT)</li>
        </ul>
      </div>
      
      {/* Round Robin Scheduling */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-400">7. Round Robin</h3>
        <p className="mt-2 text-gray-300">
          Each process is assigned a fixed time slice (quantum), and the CPU cycles through them in a circular order. It ensures fairness but can lead to high context switching.
        </p>
        <p className="mt-2"><strong>Formula:</strong></p>
        <ul className="list-disc pl-6">
          <li>Waiting Time (WT) = Turnaround Time (TAT) - Burst Time (BT)</li>
          <li>Turnaround Time (TAT) = Completion Time (CT) - Arrival Time (AT)</li>
        </ul>
      </div>
    </div>
  );
};

export default Algorithms;
