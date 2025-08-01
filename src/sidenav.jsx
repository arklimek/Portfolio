function SideNav() {
  return (
    <div
      className="absolute left-1/2 top-3 left-0 transform -translate-x-1/2 bg-zinc-800/35 backdrop-opacity-10
    w-40 h-10 rounded-full shadow-xl/30 flex flex-row items-center justify-center 
    border-b border-l border-stone-500/40 backdrop-blur-2xl"
    >
      <button className="w-5 h-7 rounded-lg bg-teal-900/50 border border-stone-600/40"></button>
      <button className="w-4 h-7 rounded-4xl bg-stone-900/10 ml-4 border border-stone-500/40"></button>
      <button className="w-4 h-7 rounded-4xl bg-stone-900/10 ml-3 border border-stone-500/40"></button>
      <button className="w-4 h-7 rounded-4xl bg-stone-900/10 ml-3 border border-stone-500/40"></button>
    </div>
  );
}
export default SideNav;
