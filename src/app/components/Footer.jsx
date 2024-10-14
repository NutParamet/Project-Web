import React from 'react';

export default function Footer(){
    return (
        <footer className="bg-gray-800 text-white">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-bold">Company Name</h3>
                        <p className="mt-2 text-sm">
                            © {new Date().getFullYear()} Company Name. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="/about" className="text-sm hover:underline">About Us</a>
                        <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
                        <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
                        <a href="/contact" className="text-sm hover:underline">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
