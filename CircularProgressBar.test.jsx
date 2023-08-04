import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CircularProgressBar from "./CircularProgressBar";

describe("CircularProgressBar", () => {
  test("renders start button", () => {
    render(<CircularProgressBar size={200} strokeWidth={10} percentage={50} />);
    const startButton = screen.getByTestId("start-button");
    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveTextContent("Start");
  });

  test("renders pause button after clicking start", () => {
    render(<CircularProgressBar size={200} strokeWidth={10} percentage={50} />);
    const startButton = screen.getByTestId("start-button");
    fireEvent.click(startButton);

    const pauseButton = screen.getByTestId("pause-button");
    expect(pauseButton).toBeInTheDocument();
    expect(pauseButton).toHaveTextContent("Pause");
  });

  test("renders percentage text", () => {
    render(<CircularProgressBar size={200} strokeWidth={10} percentage={50} />);
    const percentageText = screen.getByText("50%");
    expect(percentageText).toBeInTheDocument();
  });

  test("progress bar updates percentage correctly after starting", async () => {
    render(<CircularProgressBar size={200} strokeWidth={10} percentage={50} />);
    const startButton = screen.getByTestId("start-button");
    fireEvent.click(startButton);

    // Let's wait for a few seconds to simulate the progress
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    const percentageText = screen.getByText("100%");
    expect(percentageText).toBeInTheDocument();
  });
});
