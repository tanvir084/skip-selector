import React, { useState } from "react";
import "../styles/SkipOptionCard.css";

export default function SkipOptionCard({ skip }) {
  const [selected, setSelected] = useState(false);

  // Build the image URL
  const baseImageUrl =
    "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes";
  const imgFilename = `${skip.size}-yarder-skip.jpg`;
  const imgSrc = `${baseImageUrl}/${imgFilename}`;

  // Cost calculations
  const days = skip.hire_period_days ?? 14;
  const transport = skip.transport_cost ?? 0;
  const perTonne = skip.per_tonne_cost ?? 0;
  const net = skip.price_before_vat ?? 0;
  const vatRate = (skip.vat ?? 0) / 100;
  const vatAmount = Math.round(net * vatRate);
  const total = net + vatAmount + transport + perTonne;

  return (
    <div
      role="button"
      tabIndex="0"
      aria-pressed={selected}
      className={`skip-card ${selected ? "selected" : ""}`}
      onClick={() => setSelected((s) => !s)}
      onKeyDown={(e) => e.key === "Enter" && setSelected((s) => !s)}
    >
      {/* Image + badge */}
      <div className="image-wrapper">
        <img
          src={imgSrc}
          alt={`${skip.size} Yard Skip`}
          className="skip-image"
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/400x200?text=${skip.size}+Yard+Skip`;
          }}
        />
        <span className="size-badge">{skip.size} Yards</span>
      </div>

      {/* Info & costs */}
      <div className="skip-info">
        <h2>{skip.title}</h2>
        <p className="hire-period">{days}-day hire period</p>

        <div className="cost-breakdown">
          <div>
            <span>Net:</span>
            <span>£{net}</span>
          </div>
          <div>
            <span>VAT ({skip.vat} %):</span>
            <span>£{vatAmount}</span>
          </div>
          <div>
            <span>Transport:</span>
            <span>£{transport}</span>
          </div>
          <div>
            <span>Per tonne:</span>
            <span>£{perTonne}</span>
          </div>
        </div>

        <div className="total-row">
          <span className="total-label">Total:</span>
          <span className="total-value">£{total}</span>
        </div>
      </div>

      {/* Conditional warning */}
      {!skip.onRoad && (
        <div className="road-warning">⚠️ Not Allowed On The Road</div>
      )}

      {/* Select button */}
      <button className="select-button">Select This Skip →</button>
    </div>
  );
}
