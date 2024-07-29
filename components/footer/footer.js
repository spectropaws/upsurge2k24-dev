import styles from "../../styles/footer.module.css";
import Image from "next/image";

export default function footer() {
  return (
    <footer className={styles.parentfooter}>
      <div className={styles.Smackathon_footer}>
        <div className={styles.Footer}>
          <div className={styles.dog}>
            <Image
              className={styles.background_img}
              src="/LAUGH1122.gif"
              alt="alt"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.footerContents}>
            <div className={styles.footerLeft}>
              <div className={styles.logos_All}>
                <img
                  src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/smackathon/Upsurge_Logo.png"
                  alt="upsurge"
                  className={styles.upsurge_logo}
                />
                <div className={styles.logo}>
                  <img
                    src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/ACM_final.png"
                    alt="scm"
                    width="100"
                    className={styles.acm}
                  />
                  <img
                    src="https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/images/cosmos+new+logo.png"
                    width="100"
                    alt="cosmos"
                    className={styles.cosmos}
                  />
                </div>
              </div>
            </div>

            <div className={styles.footerCenter}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              inventore ad facere libero quia eius, cumque dicta earum ipsum,
              minima expedita voluptatibus atque maiores itaque ducimus non
              perspiciatis dolorem sed! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Omnis aut dignissimos rem numquam vitae amet quo
              veritatis minus nulla dicta nesciunt blanditiis earum, quia
              officia temporibus rerum molestiae asperiores error! Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Omnis aut
              dignissimos rem numquam vitae amet quo veritatis minus nulla dicta
              nesciunt blanditiis earum, quia officia temporibus rerum molestiae
              asperiores error!
            </div>
            <div className={styles.footerRight}>
              <p>
                hello Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quasi illo nam quibusdam incidunt quo fugiat, iste quis maxime
                perspiciatis commodi facere, voluptate, perferendis obcaecati
                distinctio vitae quos numquam repellat culpa. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Omnis aut dignissimos rem
                numquam vitae amet quo veritatis minus nulla dicta nesciunt
                blanditiis earum, quia officia temporibus rerum molestiae
                asperiores error! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Omnis aut dignissimos rem numquam vitae amet
                quo veritatis minus nulla dicta nesciunt blanditiis earum, quia
                officia temporibus rerum molestiae asperiores error!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyrightPara}>
            © Copyrights belongs to Department Of Computer Science and
            Engineering
            <br /> Developed by{" "}
            <a className={styles.a} href="">
              Website Team CSE
            </a>
            <br />
            <a className={styles.a} href="">
              Privacy Policy
            </a>{" "}
            ,{" "}
            <a className={styles.a} href="">
              No Refund Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
