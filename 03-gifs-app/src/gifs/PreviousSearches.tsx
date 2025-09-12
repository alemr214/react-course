interface Props {
    title_history: string;
    items: string[];
}
export const PreviousSearches = ({ title_history, items }: Props) => {
    return (
        <div className='previous-searches'>
            <h2>{title_history}</h2>
            <ul className='previous-searches-list'>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
