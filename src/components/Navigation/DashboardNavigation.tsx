import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxDashboard } from "react-icons/rx";
import { FaSignOutAlt, FaHome } from "react-icons/fa";

export default function DashboardNavigation() {
    return (
        <nav className="flex items-center justify-center min-h-screen w-[275px] bg-white rounded-tr-xl rounded-br-md top-0 fixed">
            <p>Some text</p>
        </nav>
    );
}
