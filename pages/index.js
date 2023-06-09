import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [patternInput, setPatternInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pattern: patternInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(JSON.parse(data.result));
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
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
            name="pattern"
            placeholder="Enter a RegEx pattern e.g. ^[a-z]$"
            value={patternInput}
            onChange={(e) => setPatternInput(e.target.value)}
          />
          <input type="submit" value="Explain the pattern" />
        </form>

        {result ? (
          <div className={styles.result}>
            <h4>Description</h4>
            <ul>
              {result.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {isLoading ? <div className={styles.loading}>Generating a response...</div> : null}

        <div className={styles.footer}>
          <span>
            made by{' '}
            <a
              href="https://github.com/mikemklee"
              target="_blank"
              rel="noreferrer"
            >
              @mikemklee
            </a>
          </span>
        </div>

      </main>
    </div>
  );
}
