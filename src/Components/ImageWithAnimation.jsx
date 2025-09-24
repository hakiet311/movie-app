import { useState } from "react";

function ImageWithAnimation({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative ">
      {/* Skeleton hiển thị khi chưa load */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-500 animate-pulse" />
      )}

      {/* Ảnh thật */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        loading="lazy"
        className={`${className} transition-all duration-300 ${
          loaded ? "" : "blur-sm"
        }`}
      />
    </div>
  );
}

export default ImageWithAnimation;
