"use client";
import Head from "next/head";
import {useEffect} from "react";
import styles from "./page.module.css";

export default function Home() {
    useEffect(() => {
        const numbersSection = document.getElementById("numbers");
        const numbers = document.querySelectorAll(".numberItem h3");
        let hasAnimated = false;

        const animateNumbers = () => {
            numbers.forEach((number) => {
                const target = +number.getAttribute("data-target");
                const increment = target / 100; // Adjust speed
                let count = 0;

                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        number.textContent = Math.ceil(count);
                        setTimeout(updateCount, 12); // Adjust speed
                    } else {
                        number.textContent = `${target}+`; // Final value
                    }
                };

                updateCount();
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    numbersSection.classList.add("visible");
                    animateNumbers();
                }
            },
            { threshold: 0.5 }
        );

        if (numbersSection) {
            observer.observe(numbersSection);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>SORTMYENTRIES</title>
            </Head>

            <header className={styles.header}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>SORTMYENTRIES</div>
                    <div className={styles.navLinks}>
                        <a href="#option1" className={styles.navLink}>Events</a>
                        <a href="#option1" className={styles.navLink}>Organizers</a>
                        <a href="#option2" className={styles.navLink}>Booking History</a>
                        <a href="#option1" className={styles.navLink}>My Profile</a>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.centerContent}>
                    <h1 className={styles.centerTitle}>SORTMYENTRIES</h1>
                    <p className={styles.centerDescription}>Where Moments Turn into Memory</p>
                </div>
            </main>

            <section className={styles.eventsPromo}>
                <div className={styles.content}>
                    <h2 className={styles.eventsTitle}>Discover Exciting Events!</h2>
                    <p className={styles.eventsText}>
                        Discover exciting events near you! From live concerts and sports matches to vibrant club nights and captivating theater performances, there’s something for everyone. Explore our curated list and find your next great outing today!
                    </p>
                    <a href="/events" className={styles.eventsLink}>
                        Visit Events Page
                        <span className={styles.linkIcon}>➔</span>
                    </a>
                </div>
            </section>

            <div className={styles.numbers} id="numbers">
                <div className={styles.numberItem}>
                    <h3 data-target="100" className={styles.numberTitle}>0</h3>
                    <p className={styles.numberDescription}>Events Listed</p>
                </div>
                <div className={styles.numberItem}>
                    <h3 data-target="30" className={styles.numberTitle}>0</h3>
                    <p className={styles.numberDescription}>Concerts</p>
                </div>
                <div className={styles.numberItem}>
                    <h3 data-target="50" className={styles.numberTitle}>0</h3>
                    <p className={styles.numberDescription}>Clubs</p>
                </div>
                <div className={styles.numberItem}>
                    <h3 data-target="10" className={styles.numberTitle}>0</h3>
                    <p className={styles.numberDescription}>Others</p>
                </div>
            </div>

            <section className={styles.listPromo}>
                <div className={styles.content}>
                    <h2 className={styles.eventsTitle}>List Your Events!</h2>
                    <p className={styles.eventsText}>
                        Showcase your events to the world! Whether it’s a thrilling concert, an electrifying sports match, a lively club night, or a captivating theater performance, our platform is the perfect place to connect with your audience. List your events today and let us help you reach more attendees!
                    </p>
                    <a href="/events" className={styles.eventsLink}>
                        Visit Events Page
                        <span className={styles.linkIcon}>➔</span>
                    </a>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.tagline}>"YOUR GATEWAY TO EVENTS"</div>
                    <div className={styles.footerButtons}>
                        <button className={styles.btn}>PRIVACY POLICY</button>
                        <button className={styles.btn}>CAREERS</button>
                        <button className={styles.btn}>SERVICES</button>
                        <button className={styles.btn}>SUPPORT</button>
                        <button className={styles.btn}>REFUND & CANCELLATIONS</button>
                    </div>
                </div>
            </footer>
        </>
    );
}
