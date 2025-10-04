const Home = () => {
  return (
    <div className="min-h-full flex items-center justify-center bg-background py-12">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-foreground mb-6">Welcome Home</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience smooth 3D card flip animations as you navigate through our pages.
          Click any navigation link to see the magic happen!
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Feature {i}</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful card animations and transitions throughout the app
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
