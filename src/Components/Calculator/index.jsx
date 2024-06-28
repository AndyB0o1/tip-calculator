export default function Calculator() {
    return (
        <form>
            <label htmlFor="Total_Bill">Total Bill</label>
            <input id="Total_Bill" type="text" /> <br />
            <label htmlFor="No_of_people">No of people</label>
            <input id="No_of_people" type="text" /> <br />
            <label htmlFor="Tip%">Tip %</label>
            <input id="Tip%" type="text" /> <br />
            <input type="submit" value="Submit" />
        </form>
    )
}