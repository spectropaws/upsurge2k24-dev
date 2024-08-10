import Start from "./Start";
import ScreenEventEmitter from "@/app/components/ScreenEventEmitter";


export default function StartScreen() {
  return (
      <ScreenEventEmitter>
          <Start/>
      </ScreenEventEmitter>
  );
}
