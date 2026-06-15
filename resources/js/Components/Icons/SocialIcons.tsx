import React from "react";

type IconProps = {
    size?: number | string;
    className?: string;
};

export const Facebook = ({ size = 28, className = "" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.611.611 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.618.618 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1" />
    </svg>
);

export const Youtube = ({ size = 28, className = "" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
    >
        <path d="M2.45 11.419c0-3.017.3-4.526 1.237-5.463s2.446-.937 5.463-.937h5.7c3.017 0 4.525 0 5.463.937s1.237 2.446 1.237 5.463v1.162c0 3.017-.3 4.526-1.237 5.463s-2.446.937-5.463.937h-5.7c-3.017 0-4.526 0-5.463-.937S2.45 15.598 2.45 12.581z" />
        <path d="m14.686 11.491l-4.268-2.667a.6.6 0 0 0-.918.509v5.335a.6.6 0 0 0 .918.508l4.268-2.667a.6.6 0 0 0 0-1.018Z" />
    </svg>
);

export const Whatsapp = ({ size = 28, className = "" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        viewBox="0 0 432 432"
        fill="currentColor"
    >
        <path d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z" />
    </svg>
);

export const Instagram = ({ size = 28, className = "" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5" />
        <path d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573V3.43Z" />
        <path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0" />
    </svg>
);

export const Tiktok = ({ size = 28, className = "" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
    >
        <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" />
        <path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3" />
    </svg>
);
