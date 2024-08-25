import { useState, useEffect } from "react";
import { Box, Text } from "@kuma-ui/core";

type Props = {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isUpdateTime: boolean;
  setIsUpdateTime: React.Dispatch<React.SetStateAction<boolean>>;
  isReset: boolean;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
  totalTime: number;
};

const CountdownTimer = ({
  isRunning = false,
  setIsRunning,
  isUpdateTime,
  setIsUpdateTime,
  isReset,
  setIsReset,
  totalTime,
}: Props) => {
  const [timeLeft, setTimeLeft] = useState(totalTime * 10);

  // Countdown method
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isRunning) {
        if (isUpdateTime) {
          setTimeLeft(totalTime >= 0 ? totalTime * 10 : 0);
          setIsUpdateTime(false);
        }
        return;
      }
      setTimeLeft((prevTime) => (prevTime <= 0 ? 0 : prevTime - 1));
    }, 100);

    return () => clearInterval(timer);
  }, [isRunning, isUpdateTime, setIsUpdateTime, totalTime]);

  // Time up method
  useEffect(() => {
    if (timeLeft === 0) {
      setIsRunning(false);
    }
  }, [timeLeft, setIsRunning]);

  // Reset method
  useEffect(() => {
    if (isReset) {
      setTimeLeft(totalTime * 10);
      setIsReset(false);
    }
  }, [isReset, setIsReset, totalTime]);

  const minutes = Math.floor(timeLeft / 10 / 60);
  const seconds = Math.floor(timeLeft / 10) % 60;
  const progress = ((totalTime - Math.floor(timeLeft / 10)) / totalTime) * 100;

  return (
    <Box
      position="relative"
      width="200px"
      height="200px"
      borderRadius="50%"
      background={
        timeLeft === 0
          ? "#ddd"
          : `conic-gradient(#4caf50 0%, #4caf50 ${progress}%, #ddd ${progress}%, #ddd 100%)`
      }
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="2em"
      color="#333"
    >
      <Text position="absolute" id="time">
        {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
      </Text>
    </Box>
  );
};

export default CountdownTimer;
