import { motion } from "motion/react";

export default function LinkPreview({
  url,
  width = 200,
  height = 125,
  isStatic = false,
  imageSrc,
}) {
  let src;
  if (!isStatic) {
    const params = new URLSearchParams({
      url,
      screenshot: "true",
      meta: "false",
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": "true",
      "viewport.deviceScaleFactor": "1",
      "viewport.width": (width * 4).toString(),
      "viewport.height": (height * 4).toString(),
    }).toString();

    src = `https://api.microlink.io?${params}&media=true`;
  } else {
    src = imageSrc;
  }

  return (
    <motion.div className="shadow-xl rounded-xl">
      <div
        className="block p-1 bg-white border-2 border-transparent shadow rounded-xl"
        style={{ fontSize: 0 }}
      >
        <img
          src={src}
          width={width}
          height={height}
          className="rounded-lg"
          alt="preview image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/noise.webp";
          }}
        />
      </div>
    </motion.div>
  );
}
