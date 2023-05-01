import Card from "./Card"
import bios from "../bios.js"

export default function About() {
    const cardsMap = bios.map((bio, i) => {
        return (
            <Card
                bio={bio}
            />
        )
    })
    console.log(bios)
    return (
        <div>
            <h1>About Us</h1>
            {cardsMap}
        </div>
    )
}