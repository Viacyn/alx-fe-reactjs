import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>

      <div>
        <Counter />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile
          name="John"
          age="30"
          bio="Software engineer who enjoys traveling and cooking"
        />
        <UserProfile
          name="Emma"
          age="28"
          bio="Passionate about art and design"
        />
      </div>
    </>
  );
}

export default App;
