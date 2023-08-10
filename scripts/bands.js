import { getBands, getBookings } from "./database.js"

const bands = getBands()
const bookings = getBookings()

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    let venuesNameArray = [];

    if (itemClicked.dataset.type === "band") {
        const clickedBandName = itemClicked.dataset.name;

        for (const booking of bookings) {
            if (clickedBandName === booking.bandsName) {
                venuesNameArray.push(booking.venuesName);
            }
        }

        if (venuesNameArray.length > 0) {
            const venuesNames = venuesNameArray.join(", ");
            window.alert(`${clickedBandName} is playing at the following venues: ${venuesNames}`);
        }
    }
});


export const bandsList = () => {

    let bandsHTML = "<ul>"

    for (const band of bands) {
        bandsHTML += `<li 
                        data-name = "${band.name}"  
                        data-genre= "${band.genre}"
                        data-members= "${band.members}"
                        data-yearFormed= "${band.yearFormed}"

                        data-type = "band">
                        ${band.name}
                        </li>`// Convert each dock object to an <li> and append to the docksHTML string
    }

    bandsHTML += "</ul>"

    return bandsHTML
}