import Card from "./Card"
import bios from "../bios"

export default function About() {
    const cardsMap = bios.map((bio, i) => {
        return (
            <Card
                bio={bio}
            />
        )
    })
    return (
        <div>
            <h1>About Us</h1>
            {cardsMap}
        </div>
    )
}