import React from "react";
import ss from "./index.module.css";

const Profile: React.FC = () => {
  return (
    <>
      {/* hero section */}
      <div className={`${ss.hero} ${ss.container}`}>
        <div>
          <h1 className={ss.head}>
            Hello <span className={ss.span} />
          </h1>
          <h1 className={ss.head}>
            My name is <span className={ss.span} />
          </h1>
          <h1 className={ss.head}>
            Yuu <span className={ss.span} />
          </h1>
          <a className={ss.btn} href="#/">
            click
          </a>
        </div>
      </div>
      {/* end hero section */}

      {/* service section */}
      <div className={`${ss.container} ${ss.service}`}>
        <div className={ss.serviceTop}>
          <h1>Service</h1>
          <p>
            efeffsfefseegseesgsesfgegesksdinbfalaidfslef;fja;fi;fanf
            fsieflsefjiesglsiegjegeslgjlsg;aiaeiaoip slefjselifj
          </p>
        </div>
        <div className={ss.serviceBottom}>
          <div className={ss.serviceItem}>
            <div className={ss.icon}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1154"
                width="200"
                height="200"
              >
                <path
                  d="M874.666667 896H618.666667a21.333333 21.333333 0 0 1-21.333334-21.333333V640h-170.666666v234.666667a21.333333 21.333333 0 0 1-21.333334 21.333333H149.333333a21.333333 21.333333 0 0 1-21.333333-21.333333V405.333333a21.376 21.376 0 0 1 9.024-17.429333l362.666667-256a21.354667 21.354667 0 0 1 24.618666 0l362.666667 256A21.376 21.376 0 0 1 896 405.333333v469.333334a21.333333 21.333333 0 0 1-21.333333 21.333333z m-234.666667-42.666667h213.333333V416.405333L512 175.445333 170.666667 416.405333V853.333333h213.333333V618.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h213.333334a21.333333 21.333333 0 0 1 21.333333 21.333334z"
                  fill="#646464"
                  p-id="1155"
                ></path>
              </svg>
            </div>
            <h2>Web Design</h2>
            <p>
              efeffsfefseegseesgsesfgegesksdinbfalaidfslef;fja;fi;fanf
              fsieflsefjiesglsiegjegeslgjlsg;aiaeiaoip slefjselifj
            </p>
          </div>
        </div>
      </div>
      {/* end service section */}
    </>
  );
};

export default Profile;
