import React from 'react';

// সরাসরি ফাইলের ভেতরেই ইন্টারফেস ডিফাইন করে দেওয়া হলো যেন ইম্পোর্ট এরর পুরোপুরি দূর হয়
export interface IApp {
  id: string;
  name: string;
  category: 'Apps' | 'Games';
  subCategory: string;
  rating: number;
  reviewsCount: string;
  size: string;
  iconUrl: string;
  isFree: boolean;
  price?: number;
  developer: string;
  description: string;
}

interface AppCardProps {
  app: IApp;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="group relative bg-brand-card border border-brand-border/40 rounded-2xl p-4 transition-all duration-300 hover:bg-brand-card/80 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1 flex flex-col justify-between h-full cursor-pointer">
      
      {/* Top Details Content */}
      <div className="flex gap-4">
        {/* App Icon Image */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-brand-bg border border-brand-border flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          <img 
            src={app.iconUrl} 
            alt={app.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Information */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate group-hover:text-brand transition-colors">
            {app.name}
          </h3>
          <p className="text-gray-400 text-xs font-medium mt-0.5 truncate">
            {app.developer}
          </p>
          <p className="text-brand text-[11px] sm:text-xs mt-1 font-semibold tracking-wide uppercase">
            {app.subCategory}
          </p>
        </div>
      </div>

      {/* Middle Description */}
      <p className="text-gray-400 text-xs sm:text-sm mt-3 line-clamp-2 h-9">
        {app.description}
      </p>

      {/* Bottom Stats Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-brand-border/40 text-xs text-gray-400 font-medium">
        {/* Rating Stat */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 text-sm">⭐</span>
          <span className="text-gray-200 font-bold">{app.rating}</span>
          <span className="text-gray-500 text-[10px]">({app.reviewsCount})</span>
        </div>

        {/* Size Stat */}
        <div className="flex items-center gap-1 text-gray-500">
          <span>📦</span>
          <span>{app.size}</span>
        </div>

        {/* Price Tag with Brand Color Support */}
        <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wider ${
          app.isFree 
            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
            : 'bg-brand/10 text-brand border border-brand/20'
        }`}>
          {app.isFree ? 'FREE' : `$${app.price}`}
        </span>
      </div>

    </div>
  );
};
