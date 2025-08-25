import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/hello") // thanks to Vite proxy config
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg("Error fetching backend message"));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Message from backend: {msg}</p>
    </div>
  );
}

export default Home;
