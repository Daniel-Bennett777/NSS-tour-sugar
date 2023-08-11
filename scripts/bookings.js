import { getBookings, getBands } from "./database.js"

const bookingsArray = getBookings()
const bands = getBands()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let bandsInfo = []
        if (itemClicked.dataset.type === "booking"){
            const clickedBooking = itemClicked.dataset.bandsname

            // Iterate through the haulers to find those unloading at the clicked dock
            for(const band of bands ) {
                if(clickedBooking === band.name)
            for (const booking of bookingsArray) {
                if (booking.bandsName === band.name) {
                    bandsInfo.push(band)
                    break;
                }
            }
        }
        let bandsInfoString = "";
        for (const band of bandsInfo) {
            for (const key in band) {
                bandsInfoString += `${key}: ${band[key]}\n`;
            }
            
        }
    
        window.alert(bandsInfoString);
    }
        
    }
    
);



export const bookingsList = () => {

    let bookingHTML = "<ul>"

    for (const booking of bookingsArray) {
        bookingHTML += `<li 
        
                        data-bandsname="${booking.bandsName}"
                        data-venuesname = "${booking.venuesName}"  
                        data-date= "${booking.date}"
                        data-type= "booking">
                        ${booking.bandsName} are playing at ${booking.venuesName} on ${booking.date}
                        </li>`
    }

    bookingHTML += "</ul>"

    return bookingHTML
}