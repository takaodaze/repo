import { useEffect, useState } from "react";

type Props = {
    num: number;
    interval?: number;
};

export const Countup = (props: Props) => {
    const [cnt, setCnt] = useState(0);
    const [initWait, setInitWait] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setInitWait(false);
        }, 1000);
    }, []);

    useEffect(() => {
        let tId = -1;
        if (initWait) return;
        if (cnt < props.num) {
            tId = window.setTimeout(() => {
                setCnt((p) => ++p);
            }, props.interval ?? 20);
        }
        return () => window.clearTimeout(tId);
    }, [cnt, initWait, props.interval, props.num]);

    return <>{cnt}</>;
};
