"use client";
import styles from "./splash.module.css";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Splash() {
    const router = useRouter();
    useEffect(()=> {
        setTimeout(()=>{
            router.push("/landing");
        },3000);
    },[router]);
    return (
        <div>
            <h3>Splash</h3>
        </div>
    );
}
