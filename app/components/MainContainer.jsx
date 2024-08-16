"use client";

import Navbar from "./Navbar";
import Footer from "../components/Footer";


export default function MainContainer({ children }) {
    return <div>
        <Navbar />
        {children}
        <div className="bg-[#2C0233]">
        <Footer />
        </div>
    </div>;
}
