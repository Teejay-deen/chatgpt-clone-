// import ChatInput from "@/components/InputInput";
import ChatHelp from "@/components/chatHelp";
import ChatInput from "@/components/chatInput";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-2 items-center justify-center">
      <div className=" w-full mx-auto flex flex-col items-center gap-5">
        <h2 className="text-xl md:text-3xl font-semibold px-4 text-white">
        What can i help you with?
         </h2>
       {/* chat input */}
       <ChatInput />
       <ChatHelp />
      </div>
    
    </main>
  );
}
