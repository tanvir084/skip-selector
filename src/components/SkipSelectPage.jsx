import React from "react";
import useFetch from "../hooks/useFetch";
import SkipOptionCard from "./SkipOptionCard";
import "../styles/SkipSelectPage.css";

export default function SkipSelectPage() {
  const postcode = "NR32";
  const area = "Lowestoft";
  const {
    data: skips,
    loading,
    error,
  } = useFetch(
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
  );

  if (loading) return <div className="loader">Loading skips…</div>;
  if (error) return <div className="error">Failed to load skips.</div>;

  return (
    <div className="skip-select-page">
      <h1>Choose Your Skip Size</h1>
      <p className="subtitle">
        Select the skip size that best suits your needs
      </p>

      <div className="skip-grid">
        {skips.map((skip) => (
          <SkipOptionCard key={skip.id} skip={skip} />
        ))}
      </div>
    </div>
  );
}
