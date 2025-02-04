import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Values } from "./pages/Values/Values";
import { Transition } from "./components/Transition/Transition";
import { Mission } from "./pages/Mission/Mission";
import { Team } from "./pages/Team/Team";
import { Feedback } from "./pages/Feedback/Feedback";
import { Phrase } from "./pages/Phrase/Phrase";
import { Education } from "./pages/Education/Education";
import { Progress } from "./pages/Progress/Progress";
import { Partners } from "./pages/Partners/Partners";
import { Question } from "./pages/Question/Question";
import { Media } from "./pages/Media/Media";
import { Consultation } from "./pages/Consultation/Consultation";
import { Footer } from "./components/Footer/Footer";
import { StickyButton } from "./components/StickyButton/StickyButton";

const App = () => {
  return (
    <div style={{ padding: "20px 100px" }}>
      <Header />
      <Banner />
      <Values />
      <Transition />
      <Mission />
      <Team />
      <Feedback />
      <Phrase />
      <Education />
      <Transition />
      <Progress />
      <Partners />
      <Question />
      <Media />
      <Consultation />
      <Footer />
      <StickyButton />
    </div>
  );
};

export default App;
