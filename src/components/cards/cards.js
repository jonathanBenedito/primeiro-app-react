import Card from "../card/card"

const cardsTitle = [ 'Titulo card 1', 'Titulo card 2', 'Titulo card 3' ]

const showCardColor = (color) => {
    console.log(color)
}

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>

            <div>
                {
                    cardsTitle.map((cardTitle, index) => (
                        <Card key={index} showCardColor={showCardColor}>
                            <h3>{cardTitle}</h3>
                            <p>lorem lorem dasdsa</p>
                        </Card>
                    ))
                }

                    <Card color='blue' showCardColor={showCardColor}>
                        <h3>Titulo card</h3>
                        <p>lorem lorem dasdsa</p>
                    </Card>
            </div>
        </div>
    )
}

Card.defaultProps = {
    color: 'red'
}

export default Cards