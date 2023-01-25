import { Image } from "../";

function FirstSection() {
  return (
    <div className="relative py-9 border-b-[.2px] border-opacity-10 border-b-slate-200">
      <h5 className="absolute top-[100px] text-lg  font-semibold">
        Active paymaster
      </h5>
      <div className="active-first-section">
        <div className="active-logo">
          <Image
            src="/assets/pm-icons/zeta.png"
            alt="paymaster active logo"
            blurDataURL="/assets/pm-icons/zeta.png"
            width={36}
            height={36}
            priority
          />
        </div>
        <p>
          <span className="font-bold text-xl">ZetaChain</span>
          <br />
          <span className="text-white text-opacity-30">
            {" "}
            Lorem ipsum dolor sit amet consectetur. In vulputate ac elit.
          </span>
        </p>
        <div className="active-text">
          <h5>
            Active{" "}
            <span>
              {" "}
              <Image
                src="/assets/pm-icons/check.png"
                alt="paymaster active check"
                blurDataURL="/assets/pm-icons/check.png"
                width={8}
                height={7}
                priority
              />
            </span>
          </h5>
        </div>
      </div>
      <div className="relative mt-[99px]">
        <label htmlFor="search"></label>
        <input
          type="text"
          placeholder="Search paymasters"
          className="w-[360px] sm:w-[645px] h-[45px] pl-10 bg-black bg-opacity-20 "
          name="paymastersearch"
          id="search"
        />
        <span className="absolute left-4 mt-3">
          <Image
            src="/assets/pm-icons/search.png"
            alt="paymaster active logo"
            blurDataURL="/assets/pm-icons/search.png"
            width={17}
            height={17}
            priority
          />
        </span>
      </div>
    </div>
  );
}

export default FirstSection;