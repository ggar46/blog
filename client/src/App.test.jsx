import { render, screen } from "@testing-library/react";

import BlogCard from "./components/BlogCard";
//import Form from "./components/Form";

describe("BlogCard", () => {
    test("renders BlogCard component", () => {
      render(<BlogCard />);
    });
  });