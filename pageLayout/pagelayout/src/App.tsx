import * as C from "./styledComponents/container";
import * as N from "./styledComponents/navBar";

function App() {
  return (
    <C.pageContainer>
      <N.container>
        <N.element>First</N.element>
        <N.element>Second</N.element>
        <N.element>Third</N.element>
      </N.container>
    </C.pageContainer>
  );
}

export default App;
