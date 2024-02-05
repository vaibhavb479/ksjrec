import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        HEAD HUNTING & <br className="sm:block hidden" /> RPO, TURNKEY HIRING
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Setting up the complete office with respect to the manpower requirements
        where client can concentrate core business & operations.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="hiring" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
