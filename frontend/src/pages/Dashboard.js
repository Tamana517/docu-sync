import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard({ setDocId, setUser }) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    try {
      const res = await API.get("/docs");
      setDocs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createDoc = async () => {
    try {
      const res = await API.post("/docs", {
        title: "Untitled Document"
      });
      setDocs((prev) => [...prev, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div style={{ background: "#f5f7fb", minHeight: "100vh", padding: "30px" }}>
      
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "#1f2937" }}>Your Documents</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <button
        onClick={createDoc}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        + New Document
      </button>

      <div style={{ marginTop: "20px" }}>
        {docs.map((doc) => (
          <div
            key={doc._id}
            onClick={() => setDocId(doc._id)}
            style={{
              background: "#fff",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              cursor: "pointer"
            }}
          >
            {doc.title}
          </div>
        ))}
      </div>
    </div>
  );
}