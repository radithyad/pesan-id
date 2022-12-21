import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "Rp.";
  return (
    <div className="bannerContent">
      <h3>
        Welcome back to our<span> Restaurant</span>
      </h3>
    </div>
  );
}

export default BannerName;
