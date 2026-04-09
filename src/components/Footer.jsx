function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-700/60 bg-slate-900/80 px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center justify-center text-sm font-medium text-slate-300">
        <span className="mr-2 text-slate-400">Build by:</span>

       <a href="https://codelabs-by-kumarsai.netlify.app/" target="_blank" rel="noopener noreferrer">
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/70 px-4 py-1 shadow-lg shadow-black/20">
            <span className="text-lg font-bold text-red-500"></span>
            <span className="text-lg font-bold text-slate-100">Code</span>
            <span className="text-lg font-bold text-red-500 underline decoration-red-500 underline-offset-4">
              Labs
            </span>
          <span className="text-lg font-bold text-red-500"></span>
        </span>
         </a>
      </div>
    </footer>
  );
}

export default Footer;