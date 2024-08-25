import { ReactNode, useState } from "react";

import { k } from "@kuma-ui/core";

import { Box, Button } from "@kuma-ui/core";

import CountdownTimer from "./CountdownTimer";

type TimeAddButtonProps = {
  children: ReactNode;
  timeToChange: number;
};

function App() {
  const initialTime = 5 * 60; // Initial duration is 5 minute
  const [totalTime, setTotalTime] = useState(initialTime);
  const [isUpdateTime, setIsUpdateTime] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const TimeAddButton = ({ children, timeToChange }: TimeAddButtonProps) => {
    return (
      <Button
        border="2px solid #eba286"
        borderRadius="1rem"
        px="1.6rem"
        py="0.8rem"
        mx="0.5rem"
        disabled={isRunning}
        onClick={() => {
          const appliedTime = totalTime + timeToChange;
          setTotalTime(appliedTime >= 0 ? appliedTime : 0);
          setIsUpdateTime(true);
        }}
      >
        {children}
      </Button>
    );
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTotalTime(initialTime);
    setIsReset(true);
  };

  return (
    <div>
      <Box
        display="flex"
        flexFlow="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CountdownTimer
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          isUpdateTime={isUpdateTime}
          setIsUpdateTime={setIsUpdateTime}
          isReset={isReset}
          setIsReset={setIsReset}
          totalTime={totalTime}
        />

        <Button
          border="2px solid #eba286"
          borderRadius="1rem"
          px="1.6rem"
          py="0.8rem"
          mt="2rem"
          onClick={() => setIsRunning(!isRunning)}
        >
          Click to Start
        </Button>

        <k.div mt="1rem">
          <TimeAddButton timeToChange={60 * 0.5}>+0.5 Min</TimeAddButton>
          <TimeAddButton timeToChange={60 * 1}>+1 Min</TimeAddButton>
          <TimeAddButton timeToChange={60 * 5}>+5 Min</TimeAddButton>
        </k.div>
        <k.div mt="1rem">
          <TimeAddButton timeToChange={60 * -0.5}>-0.5 Min</TimeAddButton>
          <TimeAddButton timeToChange={60 * -1}>-1 Min</TimeAddButton>
          <TimeAddButton timeToChange={60 * -5}>-5 Min</TimeAddButton>
        </k.div>

        <Button
          border="2px solid #eba286"
          borderRadius="1rem"
          px="1.6rem"
          py="0.8rem"
          mt="1rem"
          onClick={resetTimer}
        >
          Reset Timer
        </Button>
      </Box>
    </div>
  );
}

export default App;
