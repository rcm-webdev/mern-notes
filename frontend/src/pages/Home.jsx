import { Link } from "react-router";
import { BookOpen, FilePlus2, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Hero Section */}
            <div className="text-center py-16">
                <div className="mb-8">
                    <Sparkles className="size-20 text-primary mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Capture Your Thoughts
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Instantly</span>
                    </h1>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
                        A simple, beautiful notes app that helps you organize your ideas, 
                        thoughts, and memories in one secure place.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/register" 
                            className="btn btn-primary btn-lg"
                        >
                            Get Started Free
                            <ArrowRight className="size-5 ml-2" />
                        </Link>
                        <Link 
                            to="/login" 
                            className="btn btn-outline btn-lg"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose Our Notes App?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <BookOpen className="size-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Simple & Clean</h3>
                        <p className="text-base-content/70">
                            Focus on your content with our minimalist, distraction-free interface.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <FilePlus2 className="size-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Create Instantly</h3>
                        <p className="text-base-content/70">
                            Start writing immediately with our fast, responsive note creation.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <CheckCircle className="size-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Always Secure</h3>
                        <p className="text-base-content/70">
                            Your notes are protected with secure authentication and data encryption.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 text-center">
                <div className="bg-base-200 rounded-2xl p-8 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">
                        Ready to Start Organizing Your Thoughts?
                    </h2>
                    <p className="text-base-content/70 mb-6">
                        Join thousands of users who trust our app to capture their ideas and memories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/register" 
                            className="btn btn-primary"
                        >
                            Create Free Account
                        </Link>
                        <Link 
                            to="/login" 
                            className="btn btn-outline"
                        >
                            Sign In to Existing Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;