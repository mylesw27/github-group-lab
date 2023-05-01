import Card from "./Card"

export default function About() {
    const cardsMap = bios.map(() => {
        return (
            <Card />
        )
    })
    return (
        <div>
            <h1>About Us</h1>
            {cardsMap}
        </div>
    )
}