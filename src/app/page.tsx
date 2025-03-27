import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { About } from "@/components/home/about";
import { WeddingNight } from "@/components/home/wedding-night";
import { VideoSection } from "@/components/home/video-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <WeddingNight />
      {/* <VideoSection /> */}
    </div>
  );
}
