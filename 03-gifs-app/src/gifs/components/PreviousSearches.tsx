interface Props {
    title_history: string;
    items: string[];
    onLabelClicked: (item: string) => void;
}
export const PreviousSearches = ({
    title_history,
    items,
    onLabelClicked,
}: Props) => {
    return (
        <div className='previous-searches'>
            <h2>{title_history}</h2>
            <ul className='previous-searches-list'>
                {items.map((item) => (
                    <li key={item} onClick={() => onLabelClicked(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
