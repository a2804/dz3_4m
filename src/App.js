
import './App.css';
import ListComponent from "./list/ListComponent";
import PageComponent from "./page/PageComponent";
import Call from "./call/Call";

function App() {

  const user = {
    name: "Anna",
    age: "19"
  }

  return (
    <>
        <ListComponent title="ListC" comp={user}/>
        <PageComponent comp={user}/>
        <Call/>
    </>
  );
}

export default App;
