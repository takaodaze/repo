import { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";

type Props = {
    text: string;
};
export const CopyBoard = (props: Props) => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(props.text);
        setCopied(true);
    };

    useEffect(() => {
        if (copied === true) {
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        }
    }, [copied]);

    return (
        <div className="flex items-center justify-between gap-8 rounded-lg border-2 p-3 dark:border-slate-700">
            <div>{props.text}</div>
            <div className="relative">
                <MdContentCopy
                    className="cursor-pointer"
                    onClick={handleClick}
                />
                {copied && (
                    <div className="absolute bottom-6 -right-14 w-32 rounded-2xl bg-green-600  py-2 text-center text-white">
                        コピーしました
                    </div>
                )}
            </div>
        </div>
    );
};
