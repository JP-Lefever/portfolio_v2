import Header from "@/components/layout/header/Header";
import Technology from "@/features/technology/Technology";
import {SliderProject} from "@/components/ui/slider/Slider";


export default function Home() {
  return (<>

        <Header />
        <SliderProject/>
        <Technology/>
      </>


  );
}
