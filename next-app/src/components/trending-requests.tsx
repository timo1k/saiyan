import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SuggestedQueries {
  id: string;
  title: string;
  href: string;
}

const suggestedQueries: SuggestedQueries[] = [
  {
    id: "1",
    title: "Compare USDC lending rates",
    href: "#LENDING",
  },
  {
    id: "2",
    title: "Find best trade for APT → USDC",
    href: "#SWAP",
  },
  {
    id: "3",
    title: "Provide Liquidity",
    href: "#LP",
  },
];

export default function SuggestedQueries() {
  return (
    <div className="w-full max-w-4xl pt-16">
      <h2 className="text-sm uppercase text-gray-400 mb-4">
        Suggested Queries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestedQueries.map((request) => (
          <Link
            key={request.id}
            href={request.href}
            className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">{request.title}</h3>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
