const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6 max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-foreground mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Let's create something amazing together
        </p>
        <div className="bg-card p-8 rounded-lg border border-border">
          <div className="space-y-6">
            <div className="text-left">
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
              />
            </div>
            <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
