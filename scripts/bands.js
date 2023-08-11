import { getBands, getBookings, getMembers} from "./database.js"

const bands = getBands()
const bookings = getBookings()
const members = getMembers()

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    let membersInfoArray = [];
    let venuesNameArray = [];

    if (itemClicked.dataset.type === "band") {
        const clickedBandName = itemClicked.dataset.name;
        
        for (const member of members) {
            if (member.bandName === clickedBandName) {
                membersInfoArray.push(`${member.firstName} ${member.lastName} (${member.bandRole})`);
            }
        }

        for (const booking of bookings) {
            if (clickedBandName === booking.bandsName) {
                venuesNameArray.push(booking.venuesName);
            }
        }

        const membersInfo = membersInfoArray.join(", ");
        const venuesNames = venuesNameArray.join(", ");
        
        let alertMessage = `Band Members of ${clickedBandName}: ${membersInfo}`;
        if (venuesNames.length > 0) {
            alertMessage += `\nUpcoming Shows: ${venuesNames}`;
        }

        window.alert(alertMessage);
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