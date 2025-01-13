"use client";
import styles from "./landing.module.css";
import Link from "next/link";

export default function Landing() {
    return (
        <div>
            <h2>Sort My Entries | Ticketing Platform</h2>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
        </div>
    );
}
