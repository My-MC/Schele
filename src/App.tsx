import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { css, k } from "@kuma-ui/core";

import { Button } from "@kuma-ui/core";
import { Link } from "@kuma-ui/core";
import { Image } from "@kuma-ui/core";
import { Text } from "@kuma-ui/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <k.div maxWidth="1280px" m="0 auto" p="2rem" textAlign="center">
      <div>
        <Link href="https://vitejs.dev" target="_blank">
          <Image
            src={viteLogo}
            height="6em"
            padding="1.5em"
            transition="filter 300ms"
            _hover={{ filter: "drop-shadow(0 0 2em #646cffaa)" }}
            alt="Vite logo"
          />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <Image
            src={reactLogo}
            height="6em"
            padding="1.5em"
            transition="filter 300ms"
            _hover={{ filter: "drop-shadow(0 0 2em #61dafbaa)" }}
            alt="React logo"
            className={css`
              @keyframes logo-spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              @media (prefers-reduced-motion: no-preference) {
                animation: logo-spin infinite 20s linear;
              }
            `}
          />
        </Link>
      </div>
      <k.h1 fontSize="3.2em" lineHeight={1.1}>
        Vite + React
      </k.h1>

      <k.div p="2em">
        <Button
          p="0.6em 1.2em"
          fontSize="1em"
          fontWeight={500}
          fontFamily="inherit"
          backgroundColor="#1a1a1a"
          cursor="pointer"
          borderRadius="8px"
          border="1px solid transparent"
          transition="border-color 0.25s"
          _hover={{ borderColor: "#646cff" }}
          _focus={{ outlineWidth: 4, outlineStyle: "auto" }}
          _focus-visible={{ outlineWidth: 4, outlineStyle: "auto" }}
          onClick={() => setCount((count) => count + 1)}
          className={css`
            @media (prefers-color-scheme: light) {
              background-color: #f9f9f9 !important;
            }
          `}
        >
          count is {count}
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </k.div>

      <Text color="#888">Click on the Vite and React logos to learn more</Text>
    </k.div>
  );
}

export default App;
