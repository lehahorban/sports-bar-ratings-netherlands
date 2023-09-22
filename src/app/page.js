import About from "./components/About/About";
import RatingBar from "./components/RatingBar/RatingBar";
import Reviews from "./components/Reviews/Reviews";
import Contacts from "./components/Contacts/Contacts";

export default function Home() {
  return (
    <main className="flex-1">
      <About />
      <RatingBar />
      <Reviews />
      <Contacts />
    </main>
  );
}
