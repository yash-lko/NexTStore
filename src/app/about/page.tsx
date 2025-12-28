import { Users, Target, Building2, Star } from "lucide-react";
import SearchReset from "@/components/SearchReset";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-black px-6 py-16">
            <SearchReset/>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700 text-lg max-w-2xl">
                    We are committed to creating seamless and innovative digital
                    experiences. Our mission is to deliver high-quality products that
                    empower users and help businesses grow.
                </p>
                <div className="grid md:grid-cols-2 gap-10 mt-16">
                    <div className="border border-black rounded-xl p-6 hover:shadow-xl transition">
                        <Target className="w-10 h-10 mb-4 text-pink-500" />
                        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To build products that are simple, powerful, and delightful to use.
                            We believe in quality, speed, and user-focused design.
                        </p>
                    </div>
                    <div className="border border-black rounded-xl p-6 hover:shadow-xl transition">
                        <Users className="w-10 h-10 mb-4  text-pink-500" />
                        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A team of passionate designers, developers, and creators working
                            together to bring ideas to life.
                        </p>
                    </div>
                    <div className="border border-black rounded-xl p-6 hover:shadow-xl transition">
                        <Building2 className="w-10 h-10 mb-4  text-pink-500" />
                        <h2 className="text-2xl font-semibold mb-2">Our Company</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Built with strong values — innovation, transparency, and a drive
                            to make impactful products.
                        </p>
                    </div>
                    <div className="border border-black rounded-xl p-6 hover:shadow-xl transition">
                        <Star className="w-10 h-10 mb-4  text-pink-500" />
                        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We focus on craftsmanship, attention to detail, and delivering
                            excellent experiences end-to-end.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
