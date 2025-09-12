interface Props {
    type: string;
    placeholder?: string;
    button_text?: string;
}
export const SearchBar = ({ type, placeholder, button_text }: Props) => {
    return (
        <div className='search-container'>
            <input type={type} placeholder={placeholder} />
            <button>{button_text}</button>
        </div>
    );
};
