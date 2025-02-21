// import { MessageBoard } from "@/components/MessageBoard";
// import { CreateMessage } from "@/components/CreateMessage";

// export default function HomePage() {
//   return (
//     <div className="space-y-4">
//       <MessageBoard />
//       <CreateMessage />
//     </div>
//   );
// }
"use client"
import SearchBar from "@/components/search-bar";
import TrendingRequests from "@/components/trending-requests";
import { AptosLogo } from "@/components/aptos-logo";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1416] text-white">
      <main className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-8 pt-12">
          <AptosLogo />

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Where to, with Aptos?
          </h1>

          <SearchBar />

          <TrendingRequests />


        </div>
      </main>
    </div>
  );
}
