// import { ThemeToggle } from "@/components/ThemeToggle";
import { WalletSelector } from "@/components/wallet/WalletSelector";

export const RootHeader = () => {
  return (
    <div className="flex justify-between items-center gap-6 pb-5">
      <header className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">APTOS</span>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Assistant</span>
            <span className="px-1.5 py-0.5 text-xs bg-white/10 rounded">
              BETA
            </span>
          </div>
        </div>
      </header>
      <div className="flex space-x-2 items-center justify-center">
        <div className="flex-grow text-right min-w-0">
          <WalletSelector />
        </div>
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};
