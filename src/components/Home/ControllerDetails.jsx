import styles from "../../styles/components/ControllerDetails.module.css";
import layoutStyles from "../../styles/layout/HomeLayout.module.css";

import controller1 from "../../assets/images/controller-first.jpg";
import controller2 from "../../assets/images/controller-center.jpg";
import controller3 from "../../assets/images/controller-last.jpg";

const ControllerDetails = () => {
  return (
    <div
      id="accessories"
      className={`${styles["container"]} ${layoutStyles["container-full-screen"]}`}
    >
        <div className={styles["headings"]}>
          <div className={styles["heading"]}>DualSense 2 Controller</div>
          <div className={styles["heading"]}>The Ultimate Gaming Companion</div>
        </div>

        <div className={styles["desc"]}>
          Feel Every Moment, Control Every Move
        </div>

        <div className={styles["images-container"]}>
          <div className={styles["img-content-container"]}>
            <div className={styles["img-content"]}>
              <img src={controller1} alt="" />
            </div>
            <div className={styles["img-content"]}>
              <img src={controller2} alt="" />
            </div>
            <div className={styles["img-content"]}>
              <img src={controller3} alt="" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default ControllerDetails;
