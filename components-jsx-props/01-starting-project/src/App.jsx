import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

  let tabContent = 'Please click a button.';

  function handleSelect(selectedButton) { 
    tabContent = selectedButton;

  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">

        <h2>Core concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          /> 
          <CoreConcept {...CORE_CONCEPTS[1]} />   
          <CoreConcept {...CORE_CONCEPTS[2]} />   
          <CoreConcept {...CORE_CONCEPTS[3]} />   
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton click={() => handleSelect('components')}>Components</TabButton>
            <TabButton click={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton click={() => handleSelect('props')}>Props</TabButton>
            <TabButton click={() => handleSelect('state')}>State</TabButton>

          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
