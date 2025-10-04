const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "3D Animations", level: 80 },
    { name: "UI/UX Design", level: 88 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-foreground mb-6">Our Skills</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Expertise in modern web technologies and design
        </p>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-card p-6 rounded-lg border border-border">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-card-foreground">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
