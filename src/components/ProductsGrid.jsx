import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { Layers, Rocket, Globe } from "lucide-react";

const ProductsGrid = () => {
  const featuredProjects = products.filter((p) => p.isFeatured);
  const extraProjects = products.filter((p) => !p.isFeatured);

  return (
    <section id="products" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container-custom">
        {/* Main Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">
              Professional Experience
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
            Company <span className="text-blue-500 font-extrabold">Portfolio</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade digital infrastructure and data engineering solutions engineered for global scale and mission-critical reliability.
          </p>
        </div>

        {/* Featured Ecosystems */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500 border border-blue-500/20">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Featured Ecosystems</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Strategic Solutions */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Strategic Enterprise Solutions</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraProjects.map((product, index) => (
              <div key={product.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <ProductCard product={product} index={index + featuredProjects.length} />
              </div>
            ))}
          </div>
        </div>

        {/* Professional Guarantee CTA */}
        <div className="relative p-1 px-1 bg-gradient-to-r from-blue-600/30 via-slate-700/50 to-blue-600/30 rounded-2xl">
          <div className="card text-center bg-slate-900 border-none p-12 md:p-16 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Engineering Custom Digital Excellence
            </h3>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Leverage our expertise in full-stack development, cloud architecture, and data engineering to build your next mission-critical platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#contact" className="btn-primary px-8 py-4 text-base shadow-2xl shadow-blue-900/40">
                Consult with our Team
              </a>
              <a href="/#about" className="btn-outline px-8 py-4 text-base">
                Our Methodology
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
