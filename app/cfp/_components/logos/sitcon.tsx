export default function SitconLogo({
  className,
  height = 40,
  width = 140,
}: {
  className?: string;
  height?: number;
  width?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className + " -translate-y-1 fill-current"}
    >
      <g clipPath="url(#clip0_1022_393)">
        <path
          d="M17.8353 20.9958C17.4244 17.3913 15.1643 15.6292 11.0151 15.6292C7.35671 15.6292 5.01101 17.1158 5.01101 19.3887C5.01101 21.3115 6.44925 22.4479 9.94211 23.1941L14.3824 24.1354C17.6298 24.8414 19.2735 25.5072 20.5862 26.6437C21.3086 27.2585 21.8851 28.0282 22.2732 28.8962C22.6613 29.7643 22.8513 30.7087 22.8292 31.6602C22.8292 36.6021 18.64 39.6556 11.9853 39.6556C4.8512 39.6556 0.57073 36.206 0 29.9383H4.0693C4.48023 34.0938 7.35671 36.4012 12.0595 36.4012C16.0033 36.4012 18.7998 34.5587 18.7998 31.9357C18.7998 29.9727 17.3216 28.6813 14.4452 28.0155L8.29841 26.6035C3.2874 25.467 1.02731 23.3491 1.02731 19.8249C1.02731 15.2331 5.02242 12.3633 11.3004 12.3633C17.5785 12.3633 20.9572 15.147 21.8247 21.0245L17.8353 20.9958Z"
          // className="fill-current"
          className="fill-current"
        />
        <path
          d="M31.8468 39.0705H27.9658V12.9204H31.8468V39.0705Z"
          className="fill-current"
        />
        <path
          d="M48.1581 39.0705H44.2543V16.1748H35.6934V12.9204H56.7076V16.1748H48.1467L48.1581 39.0705Z"
          className="fill-current"
        />
        <path
          d="M78.6123 21.1167C77.7905 17.6729 75.0339 15.5894 71.2556 15.5894C65.9935 15.5894 62.5406 19.6646 62.5406 25.8175C62.5406 32.1312 65.965 36.4015 71.1015 36.4015C75.3763 36.4015 78.3384 33.658 78.9548 29.1121H82.8985C82.7231 31.325 81.9077 33.4379 80.5528 35.1905C78.2699 38.1694 75.1309 39.656 71.0216 39.656C66.9124 39.656 63.7049 38.1694 61.4048 35.1905C59.3896 32.5226 58.3315 29.2474 58.4028 25.8979C58.4028 17.9427 63.7049 12.335 71.2271 12.335C77.0599 12.335 81.2149 15.4688 82.402 20.7608L78.6123 21.1167Z"
          className="fill-current"
        />
        <path
          d="M136.056 39.0705L124.836 22.5689C123.483 20.5255 122.661 19.2341 121.982 18.0574C122.062 19.2054 122.102 21.7022 122.102 22.9993V39.0705H118.427V12.9204H122.422L133.186 28.8366C134.349 30.5846 135.424 32.3911 136.405 34.2491C136.325 32.797 136.279 31.1899 136.279 29.3474V13.0811H139.977V39.0705H136.056Z"
          className="fill-current"
        />
        <path
          d="M105.1 1.24006C105.821 0.716758 106.642 0.347496 107.51 0.15501C108.379 -0.037476 109.278 -0.049112 110.151 0.120819C110.151 0.120819 109.694 3.42689 107.377 5.2062C105.06 6.9855 101.767 6.56651 101.767 6.56651C102.288 5.75463 102.767 4.91545 103.199 4.05252C103.633 3.226 104.244 1.90013 105.1 1.24006Z"
          className="fill-current"
        />
        <path
          d="M99.541 3.93752C99.2039 3.69188 98.8204 3.5183 98.414 3.42748C98.0076 3.33666 97.587 3.33053 97.1782 3.40947C97.3234 4.32853 97.7813 5.16841 98.4738 5.7857C99.2472 6.29682 100.173 6.52201 101.093 6.42281C100.85 6.05181 100.625 5.66868 100.42 5.27487C100.223 4.77249 99.9233 4.31702 99.541 3.93752Z"
          className="fill-current"
        />
        <path
          d="M99.8035 11.8181C100.117 11.8181 100.437 11.8181 100.751 11.8525C100.382 10.1732 100.608 8.41723 101.39 6.8877C99.8777 8.11025 99.1414 9.98714 98.759 11.864C99.1072 11.8353 99.4553 11.8181 99.8035 11.8181Z"
          className="fill-current"
        />
        <path
          d="M99.8035 12.3862C97.0877 12.3862 94.4328 13.1962 92.1746 14.7136C89.9164 16.231 88.1564 18.3878 87.1171 20.9112C86.0777 23.4346 85.8058 26.2113 86.3356 28.8901C86.8655 31.5689 88.1733 34.0296 90.0937 35.9609C92.0141 37.8922 94.4609 39.2075 97.1246 39.7403C99.7883 40.2732 102.549 39.9997 105.058 38.9545C107.568 37.9093 109.712 36.1392 111.221 33.8682C112.73 31.5972 113.535 28.9273 113.535 26.196C113.535 22.5334 112.089 19.0208 109.513 16.431C106.938 13.8412 103.445 12.3862 99.8035 12.3862ZM105.414 31.8381L99.8035 27.9523L94.1704 31.8381L98.0343 26.196L94.1704 20.5538L99.7807 24.4339L105.391 20.5538L101.533 26.196L105.414 31.8381Z"
          className="fill-current"
        />
      </g>
      <defs>
        <clipPath id="clip0_1022_393">
          <rect width="140" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}