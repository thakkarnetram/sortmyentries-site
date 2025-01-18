"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
    const [isClient, setIsClient] = useState(false);
    const [eventCount, setEventCount] = useState(0);
    const [concertCount, setConcertCount] = useState(0);
    const [clubCount, setClubCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    useEffect(() => {
        setIsClient(true); // Ensure this runs only on the client
    }, []);

    useEffect(() => {
        if (isClient) {
            const numbersSection = document.getElementById("numbers");
            let hasAnimated = false;

            const animateNumbers = () => {
                const incrementEvent = 100 / 100;
                const incrementConcert = 30 / 100;
                const incrementClub = 50 / 100;
                const incrementOther = 10 / 100;
                let eventCountValue = 0;
                let concertCountValue = 0;
                let clubCountValue = 0;
                let otherCountValue = 0;

                const updateCount = () => {
                    if (eventCountValue < 100) {
                        eventCountValue += incrementEvent;
                        setEventCount(Math.ceil(eventCountValue));
                    }
                    if (concertCountValue < 30) {
                        concertCountValue += incrementConcert;
                        setConcertCount(Math.ceil(concertCountValue));
                    }
                    if (clubCountValue < 50) {
                        clubCountValue += incrementClub;
                        setClubCount(Math.ceil(clubCountValue));
                    }
                    if (otherCountValue < 10) {
                        otherCountValue += incrementOther;
                        setOtherCount(Math.ceil(otherCountValue));
                    }

                    if (eventCountValue < 100 || concertCountValue < 30 || clubCountValue < 50 || otherCountValue < 10) {
                        setTimeout(updateCount, 12);
                    }
                };

                updateCount();
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
        }
    }, [isClient]);

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
                    <h3 className={styles.numberTitle}>{eventCount}+</h3>
                    <p className={styles.numberDescription}>Events Listed</p>
                </div>
                <div className={styles.numberItem}>
                    <h3 className={styles.numberTitle}>{concertCount}+</h3>
                    <p className={styles.numberDescription}>Concerts</p>
                </div>
                <div className={styles.numberItem}>
                    <h3 className={styles.numberTitle}>{clubCount}+</h3>
                    <p className={styles.numberDescription}>Clubs</p>
                </div>
                <div className={styles.numberItem}>
                    <h3 className={styles.numberTitle}>{otherCount}+</h3>
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
