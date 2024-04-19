"use client";
import React from "react";
import { Button } from "react-bootstrap";
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      <h1>Something Went Wrong</h1>
      <p>i don't know why</p>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default Error;
