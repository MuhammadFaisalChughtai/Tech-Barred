import React from "react";
import { ArrowUpRight, Star, ExternalLink } from "lucide-react";

const ProductCard = ({ product, index }) => {
  const Icon = product.icon;
  const isFeatured = product.isFeatured;

  return (
    <div className="card group hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full bg-slate-800/50 backdrop-blur-sm">
      {/* Category & Featured Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="px-3 py-1 bg-slate-700/50 rounded-full border border-slate-600">
          <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">
            {product.category}
          </span>
        </div>
        {index === 0 && isFeatured && (
          <div className="px-2 py-1 bg-blue-600 rounded text-[10px] font-bold text-white flex items-center gap-1 shadow-lg shadow-blue-900/20">
            <Star className="w-3 h-3 fill-current" /> FEATURED
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600/10 group-hover:text-blue-500 transition-colors border border-slate-700">
            <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors leading-tight">
              {product.name}
            </h3>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors">
          {product.description}
        </p>

        {/* Tech Stack Tags */}
        {product.tech && (
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tech.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-slate-800/80 text-[10px] font-medium text-slate-400 rounded border border-slate-700/50"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="pt-6 border-t border-slate-700/50 mt-auto flex flex-wrap gap-3">
        {product.link ? (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 flex items-center gap-2 shadow-lg shadow-blue-900/20"
          >
            {product.linkLabel || "View Project"}
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-xs text-slate-500 font-medium italic">
            Enterprise Solution
          </span>
        )}

        {product.secondaryLink && (
          <a
            href={product.secondaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2 px-4 flex items-center gap-2"
          >
            {product.secondaryLinkLabel || "Secondary Interface"}
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
