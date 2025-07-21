import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                    <FaHeart className="h-6 w-6 text-teal-400" />
                    <span className="text-lg font-bold text-white">NGOTemplate</span>
                    </div>
                    <p className="text-slate-400 text-sm">
                    Creating positive impact through sustainable development and community empowerment.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                    <li>
                        <Link href="/about" className="hover:text-white transition-colors">
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-white transition-colors">
                        Our Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-white transition-colors">
                        Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-white transition-colors">
                        Contact
                        </Link>
                    </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4 text-white">Get Involved</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                    <li>
                        <Link href="/donate" className="hover:text-white transition-colors">
                        Donate
                        </Link>
                    </li>
                    <li>
                        <Link href="/volunteer" className="hover:text-white transition-colors">
                        Volunteer
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-white transition-colors">
                        Partner with Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-white transition-colors">
                        Fundraise
                        </Link>
                    </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4 text-white">Contact Info</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                    <li>123 Hope Street</li>
                    <li>New York, NY 10001</li>
                    <li>Phone: (555) 123-4567</li>
                    <li>Email: info@NGOtemplate.org</li>
                    </ul>
                </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
                <p>&copy; 2025 NGOTemplate. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}