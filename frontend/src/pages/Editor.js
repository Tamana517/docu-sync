import { useEffect, useState } from "react";
import API from "../api";

export default function Editor({ docId, setDocId }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [versions, setVersions] = useState([]);
  const [showVersions, setShowVersions] = useState(false);

  // Load document
  useEffect(() => {
    loadDoc();
  }, [docId]);

  const loadDoc = async () => {
    try {
      const res = await API.get(`/docs/${docId}`);
      setContent(res.data.content);
      setTitle(res.data.title);
    } catch (err) {
      console.log("Load doc error:", err);
    }
  };

  // 🔥 Auto-save
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        await API.put(`/docs/${docId}`, {
          content,
          title
        });
        setStatus("Saved");
      } catch (err) {
        setStatus("Error saving");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [content, title]);

  // Load version history
  const loadVersions = async () => {
    try {
      const res = await API.get(`/docs/${docId}/versions`);
      setVersions(res.data);
      setShowVersions(!showVersions);
    } catch (err) {
      console.log("Version fetch error:", err);
    }
  };

  // Restore version
  const restoreVersion = async (vid) => {
    try {
      await API.post(`/docs/${docId}/restore/${vid}`);
      await loadDoc();
      setStatus("Version restored");
    } catch (err) {
      console.log("Restore error:", err);
    }
  };

  return (
    <div style={{ background: "#f5f7fb", minHeight: "100vh", padding: "30px" }}>
      
      {/* Back Button */}
      <button onClick={() => setDocId(null)}>← Back</button>

      {/* Title Input */}
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setStatus("Typing...");
        }}
        placeholder="Document Title"
        style={{
          width: "100%",
          fontSize: "22px",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />

      {/* Status */}
      <p style={{ color: "green" }}>{status}</p>

      {/* Content Editor */}
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          setStatus("Typing...");
        }}
        rows={15}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

      <br /><br />

      {/* Version Button */}
      <button onClick={loadVersions}>
        {showVersions ? "Hide Versions" : "Show Versions"}
      </button>

      {/* Version List */}
      {showVersions && (
        <div style={{ marginTop: "20px" }}>
          <h4>Version History</h4>

          {versions.length === 0 && <p>No versions yet</p>}

          {versions.map((v) => (
            <div
              key={v._id}
              style={{
                background: "#fff",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px",
                border: "1px solid #e5e7eb"
              }}
            >
              <span>
                {new Date(v.createdAt).toLocaleString()}
              </span>

              <button
                onClick={() => restoreVersion(v._id)}
                style={{ marginLeft: "10px" }}
              >
                Restore
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}