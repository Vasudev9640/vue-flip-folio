const About = () => {
  return (
    <div className="min-h-full flex items-center justify-center bg-background py-12">
      <div className="text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-foreground mb-6">About Us</h1>
        <div className="bg-card p-8 rounded-lg border border-border">
          <p className="text-lg text-muted-foreground mb-6">
            We are passionate developers creating amazing web experiences with cutting-edge
            technologies and beautiful animations.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Our mission is to bring your ideas to life with stunning visual effects and
            seamless user experiences.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
