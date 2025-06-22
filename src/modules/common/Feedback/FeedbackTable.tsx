// src/modules/common/Feedback/FeedbackTable.tsx
import React from "react";

export interface FeedbackRow {
  id: number;
  score: number;
  message: string;
  name: string;
}

interface FeedbackTableProps {
  rows: FeedbackRow[];
}

const FeedbackTable: React.FC<FeedbackTableProps> = ({ rows }) => {
  if (rows.length === 0) {
    return <p className="text-center py-4">No hay feedback aún.</p>;
  }

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg border-light bg-white">
      <table className="min-w-[600px] w-full">
        <thead>
          <tr className="bg-light p-2">
            <th className="p-4 text-left">Score</th>
            <th className="p-4 text-left">Mensaje</th>
            <th className="p-4 text-left">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-light bg-white p-2">
              <td className="p-4">{row.score}</td>
              <td className="p-4">{row.message}</td>
              <td className="p-4">{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
