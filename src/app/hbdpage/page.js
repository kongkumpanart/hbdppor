import styles from '@/app/styles/HbdPage.module.css';


export default function HbdPage({ searchParams }) {
    const age = searchParams.age;

    if (!age) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>

            <img src="/cake.gif" alt="Cake" className={styles.cakeImage}/>
            <h1 className={styles.title}>
              Happy Birthday to P'opor kubb<br />
              {age}yo!<br />
              Wishing you endless happiness every day.<br />
              May you enjoy good health and live the life you've always dreamed of.<br />
              Here's to your success and becoming rich kubbb!!!
            </h1>

            <img src="/balloons.gif" alt="Balloons" className={styles.balloons} />
            <img src="/rose4-unscreen.gif" alt="Rose4" className={styles.roseBottomRight} />
            <img src="/rose2-unscreen.gif" alt="Rose2" className={styles.roseBottomCenter} />
            <img src="/rose-unscreen.gif" alt="Rose" className={styles.roseTopRight} />
            <img src="/gifhbd-unscreen.gif" alt="HBD" className={styles.hbdTopLeft} />

            {/* รูป PNG เพิ่มเติม */}
            <img src="/meow.PNG" alt="Meow" className={styles.meow} />
            <img src="/star.PNG" alt="Star" className={styles.star} />
            <img src="/goodday.PNG" alt="Good Day" className={styles.goodday} />
            <img src="/cute3.PNG" alt="Cute3" className={styles.cute3} />
            <img src="/greatday.PNG" alt="Great Day" className={styles.greatday} />
            <img src="/what.PNG" alt="What" className={styles.what} />
            <img src="/cute2.PNG" alt="Cute2" className={styles.cute2} />
            <img src="/floweryou.PNG" alt="Floweryou" className={styles.floweryou} />
            <img src="/enjoy.PNG" alt="Enjoy" className={styles.enjoy} />
            <img src="/cute.PNG" alt="Cute" className={styles.cute} />
            <img src="/star2.PNG" alt="Star2" className={styles.star2} />
        </div>
    );
}
