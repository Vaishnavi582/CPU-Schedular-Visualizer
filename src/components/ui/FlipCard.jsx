import React from "react";

const FlipCard = ({ title, description }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <div className="card-content">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <div className="card-content">
            <p className="text-sm text-center px-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
