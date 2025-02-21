"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //to be continued
    console.log("Search query:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl relative">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask Aptos Assistant..."
        className="w-full bg-transparent border-white/20 rounded-lg py-6 pl-4 pr-12 text-lg"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ArrowRight className="w-6 h-6" />
        <span className="sr-only">Submit search</span>
      </button>
    </form>
  );
}
