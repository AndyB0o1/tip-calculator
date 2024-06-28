import { useState } from "react"

export default function Calculator() {
    const [bill,setBill] = useState(0)
    const [people,setPeople] = useState(0)
    const [tip,setTip] = useState(0)
    
    function handleBill(event){
        setBill(event.target.value)
    }

    function handlePeople(event){
        setPeople(event.target.value)
    }

    function handleTip(event){
        setTip(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()

        setBill(Number(bill))
        setTip(Number(tip))
        setPeople(Number(people))

    
    }

    return (
        <main>
        <form>
            <label htmlFor="Total_Bill">Total Bill</label>
            <input id="Total_Bill" type="number" onChange={handleBill}/> <br />

            <label htmlFor="No_of_people">No of people</label>
            <input id="No_of_people" type="number" onChange={handlePeople}/> <br />

            <label htmlFor="Tip%">Tip %</label>
            <input id="Tip%" type="number" onChange={handleTip}/> <br />


            <input type="submit" value="Submit" onClick={handleSubmit} />
            
        </form>

        <p>Total amount to pay is £{bill + bill * tip/100}</p>
        <p>Total amount per person is £{(bill + ((bill * tip)/100)) / people}</p>
        </main>
        )
}