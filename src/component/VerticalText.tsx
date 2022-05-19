type Props = { text: string };
export const VerticalText = (props: Props) => {
    const arr = new Array(props.text.length).fill(0);
    console.log(arr);

    return (
        <div className="flex flex-col items-center">
            {arr.map((_, idx) => {
                return (
                    <div className="inline" key={`${Math.random()}`}>
                        {props.text[idx]}
                    </div>
                );
            })}
        </div>
    );
};
