import { useState } from "react";
import { Play, X } from "lucide-react";
import { Tag } from "./Tag";
import { Heading } from "./Heading";

export const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative flex flex-col items-center py-20 min-h-150 bg-primary text-white text-center overflow-hidden">
      <Tag text="Amazing Experience" />

      <Heading title="Relax And Enjoy With Our Hotel & Resort" />

      {/* Play button */}
      <button
        onClick={() => setShowVideo(true)}
        className="cursor-pointer w-16 h-16 flex mt-35 items-center justify-center bg-white text-green-700 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 relative z-10"
      >
        <Play size={28} fill="currentColor" />
      </button>

      {/* Video Modal */}
      {showVideo && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
          <div className="relative w-full max-w-3xl aspect-video mx-4">
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>

            {/* Video */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/K6W4ViZVhzQ?si=JukS2xyjtaSbx6ae"
              title="Hotel Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
