export function SkeletonCard() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-arena-sm">
      <div className="w-full aspect-video bg-gradient-to-r from-secondary via-border to-secondary bg-[length:500px_100%] animate-shimmer rounded-none" />
      <div className="p-5">
        <div className="flex justify-between mb-2.5">
          <div className="w-20 h-[22px] bg-gradient-to-r from-secondary via-border to-secondary bg-[length:500px_100%] animate-shimmer rounded-md" />
          <div className="w-11 h-11 bg-gradient-to-r from-secondary via-border to-secondary bg-[length:500px_100%] animate-shimmer rounded-md" />
        </div>
        <div className="w-[88%] h-5 bg-gradient-to-r from-secondary via-border to-secondary bg-[length:500px_100%] animate-shimmer rounded-md mb-2" />
        <div className="w-[60%] h-3.5 bg-gradient-to-r from-secondary via-border to-secondary bg-[length:500px_100%] animate-shimmer rounded-md mb-4" />
        <div className="flex justify-between items-center pt-3.5 border-t border-border">
          <div className="w-[90px] h-8 bg-gradient-to-r from-secondary via-border to-secondary bg-[length:500px_100%] animate-shimmer rounded-md" />
          <div className="w-[72px] h-9 bg-gradient-to-r from-secondary via-border to-secondary bg-[length:500px_100%] animate-shimmer rounded-md" />
        </div>
      </div>
    </div>
  );
}
