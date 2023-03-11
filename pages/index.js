import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [patternInput, setPatternInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: patternInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setPatternInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Explain RegEx like I'm 5</title>
        <link rel="icon" href="/regex.png" />
      </Head>

      <main className={styles.main}>
        <img src="/regex.png" className={styles.icon} />
        <h3>Explain RegEx like I'm 5</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter a RegEx pattern e.g. ^[a-z]$"
            value={patternInput}
            onChange={(e) => setPatternInput(e.target.value)}
          />
          <input type="submit" value="Explain the pattern" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
