export const WorkAt = ({ workAt }: { workAt: Date }) => {
    const display = `記録日時 ${workAt.getFullYear()}/${workAt.getMonth()}/${workAt.getDate()}`;
    return <div>{display}</div>;
};
