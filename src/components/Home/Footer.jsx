import styles from "../../styles/components/Footer.module.css";

import logo from "../../assets/icons/ps_logo.png";

import facebookIcon from "../../assets/icons/Facebook.png";
import instagramIcon from "../../assets/icons/Instagram_Circle.png";
import xIcon from "../../assets/icons/X.png";
import youtubeIcon from "../../assets/icons/YouTube Logo.png";

import globe from "../../assets/icons/Geography.png"

const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      links: [
        "About SIE",
        "Careers",
        "PlayStation Studios",
        "PlayStation",
        "Productions",
      ],
    },
    {
      title: "Products",
      links: ["PS5", "PS4", "PS VR2", "Accessories"],
    },
    {
      title: "Values",
      links: [
        "Environment",
        "Accessibility",
        "Online safety",
        "Diversity & inclusion",
      ],
    },
    {
      title: "Support",
      links: [
        "Support hub",
        "PlayStation Safety",
        "PSN Status",
        "PlayStation Repairs",
      ],
    },
    {
      title: "Resources",
      links: [
        "PSN terms of service",
        "PS Store cancellation policy",
        "Age ratings",
        "Health warning",
      ],
    },
    {
      title: "Connect",
      iconRow: [
        { link: "https://www.facebook.com/playstation", icon: facebookIcon },
        { link: "https://www.instagram.com/playstation", icon: instagramIcon },
        { link: "https://x.com/PlayStation", icon: xIcon },
        { link: "https://www.youtube.com/PlayStation", icon: youtubeIcon },
      ],
      links: ["iOS app", "Android app"],
    },
  ];

return (
    <div id="contact" className={styles["container"]}>
        <div className={`${styles["row"]} ${styles["logo-container"]}`}>
            <div className={styles["logo"]}>
                <img src={logo} alt="" />
            </div>
            <div className={styles["logo-text"]}>PLAYSTATION</div>
        </div>
        <div className={`${styles["row"]} ${styles["about-container"]}`}>
            {footerLinks.map((item, index) => (
                <div key={index} className={styles["col"]}>
                    <div className={styles["col-title"]}>{item.title}</div>
                    <div className={styles["col-container"]}>
                        <div className={styles["icons-container"]}>
                            {item.iconRow &&
                                item.iconRow.map((icon, index) => (
                                    <a key={index} href={icon.link}>
                                        <img src={icon.icon} alt="" />
                                    </a>
                                ))}
                        </div>
                        {item.links.map((link, index) => (
                            <a key={index} href="https://www.playstation.com/en-in/">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className={`${styles["row"]} ${styles["company-info"]}`}>
            <div className={styles["title"]}>SONY INTERACTIVE ENTERTAINMENT</div>
            <div className={styles["desc"]}>© 2025 Sony Interactive Entertainment Europe Limited (SIEE)</div>
            <div className={styles["desc"]}>All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks copyright material of their respective owners. All rights reserved.</div>
        </div>
        <div className={`${styles["row"]} ${styles["copyright"]}`}>
            <div className={styles["left"]}>
                <img src={globe} alt="" />
                <div className={styles["country"]}>India</div>
            </div>
            <div className={styles["right"]}>
                Legal | Privacy policy | Website terms of use | Site Map | Cookies Policy | Software Usage Terms
            </div>
        </div>
    </div>
);
};

export default Footer;
