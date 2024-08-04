import styles from "./components/footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.parentfooter}>
      <div className={styles.Smackathon_footer}>
        <div className={styles.Footer}>
          <div className={styles.dog}>
            <Image
              className={styles.background_img}
              src="/images/footer/DuckLaugh1.gif"
              alt="alt"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.Duck}>
            <Image
              src="/images/footer/duckGIF.gif"
              alt="duck"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.footerContents}>
            <div className={styles.footerLeft}>
              <div className={styles.logos_All}>
                <Image
                  src="/images/footer/Upsurge_Logo.png"
                  alt="upsurge"
                  width={200}
                  height={100}
                  className={styles.upsurge_logo}
                />
                <div className={styles.logo}>
                  <Image
                    src="/images/footer/ACM_final.png"
                    alt="acm"
                    width={150}
                    height={90}
                    className={styles.acm}
                  />
                  <Image
                    src="/images/footer/cosmosLogo.png"
                    alt="cosmos"
                    width={120}
                    height={100}
                    className={styles.cosmos}
                  />
                </div>
              </div>
            </div>

            <div className={styles.footerCenter}>
              <div className={styles.Links_all}>
                <Link href="href" className={styles.link_smackathon}>
                  Smackathon
                </Link>
                <Link href="href" className={styles.link_schedule}>
                  Schedule
                </Link>
                <Link href="href" className={styles.link_events}>
                  Events
                </Link>
                <Link href="href" className={styles.link_team}>
                  Team
                </Link>
              </div>
            </div>
            <div className={styles.footerRight}>
              <div className={styles.socials}>
                <h3 className={styles.follow_us}>Follow US</h3>
                <div className={styles.social_logo}>
                  <a href="#">
                    <Image
                      src="/svgs/footer//instagram.svg"
                      alt="instagram"
                      width={50}
                      height={50}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/svgs/footer//linkedin.svg"
                      alt="linkedin"
                      width={50}
                      height={50}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/svgs/footer/discord.svg"
                      alt="discord"
                      width={50}
                      height={50}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/svgs/footer/twitter.svg"
                      alt="twitter"
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
                <div className={styles.find_us}>
                  <h3 className={styles.findUs_heading}>Find Us</h3>
                  <p className={styles.findUs_para}>
                    CSE Dept, YCCE College <br />
                    Wanadongri, Nagpur
                  </p>
                </div>
                <div className={styles.contact_us}>
                  <h3 className="">Contact Us</h3>
                  <div className={styles.contact_details}>
                    <div className={styles.smackathon_contact_details}>
                      <p className="">John Doe</p>
                      <p className="">985678976</p>
                    </div>
                    <div className={styles.smackathon_contact_details}>
                      <p className="">John Doe</p>
                      <p className="">985678976</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyrightPara}>
            &copy; Copyrights belongs to Department Of Computer Science and
            Engineering
            <br /> Developed by&nbsp;
            <a className={styles.a} href="">
              Website Team CSE
            </a>
            <br />
            <a className={styles.a} href="">
              Privacy Policy
            </a>
            ,
            <a className={styles.a} href="">
              No Refund Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
