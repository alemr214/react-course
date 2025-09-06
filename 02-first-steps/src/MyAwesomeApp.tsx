function MyAwesomeApp() {
    const name: string = "Alejandro";
    const lastName: string = "Martinez";

    const favoriteGames: string[] = [
        "Fallout New Vegas",
        "Skyrim",
        "Red Dead Redemption 2",
    ];

    const address: {
        zipCode: number;
        country: string;
    } = {
        zipCode: 12345,
        country: "USA",
    };
    const isActive: boolean = true;
    return (
        <>
            <h1>{name}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(", ")}</p>

            <h1>{isActive ? "Active" : "Inactive"}</h1>

            <p>{JSON.stringify(address)}</p>
        </>
    );
}

export default MyAwesomeApp;
