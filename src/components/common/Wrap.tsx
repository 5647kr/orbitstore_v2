export default function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10">
      {children}
    </div>
  );
}
