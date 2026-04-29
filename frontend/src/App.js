import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";

function App() {
  const [user, setUser] = useState(null);
  const [docId, setDocId] = useState(null);

  if (!user) {
    return (
      <div style={{ display: "flex", gap: "40px", padding: "40px" }}>
        <Signup />
        <Login setUser={setUser} />
      </div>
    );
  }

  if (docId) {
    return <Editor docId={docId} setDocId={setDocId} />;
  }

  return <Dashboard setDocId={setDocId} setUser={setUser} />;
}

export default App;