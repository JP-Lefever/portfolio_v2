import Header from "@/components/layout/header/Header";
import Technology from "@/features/technology/Technology";
import {SliderProject} from "@/components/ui/slider/Slider";
import {PageTransition2} from "@/components/ui/animation/Animation";



export default function Home() {
  return (<>

<PageTransition2>
        <Header />
        <SliderProject/>
        <Technology/>
</PageTransition2>

      </>


  );
}
