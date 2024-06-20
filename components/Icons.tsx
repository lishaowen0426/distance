import { ComponentPropsWithoutRef, forwardRef } from "react";
const GroupIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4435 8.32258C16.5317 8.32258 14.9819 9.88236 14.9819 11.8065C14.9819 13.7305 16.5317 15.2903 18.4435 15.2903C20.3552 15.2903 21.905 13.7305 21.905 11.8065C21.905 9.88236 20.3552 8.32258 18.4435 8.32258ZM12.6743 11.8065C12.6743 8.59964 15.2572 6 18.4435 6C21.6297 6 24.2127 8.59964 24.2127 11.8065C24.2127 15.0133 21.6297 17.6129 18.4435 17.6129C15.2572 17.6129 12.6743 15.0133 12.6743 11.8065Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1672 22.2581C13.8133 22.2581 11.905 24.1786 11.905 26.5477C11.905 26.5939 11.9089 26.6312 11.9141 26.659C11.9148 26.6628 11.9155 26.6662 11.9161 26.6694C12.5324 27.0127 14.2763 27.6774 18.4435 27.6774C22.6107 27.6774 24.3546 27.0127 24.9708 26.6694C24.9715 26.6662 24.9722 26.6628 24.9729 26.659C24.9781 26.6312 24.9819 26.5939 24.9819 26.5477C24.9819 24.1786 23.0737 22.2581 20.7198 22.2581H16.1672ZM9.59733 26.5477C9.59733 22.8959 12.5388 19.9355 16.1672 19.9355H20.7198C24.3482 19.9355 27.2896 22.8959 27.2896 26.5477C27.2896 27.1993 27.0703 28.1226 26.1985 28.6383C25.1393 29.2649 22.9533 30 18.4435 30C13.9337 30 11.7477 29.2649 10.6885 28.6383C9.81671 28.1226 9.59733 27.1993 9.59733 26.5477Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.4065 8.40669C25.5728 7.78754 26.2063 7.42127 26.8215 7.58861C28.9271 8.16138 30.3666 10.2426 30.3666 12.5806C30.3666 15.0517 28.6816 17.3135 26.2734 17.6046C25.6407 17.6811 25.0662 17.2269 24.9902 16.5901C24.9142 15.9533 25.3655 15.3751 25.9982 15.2986C27.0515 15.1713 28.0589 14.0852 28.0589 12.5806C28.0589 11.1524 27.1906 10.0949 26.2194 9.83074C25.6042 9.66341 25.2403 9.02583 25.4065 8.40669Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.0802 20.8745C28.2022 20.245 28.8081 19.8342 29.4336 19.957C31.7626 20.4141 33.4435 22.4677 33.4435 24.8558V25.4837C33.4435 26.0797 33.2659 26.9803 32.439 27.5123C31.9221 27.8448 31.1387 28.1874 29.9543 28.4286C29.3297 28.5557 28.721 28.1492 28.5946 27.5206C28.4682 26.892 28.8721 26.2793 29.4967 26.1521C30.3751 25.9732 30.8714 25.7484 31.1271 25.5977L31.1275 25.5957C31.1323 25.5677 31.1358 25.5302 31.1358 25.4837V24.8558C31.1358 23.579 30.2371 22.481 28.9918 22.2366C28.3664 22.1138 27.9582 21.504 28.0802 20.8745Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4804 16.7546C11.3142 17.3738 10.6807 17.74 10.0655 17.5727C7.95986 16.9999 6.5204 14.9187 6.5204 12.5806C6.5204 10.1096 8.20538 7.84781 10.6136 7.55668C11.2463 7.48018 11.8208 7.93439 11.8968 8.57118C11.9728 9.20796 11.5215 9.78619 10.8888 9.86268C9.83543 9.99002 8.8281 11.0761 8.8281 12.5806C8.8281 14.0089 9.69633 15.0663 10.6676 15.3305C11.2828 15.4979 11.6467 16.1355 11.4804 16.7546Z"
          fill="#737373"
        />
        <path
          fill-ule="evenodd"
          clipRule="evenodd"
          d="M8.80676 20.8745C8.68478 20.245 8.07885 19.8342 7.45338 19.957C5.12438 20.4141 3.44348 22.4677 3.44348 24.8558V25.4837C3.44348 26.0797 3.62106 26.9803 4.448 27.5123C4.9649 27.8448 5.74828 28.1874 6.93262 28.4286C7.55722 28.5557 8.166 28.1492 8.29236 27.5206C8.41873 26.892 8.01483 26.2793 7.39024 26.1521C6.51181 25.9732 6.01556 25.7484 5.75983 25.5977L5.75948 25.5957C5.75471 25.5677 5.75117 25.5302 5.75117 25.4837V24.8558C5.75117 23.579 6.64989 22.481 7.89512 22.2366C8.52059 22.1138 8.92874 21.504 8.80676 20.8745Z"
          fill="#737373"
        />
      </svg>
    );
  }
);

const HeartIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6161 8.82933C15.0521 6.15729 10.7343 6.1191 7.93321 8.85581C7.92433 8.86448 7.91532 8.873 7.90617 8.88138C5.18855 11.3706 5.1484 15.5366 7.93321 18.2573L7.94052 18.2645L18.4547 28.7204L29.164 18.2573C29.1728 18.2487 29.1818 18.2401 29.191 18.2318C31.9086 15.7426 31.9488 11.5766 29.164 8.85581C26.3779 6.13378 22.0388 6.13378 19.2527 8.85581C19.0326 9.07082 18.7361 9.18894 18.4289 9.18396C18.1217 9.17899 17.8292 9.05135 17.6161 8.82933ZM18.4684 6.47719C14.9406 3.60581 9.73297 3.87901 6.33616 7.18518C2.60062 10.6207 2.64387 16.3168 6.31911 19.9113L6.32286 19.915L17.6351 31.1645C18.082 31.609 18.8018 31.6122 19.2527 31.1717L30.7614 19.9276C34.4978 16.4908 34.4531 10.7924 30.7743 7.19814C27.3572 3.85958 22.1441 3.61926 18.4684 6.47719Z"
          fill="#737373"
        />
      </svg>
    );
  }
);

const HomeIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7287 5.69302C19.079 5.24565 18.2286 5.24565 17.5789 5.69302L6.86885 13.0681C6.36922 13.4121 6.06501 13.9665 6.04252 14.5619C5.96477 16.6198 5.88236 20.2236 6.10868 22.7815C6.27941 24.7111 6.73384 27.2619 7.10296 29.1383C7.27438 30.0098 8.03287 30.6425 8.93436 30.6425H13.9203C14.1327 30.6425 14.3049 30.4666 14.3049 30.2496V23.9629C14.3049 22.4439 15.5103 21.2125 16.9972 21.2125H20.7674C22.2544 21.2125 23.4598 22.4439 23.4598 23.9629V30.2496C23.4598 30.4666 23.632 30.6425 23.8444 30.6425H28.3733C29.2747 30.6425 30.0332 30.0098 30.2047 29.1383C30.5738 27.2619 31.0282 24.7111 31.1989 22.7815C31.4253 20.2236 31.3428 16.6198 31.2651 14.5619C31.2426 13.9665 30.9384 13.4121 30.4388 13.0681L19.7287 5.69302ZM16.2891 3.73817C17.7184 2.75394 19.5892 2.75394 21.0185 3.73817L31.7286 11.1132C32.8224 11.8664 33.5195 13.1047 33.5711 14.4709C33.6487 16.5266 33.7384 20.2678 33.4973 22.9937C33.3144 25.0599 32.8379 27.7178 32.4671 29.6028C32.073 31.6065 30.3424 33 28.3733 33H23.8444C22.3574 33 21.1521 31.7686 21.1521 30.2496V23.9629C21.1521 23.7459 20.9799 23.57 20.7674 23.57H16.9972C16.7848 23.57 16.6126 23.7459 16.6126 23.9629V30.2496C16.6126 31.7686 15.4072 33 13.9203 33H8.93436C6.96522 33 5.23465 31.6065 4.8405 29.6028C4.46969 27.7178 3.99317 25.0599 3.81036 22.9937C3.56917 20.2678 3.65888 16.5266 3.73654 14.471C3.78816 13.1047 4.48522 11.8664 5.57899 11.1132L16.2891 3.73817Z"
          fill="#737373"
        />
      </svg>
    );
  }
);

const SliderIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7228 6.81429C11.8111 6.81429 10.2613 8.3685 10.2613 10.2857C10.2613 12.2029 11.8111 13.7571 13.7228 13.7571C15.6346 13.7571 17.1844 12.2029 17.1844 10.2857C17.1844 8.3685 15.6346 6.81429 13.7228 6.81429ZM7.95361 10.2857C7.95361 7.09035 10.5366 4.5 13.7228 4.5C16.9091 4.5 19.4921 7.09035 19.4921 10.2857C19.4921 13.4811 16.9091 16.0714 13.7228 16.0714C10.5366 16.0714 7.95361 13.4811 7.95361 10.2857Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.33826 10.2859C3.33826 9.64681 3.85485 9.12874 4.4921 9.12874H9.10749C9.74474 9.12874 10.2613 9.64664 10.2613 10.2857C10.2613 10.9248 9.74474 11.443 9.10749 11.443H4.4921C3.85485 11.443 3.33826 10.925 3.33826 10.2859Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1844 10.2857C17.1844 9.64664 17.7009 9.12891 18.3382 9.12891L32.1843 9.1289C32.8216 9.1289 33.3382 9.64698 33.3382 10.286C33.3382 10.9251 32.8216 11.4432 32.1843 11.4432L18.3382 11.4432C17.7009 11.4432 17.1844 10.9248 17.1844 10.2857Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.9536 22.2428C24.8654 22.2428 26.4151 23.797 26.4151 25.7142C26.4151 27.6314 24.8654 29.1856 22.9536 29.1856C21.0418 29.1856 19.4921 27.6314 19.4921 25.7142C19.4921 23.797 21.0418 22.2428 22.9536 22.2428ZM28.7228 25.7142C28.7228 22.5188 26.1399 19.9285 22.9536 19.9285C19.7673 19.9285 17.1844 22.5188 17.1844 25.7142C17.1844 28.9095 19.7673 31.4999 22.9536 31.4999C26.1399 31.4999 28.7228 28.9095 28.7228 25.7142Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.3382 25.7144C33.3382 25.0753 32.8216 24.5573 32.1844 24.5573H27.569C26.9317 24.5573 26.4151 25.0751 26.4151 25.7142C26.4151 26.3533 26.9317 26.8715 27.569 26.8715H32.1844C32.8216 26.8715 33.3382 26.3535 33.3382 25.7144Z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4921 25.7142C19.4921 25.0751 18.9755 24.5574 18.3383 24.5574L4.49214 24.5574C3.85489 24.5574 3.33829 25.0754 3.33829 25.7145C3.33829 26.3536 3.85489 26.8717 4.49214 26.8717H18.3383C18.9755 26.8717 19.4921 26.3533 19.4921 25.7142Z"
          fill="#737373"
        />
      </svg>
    );
  }
);

const LoadingIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  ({ fill, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
        {...props}
      >
        <path
          fill={fill}
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    );
  }
);

const AdjustIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M25.3334 5.33337C26.0698 5.33337 26.6667 5.93033 26.6667 6.66671V9.33337C26.6667 10.0698 26.0698 10.6667 25.3334 10.6667C24.597 10.6667 24 10.0698 24 9.33337V6.66671C24 5.93033 24.597 5.33337 25.3334 5.33337Z"
          fill="#42C83C"
        />
        <path
          d="M17.3334 22.6667C17.3334 21.9303 16.7364 21.3334 16 21.3334C15.2637 21.3334 14.6667 21.9303 14.6667 22.6667V25.3334C14.6667 26.0698 15.2637 26.6667 16 26.6667C16.7364 26.6667 17.3334 26.0698 17.3334 25.3334L17.3334 22.6667Z"
          fill="#42C83C"
        />
        <path
          d="M16 5.33337C16.7364 5.33337 17.3334 5.93033 17.3334 6.66671V17.3334C17.3334 18.0698 16.7364 18.6667 16 18.6667C15.2637 18.6667 14.6667 18.0698 14.6667 17.3334V6.66671C14.6667 5.93033 15.2637 5.33337 16 5.33337Z"
          fill="#42C83C"
        />
        <path
          d="M8.00004 6.66671C8.00004 5.93033 7.40309 5.33337 6.66671 5.33337C5.93033 5.33337 5.33337 5.93033 5.33337 6.66671L5.33337 12C5.33337 12.7364 5.93033 13.3334 6.66671 13.3334C7.40309 13.3334 8.00004 12.7364 8.00004 12L8.00004 6.66671Z"
          fill="#42C83C"
        />
        <path
          d="M8.00004 17.3334C8.00004 16.597 7.40309 16 6.66671 16C5.93033 16 5.33337 16.597 5.33337 17.3334L5.33337 25.3334C5.33337 26.0698 5.93033 26.6667 6.66671 26.6667C7.40309 26.6667 8.00004 26.0698 8.00004 25.3334L8.00004 17.3334Z"
          fill="#42C83C"
        />
        <path
          d="M26.6667 14.6667C26.6667 13.9303 26.0698 13.3334 25.3334 13.3334C24.597 13.3334 24 13.9303 24 14.6667L24 25.3334C24 26.0698 24.597 26.6667 25.3334 26.6667C26.0698 26.6667 26.6667 26.0698 26.6667 25.3334V14.6667Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.3333 16C23.1242 16 21.3333 14.2091 21.3333 12C21.3333 9.79086 23.1242 8 25.3333 8C27.5424 8 29.3333 9.79086 29.3333 12C29.3333 14.2091 27.5424 16 25.3333 16ZM25.3333 13.3333C24.5969 13.3333 24 12.7364 24 12C24 11.2636 24.5969 10.6667 25.3333 10.6667C26.0697 10.6667 26.6666 11.2636 26.6666 12C26.6666 12.7364 26.0697 13.3333 25.3333 13.3333Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20C12 22.2091 13.7908 24 16 24C18.2091 24 20 22.2091 20 20C20 17.7909 18.2091 16 16 16C13.7908 16 12 17.7909 12 20ZM14.6666 20C14.6666 20.7364 15.2636 21.3333 16 21.3333C16.7363 21.3333 17.3333 20.7364 17.3333 20C17.3333 19.2636 16.7363 18.6667 16 18.6667C15.2636 18.6667 14.6666 19.2636 14.6666 20Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.66663 14.6667C2.66663 16.8758 4.45749 18.6667 6.66663 18.6667C8.87577 18.6667 10.6666 16.8758 10.6666 14.6667C10.6666 12.4575 8.87577 10.6667 6.66663 10.6667C4.45749 10.6667 2.66663 12.4575 2.66663 14.6667ZM5.33329 14.6667C5.33329 15.403 5.93025 16 6.66663 16C7.40301 16 7.99996 15.403 7.99996 14.6667C7.99996 13.9303 7.40301 13.3333 6.66663 13.3333C5.93025 13.3333 5.33329 13.9303 5.33329 14.6667Z"
          fill="#42C83C"
        />
      </svg>
    );
  }
);
const LogoutIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6666 26.6667C14.6666 25.9303 15.2636 25.3333 16 25.3333L20.2666 25.3333C21.4087 25.3333 22.1851 25.3323 22.7852 25.2833C23.3698 25.2355 23.6687 25.1489 23.8773 25.0427C24.379 24.787 24.787 24.3791 25.0426 23.8773C25.1489 23.6688 25.2355 23.3698 25.2832 22.7853C25.3323 22.1852 25.3333 21.4088 25.3333 20.2667L25.3333 11.7333C25.3333 10.5912 25.3323 9.81484 25.2832 9.21472C25.2355 8.63016 25.1489 8.33122 25.0426 8.12269C24.787 7.62093 24.379 7.21298 23.8773 6.95732C23.6687 6.85106 23.3698 6.7645 22.7852 6.71674C22.1851 6.6677 21.4087 6.66667 20.2666 6.66667L16 6.66667C15.2636 6.66667 14.6666 6.06971 14.6666 5.33333C14.6666 4.59696 15.2636 4 16 4L20.3217 4C21.395 3.99998 22.2808 3.99997 23.0024 4.05892C23.7519 4.12016 24.4408 4.25158 25.0879 4.5813C26.0914 5.09262 26.9073 5.90852 27.4187 6.91205C27.7484 7.55916 27.8798 8.2481 27.941 8.99757C28 9.71917 28 10.605 28 11.6783V20.3218C28 21.395 28 22.2808 27.941 23.0024C27.8798 23.7519 27.7484 24.4408 27.4187 25.0879C26.9073 26.0915 26.0914 26.9074 25.0879 27.4187C24.4408 27.7484 23.7519 27.8798 23.0024 27.9411C22.2808 28 21.395 28 20.3217 28H16C15.2636 28 14.6666 27.403 14.6666 26.6667Z"
          fill="#42C83C"
        />
        <path
          d="M10.2761 19.0572C10.7968 19.5778 10.7968 20.4221 10.2761 20.9428C9.75544 21.4635 8.91122 21.4635 8.39052 20.9428L4.39052 16.9428C3.86983 16.4221 3.86983 15.5778 4.39052 15.0572L8.39052 11.0572C8.91122 10.5365 9.75544 10.5365 10.2761 11.0572C10.7968 11.5778 10.7968 12.4221 10.2761 12.9428L8.55229 14.6666H20C20.7364 14.6666 21.3333 15.2636 21.3333 16C21.3333 16.7363 20.7364 17.3333 20 17.3333H8.55229L10.2761 19.0572Z"
          fill="#42C83C"
        />
      </svg>
    );
  }
);

const QuestionIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 5.33329C10.1089 5.33329 5.33329 10.1089 5.33329 16C5.33329 21.891 10.1089 26.6666 16 26.6666C21.891 26.6666 26.6666 21.891 26.6666 16C26.6666 10.1089 21.891 5.33329 16 5.33329ZM2.66663 16C2.66663 8.63616 8.63616 2.66663 16 2.66663C23.3638 2.66663 29.3333 8.63616 29.3333 16C29.3333 23.3638 23.3638 29.3333 16 29.3333C8.63616 29.3333 2.66663 23.3638 2.66663 16Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8443 12.6677C14.4755 13.3051 13.6599 13.5229 13.0225 13.1542C12.3851 12.7855 12.1673 11.9698 12.536 11.3324C13.2256 10.1403 14.5178 9.33337 16 9.33337C18.2092 9.33337 20 11.1242 20 13.3334C20 14.797 19.1022 15.992 18 16.6667C17.1147 17.2087 17.6667 18.6667 15.9965 18.6667C15.2602 18.6667 14.6632 18.0698 14.6632 17.3334C14.6632 17.2866 14.6656 17.2403 14.6703 17.1947C14.7073 16.4896 15.0217 15.9158 15.3641 15.4986C15.7257 15.058 16.201 14.6983 16.5645 14.4822C18.5868 13.28 16.1203 10.8206 14.8443 12.6677ZM15.9965 20C15.2602 20 14.6632 20.597 14.6632 21.3334C14.6632 22.0698 15.2602 22.6667 15.9965 22.6667C16.7329 22.6667 17.3299 22.0698 17.3299 21.3334C17.3299 20.597 16.7329 20 15.9965 20Z"
          fill="#42C83C"
        />
      </svg>
    );
  }
);
const UserIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21.3333C9.7909 21.3333 8.00004 23.1242 8.00004 25.3333C8.00004 26.0697 8.59699 26.6666 9.33337 26.6666H22.6667C23.4031 26.6666 24 26.0697 24 25.3333C24 23.1242 22.2092 21.3333 20 21.3333H12ZM5.33337 25.3333C5.33337 21.6514 8.31814 18.6666 12 18.6666H20C23.6819 18.6666 26.6667 21.6514 26.6667 25.3333C26.6667 27.5424 24.8758 29.3333 22.6667 29.3333H9.33337C7.12424 29.3333 5.33337 27.5424 5.33337 25.3333Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 5.33329C13.7909 5.33329 12 7.12415 12 9.33329C12 11.5424 13.7909 13.3333 16 13.3333C18.2092 13.3333 20 11.5424 20 9.33329C20 7.12415 18.2092 5.33329 16 5.33329ZM9.33337 9.33329C9.33337 5.65139 12.3181 2.66663 16 2.66663C19.6819 2.66663 22.6667 5.65139 22.6667 9.33329C22.6667 13.0152 19.6819 16 16 16C12.3181 16 9.33337 13.0152 9.33337 9.33329Z"
          fill="#42C83C"
        />
      </svg>
    );
  }
);
const EmojiIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.30769 14.6154C8.56259 14.2755 9.04475 14.2066 9.38462 14.4615C9.84732 14.8086 10.2266 15.0172 10.6098 15.145C10.993 15.2727 11.4216 15.3333 12 15.3333C12.5784 15.3333 13.007 15.2727 13.3902 15.145C13.7734 15.0172 14.1527 14.8086 14.6154 14.4615C14.9553 14.2066 15.4374 14.2755 15.6923 14.6154C15.9472 14.9553 15.8783 15.4374 15.5385 15.6923C14.9879 16.1052 14.462 16.4094 13.8767 16.6045C13.2914 16.7996 12.6882 16.8718 12 16.8718C11.3118 16.8718 10.7086 16.7996 10.1233 16.6045C9.53802 16.4094 9.01212 16.1052 8.46154 15.6923C8.12167 15.4374 8.05279 14.9553 8.30769 14.6154Z"
          fill="#42C83C"
        />
        <path
          d="M9.94872 8.92308C9.94872 9.48952 9.48952 9.94872 8.92308 9.94872C8.35663 9.94872 7.89744 9.48952 7.89744 8.92308C7.89744 8.35663 8.35663 7.89744 8.92308 7.89744C9.48952 7.89744 9.94872 8.35663 9.94872 8.92308Z"
          fill="#42C83C"
        />
        <path
          d="M16.1026 8.92308C16.1026 9.48952 15.6434 9.94872 15.0769 9.94872C14.5105 9.94872 14.0513 9.48952 14.0513 8.92308C14.0513 8.35663 14.5105 7.89744 15.0769 7.89744C15.6434 7.89744 16.1026 8.35663 16.1026 8.92308Z"
          fill="#42C83C"
        />
      </svg>
    );
  }
);
const CategoryIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 3.58824C5.76727 3.58824 4.73635 3.76289 4.052 3.89936C3.97331 3.91505 3.91505 3.97331 3.89936 4.052C3.76289 4.73635 3.58824 5.76727 3.58824 6.5C3.58824 7.23273 3.76289 8.26365 3.89936 8.948C3.91505 9.02669 3.97331 9.08495 4.052 9.10064C4.73635 9.23711 5.76727 9.41177 6.5 9.41177C7.23273 9.41177 8.26365 9.23711 8.948 9.10064C9.02669 9.08495 9.08495 9.02669 9.10064 8.948C9.23711 8.26365 9.41177 7.23273 9.41177 6.5C9.41177 5.76727 9.23711 4.73635 9.10064 4.052C9.08495 3.97331 9.02669 3.91505 8.948 3.89936C8.26365 3.76289 7.23273 3.58824 6.5 3.58824ZM3.7414 2.34179C4.42728 2.20502 5.59496 2 6.5 2C7.40504 2 8.57272 2.20502 9.2586 2.34179C9.96673 2.483 10.517 3.03328 10.6582 3.7414C10.795 4.42728 11 5.59496 11 6.5C11 7.40504 10.795 8.57272 10.6582 9.2586C10.517 9.96673 9.96672 10.517 9.2586 10.6582C8.57272 10.795 7.40504 11 6.5 11C5.59496 11 4.42728 10.795 3.7414 10.6582C3.03327 10.517 2.483 9.96672 2.34179 9.2586C2.20502 8.57272 2 7.40504 2 6.5C2 5.59496 2.20502 4.42728 2.34179 3.7414C2.483 3.03327 3.03328 2.483 3.7414 2.34179Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 14.5882C5.76727 14.5882 4.73635 14.7629 4.052 14.8994C3.97331 14.9151 3.91505 14.9733 3.89936 15.052C3.76289 15.7363 3.58824 16.7673 3.58824 17.5C3.58824 18.2327 3.76289 19.2637 3.89936 19.948C3.91505 20.0267 3.97331 20.0849 4.052 20.1006C4.73635 20.2371 5.76727 20.4118 6.5 20.4118C7.23273 20.4118 8.26365 20.2371 8.948 20.1006C9.02669 20.0849 9.08495 20.0267 9.10064 19.948C9.23711 19.2637 9.41177 18.2327 9.41177 17.5C9.41177 16.7673 9.23711 15.7363 9.10064 15.052C9.08495 14.9733 9.02669 14.9151 8.948 14.8994C8.26365 14.7629 7.23273 14.5882 6.5 14.5882ZM3.7414 13.3418C4.42728 13.205 5.59496 13 6.5 13C7.40504 13 8.57272 13.205 9.2586 13.3418C9.96673 13.483 10.517 14.0333 10.6582 14.7414C10.795 15.4273 11 16.595 11 17.5C11 18.405 10.795 19.5727 10.6582 20.2586C10.517 20.9667 9.96672 21.517 9.2586 21.6582C8.57272 21.795 7.40504 22 6.5 22C5.59496 22 4.42728 21.795 3.7414 21.6582C3.03327 21.517 2.483 20.9667 2.34179 20.2586C2.20502 19.5727 2 18.405 2 17.5C2 16.595 2.20502 15.4273 2.34179 14.7414C2.483 14.0333 3.03328 13.483 3.7414 13.3418Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 3.58824C16.7673 3.58824 15.7363 3.76289 15.052 3.89936C14.9733 3.91505 14.9151 3.97331 14.8994 4.052C14.7629 4.73635 14.5882 5.76727 14.5882 6.5C14.5882 7.23273 14.7629 8.26365 14.8994 8.948C14.9151 9.02669 14.9733 9.08495 15.052 9.10064C15.7363 9.23711 16.7673 9.41177 17.5 9.41177C18.2327 9.41177 19.2637 9.23711 19.948 9.10064C20.0267 9.08495 20.0849 9.02669 20.1006 8.948C20.2371 8.26365 20.4118 7.23273 20.4118 6.5C20.4118 5.76727 20.2371 4.73635 20.1006 4.052C20.0849 3.97331 20.0267 3.91505 19.948 3.89936C19.2637 3.76289 18.2327 3.58824 17.5 3.58824ZM14.7414 2.34179C15.4273 2.20502 16.595 2 17.5 2C18.405 2 19.5727 2.20502 20.2586 2.34179C20.9667 2.483 21.517 3.03328 21.6582 3.7414C21.795 4.42728 22 5.59496 22 6.5C22 7.40504 21.795 8.57272 21.6582 9.2586C21.517 9.96673 20.9667 10.517 20.2586 10.6582C19.5727 10.795 18.405 11 17.5 11C16.595 11 15.4273 10.795 14.7414 10.6582C14.0333 10.517 13.483 9.96672 13.3418 9.2586C13.205 8.57272 13 7.40504 13 6.5C13 5.59496 13.205 4.42728 13.3418 3.7414C13.483 3.03327 14.0333 2.483 14.7414 2.34179Z"
          fill="#42C83C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 14.5882C16.7673 14.5882 15.7363 14.7629 15.052 14.8994C14.9733 14.9151 14.9151 14.9733 14.8994 15.052C14.7629 15.7363 14.5882 16.7673 14.5882 17.5C14.5882 18.2327 14.7629 19.2637 14.8994 19.948C14.9151 20.0267 14.9733 20.0849 15.052 20.1006C15.7363 20.2371 16.7673 20.4118 17.5 20.4118C18.2327 20.4118 19.2637 20.2371 19.948 20.1006C20.0267 20.0849 20.0849 20.0267 20.1006 19.948C20.2371 19.2637 20.4118 18.2327 20.4118 17.5C20.4118 16.7673 20.2371 15.7363 20.1006 15.052C20.0849 14.9733 20.0267 14.9151 19.948 14.8994C19.2637 14.7629 18.2327 14.5882 17.5 14.5882ZM14.7414 13.3418C15.4273 13.205 16.595 13 17.5 13C18.405 13 19.5727 13.205 20.2586 13.3418C20.9667 13.483 21.517 14.0333 21.6582 14.7414C21.795 15.4273 22 16.595 22 17.5C22 18.405 21.795 19.5727 21.6582 20.2586C21.517 20.9667 20.9667 21.517 20.2586 21.6582C19.5727 21.795 18.405 22 17.5 22C16.595 22 15.4273 21.795 14.7414 21.6582C14.0333 21.517 13.483 20.9667 13.3418 20.2586C13.205 19.5727 13 18.405 13 17.5C13 16.595 13.205 15.4273 13.3418 14.7414C13.483 14.0333 14.0333 13.483 14.7414 13.3418Z"
          fill="#42C83C"
        />
      </svg>
    );
  }
);
const ArrowDownIcon = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<"svg">
>((props, ref) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5303 9.96967C18.8232 10.2626 18.8232 10.7374 18.5303 11.0303L12.5303 17.0303C12.2374 17.3232 11.7626 17.3232 11.4697 17.0303L5.46967 11.0303C5.17678 10.7374 5.17678 10.2626 5.46967 9.96967C5.76256 9.67678 6.23744 9.67678 6.53033 9.96967L12 15.4393L17.4697 9.96967C17.7626 9.67678 18.2374 9.67678 18.5303 9.96967Z"
        fill="#DDDDDD"
      />
    </svg>
  );
});

const Polygon1Icon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  ({ width, height, id, className, ...props }, ref) => {
    return (
      <svg
        id={id}
        ref={ref}
        width={width || "1290"}
        height={height || "1242"}
        viewBox="0 0 1290 1242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g filter="url(#filter0_f_105_53)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M646.36 305.085C696.961 314.355 733.111 354.619 776.434 381.199C815.096 404.92 861.41 419.129 889.171 454.058C916.757 488.765 915.954 535.628 931.667 576.51C949.567 623.08 995.305 663.814 988.703 713.008C982.177 761.643 933.967 794.749 897.712 829.546C863.946 861.954 826.971 890.664 783.521 909.937C740.374 929.076 693.824 944.391 646.36 941.041C599.905 937.762 559.441 912.669 518.648 891.241C479.434 870.643 440.243 849.704 410.988 817.403C381.203 784.517 365.579 743.603 348.466 703.341C329.064 657.691 288.208 611.059 303.261 563.942C318.593 515.952 391.579 509.103 423.309 469.073C456.191 427.59 446.547 360.44 489.743 328.683C532.119 297.527 593.797 295.457 646.36 305.085Z"
            fill="url(#paint0_linear_105_53)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_105_53"
            x="0"
            y="0"
            width="1289.35"
            height="1241.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_105_53"
            />
          </filter>
          <linearGradient
            id="paint0_linear_105_53"
            x1="644.675"
            y1="300"
            x2="644.675"
            y2="941.503"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3FE8FF" />
            <stop offset="1" stopColor="#52FF00" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
const Polygon2Icon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  ({ width, height, id, className, ...props }, ref) => {
    return (
      <svg
        width={width || "905"}
        height={height || "888"}
        id={id}
        className={className}
        viewBox="0 0 905 888"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_110_54)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M593.071 484.519C583.223 505.286 560.956 516.183 544.083 531.78C529.026 545.699 517.42 564.035 498.505 571.934C479.71 579.783 458.582 573.949 438.318 575.948C415.234 578.225 391.683 593.208 370.148 584.597C348.857 576.083 339.252 551.387 327.547 531.656C316.645 513.28 307.776 493.95 303.903 472.93C300.056 452.056 298.321 430.16 305.139 410.055C311.812 390.377 327.692 375.841 341.949 360.733C355.655 346.211 369.512 331.738 387.404 322.886C405.62 313.874 425.889 311.917 446.029 309.242C468.864 306.208 494.54 294.025 514.191 306.042C534.207 318.282 529.156 350.603 543.736 368.993C558.846 388.051 590.325 391.749 599.879 414.121C609.252 436.069 603.301 462.947 593.071 484.519Z"
            fill="url(#paint0_linear_110_54)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_110_54"
            x="0.519409"
            y="0.847168"
            width="904.043"
            height="886.394"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_110_54"
            />
          </filter>
          <linearGradient
            id="paint0_linear_110_54"
            x1="595.562"
            y1="484.387"
            x2="305.118"
            y2="409.273"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF613F" />
            <stop offset="1" stopColor="#EB00FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
export {
  GroupIcon,
  HeartIcon,
  HomeIcon,
  SliderIcon,
  LoadingIcon,
  AdjustIcon,
  LogoutIcon,
  QuestionIcon,
  UserIcon,
  EmojiIcon,
  CategoryIcon,
  ArrowDownIcon,
  Polygon1Icon,
  Polygon2Icon,
};
